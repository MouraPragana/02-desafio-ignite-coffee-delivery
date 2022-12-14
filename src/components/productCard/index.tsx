import { useContext } from "react";
import purpleCart from "../../assets/svg/purpleCart.svg";
import { CoffeeContext } from "../../context/coffeeContext";
import { CurrencyConverter } from "../../functions/currencyConverter";
import {
  ButtonAmount,
  ButtonCart,
  Card,
  ImageCard,
  ProductAmount,
  ProductDescription,
  ProductPrice,
  ProductPriceAndAmout,
  ProductTag,
  ProductTitle,
  TagsContent,
} from "./styles";

interface ProductCardProps {
  id: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({
  id,
  tags,
  title,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  const { addNewProduct, removeOneProduct, products } =
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

  const productQuantOnCart = products?.find((product) => product.id === id)
    ? products?.find((product) => product.id === id)?.quant
    : 0;

  return (
    <Card>
      <ImageCard src={imageUrl} alt="" />
      <TagsContent>
        {tags.map((tag) => {
          return <ProductTag key={tag}>{tag}</ProductTag>;
        })}
      </TagsContent>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPriceAndAmout>
        <ProductPrice>
          <p>R$</p>
          {CurrencyConverter(price)}
        </ProductPrice>
        <ProductAmount>
          <ButtonAmount onClick={handleRemoveProduct} type="button">
            -
          </ButtonAmount>
          <span>{productQuantOnCart}</span>
          <ButtonAmount onClick={handleAddProduct} type="button">
            +
          </ButtonAmount>
        </ProductAmount>
        <ButtonCart to="/checkout">
          <img src={purpleCart} alt="" />
        </ButtonCart>
      </ProductPriceAndAmout>
    </Card>
  );
}
