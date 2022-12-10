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

export function SelectedCoffeProducts() {
  const { products } = useContext(CoffeeContext);

  return (
    <SelectCoffeProductColum>
      <Header>Cafés Selecionados</Header>

      {products.length > 0 && (
        <Content>
          {products.map((product) => {
            return <ProductCart />;
          })}
          <CartInfo>
            <div>
              <DescribeCartInfo>Total de Itens</DescribeCartInfo>
              <PriceCartInfo>R$ 29,70</PriceCartInfo>
            </div>

            <div>
              <DescribeCartInfo>Entrega</DescribeCartInfo>
              <PriceCartInfo>R$ 3,50</PriceCartInfo>
            </div>

            <div>
              <TotalCartInfo>Total</TotalCartInfo>
              <TotalCartInfo>R$ 33,20</TotalCartInfo>
            </div>
          </CartInfo>

          <FormSubmitButton>confirmar pedido</FormSubmitButton>
        </Content>
      )}

      {products.length === 0 && (
        <TextoAviso>
          Para prosseguir por favor selecione ao menos um café.
        </TextoAviso>
      )}
    </SelectCoffeProductColum>
  );
}

//
