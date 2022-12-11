import { ProductCart } from "../../../../components/productCart";
import {
  CartInfo,
  Content,
  DescribeCartInfo,
  FormSubmitButton,
  Header,
  PriceCartInfo,
  SelectCoffeProductColum,
  TextoAviso,
  TotalCartInfo,
} from "./styles";

import { useContext } from "react";
import { CoffeeContext } from "../../../../context/coffeeContext";
import { CurrencyConverter } from "../../../../functions/currencyConverter";

export function SelectedCoffeProducts() {
  const { products } = useContext(CoffeeContext);
  const totalCart = products?.reduce((acc, currentValue) => {
    return acc + currentValue.price * currentValue.quant;
  }, 0);

  return (
    <SelectCoffeProductColum>
      <Header>Cafés Selecionados</Header>

      {products && products.length > 0 ? (
        <Content>
          {products.map((product) => {
            return (
              <ProductCart
                key={product.id}
                id={product.id}
                tags={product.tags}
                description={product.description}
                title={product.title}
                imageUrl={product.imageUrl}
                quant={product.quant}
                price={product.price}
              />
            );
          })}
          <CartInfo>
            <div>
              <DescribeCartInfo>Total de Itens</DescribeCartInfo>
              <PriceCartInfo>R$ {CurrencyConverter(totalCart)}</PriceCartInfo>
            </div>

            <div>
              <DescribeCartInfo>Entrega</DescribeCartInfo>
              <PriceCartInfo>R$ 3,50</PriceCartInfo>
            </div>

            <div>
              <TotalCartInfo>Total</TotalCartInfo>
              <TotalCartInfo>
                R$ {CurrencyConverter(totalCart + 3.5)}
              </TotalCartInfo>
            </div>
          </CartInfo>

          <FormSubmitButton>confirmar pedido</FormSubmitButton>
        </Content>
      ) : (
        <TextoAviso>
          Para prosseguir por favor selecione ao menos um café.
        </TextoAviso>
      )}
    </SelectCoffeProductColum>
  );
}
