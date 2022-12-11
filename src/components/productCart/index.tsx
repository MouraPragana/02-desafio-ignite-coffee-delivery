import { useContext } from "react";
import trashIcon from "../../assets/svg/trashIcon.svg";
import { CoffeeContext } from "../../context/coffeeContext";
import { CurrencyConverter } from "../../functions/currencyConverter";
import {
  ButtonAmount,
  ProducAmountAndRemoveRow,
  ProductAmount,
  ProductCartCard,
  ProductCartCardInfo,
  RemoveButton,
} from "./styles";

interface IProductCartProps {
  id: string;
  tags: string[];
  title: string;
  description: string;
  imageUrl: string;
  quant: number;
  price: number;
}

export function ProductCart({
  id,
  tags,
  title,
  description,
  imageUrl,
  quant,
  price,
}: IProductCartProps) {
  const { removeOneProduct, addNewProduct, deleteAnEntireProduct } =
    useContext(CoffeeContext);

  function handleAddProduct() {
    const newProduct = {
      id,
      tags,
      title,
      description,
      price,
      imageUrl,
      quant: 1,
    };
    addNewProduct(newProduct);
  }

  function handleRemoveProduct() {
    const productToRemove = {
      id,
      tags,
      title,
      description,
      price,
      imageUrl,
      quant: 1,
    };
    removeOneProduct(productToRemove);
  }

  function handleDeleteAnEntireProduct() {
    const productToDelete = {
      id,
      tags,
      title,
      description,
      price,
      imageUrl,
      quant,
    };
    deleteAnEntireProduct(productToDelete);
  }

  return (
    <ProductCartCard>
      <img src={imageUrl} />
      <ProductCartCardInfo>
        <span>{title}</span>
        <ProducAmountAndRemoveRow>
          <ProductAmount>
            <ButtonAmount onClick={handleRemoveProduct}>-</ButtonAmount>
            <span>{quant}</span>
            <ButtonAmount onClick={handleAddProduct}>+</ButtonAmount>
          </ProductAmount>
          <RemoveButton onClick={handleDeleteAnEntireProduct}>
            <img src={trashIcon} />
            <span>Remover</span>
          </RemoveButton>
        </ProducAmountAndRemoveRow>
      </ProductCartCardInfo>
      <span>R$ {CurrencyConverter(price * quant)}</span>
    </ProductCartCard>
  );
}
