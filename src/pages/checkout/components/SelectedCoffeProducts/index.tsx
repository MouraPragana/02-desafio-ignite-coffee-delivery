import { useContext } from "react";
import { ProductCart } from "../../../../components/productCart";
import { CoffeeContext } from "../../../../context/coffeeContext";
import { CurrencyConverter } from "../../../../functions/currencyConverter";
import {
  CartInfo,
  Content,
  DescribeCartInfo,
  FormSubmitButton,
  Header,
  PriceCartInfo,
  ProdutoEmEntrega,
  SelectCoffeProductColum,
  TextoAviso,
  TotalCartInfo,
} from "./styles";

export function SelectedCoffeProducts() {
  const { products, lastOrder, setOrderHasArrived, setSecondsToArrive } =
    useContext(CoffeeContext);
  const totalCart = products?.reduce((acc, currentValue) => {
    return acc + currentValue.price * currentValue.quant;
  }, 0);

  const minutesToArrive = lastOrder
    ? String(Math.floor(lastOrder.secondsToArrive / 60)).padStart(2, "0")
    : 0;

  const secondsToArrive = lastOrder
    ? String(lastOrder.secondsToArrive % 60).padStart(2, "0")
    : 0;

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

          {lastOrder.secondsToArrive <= 0 || !lastOrder.secondsToArrive ? (
            <FormSubmitButton>confirmar pedido</FormSubmitButton>
          ) : (
            <ProdutoEmEntrega disabled>
              {minutesToArrive}:{secondsToArrive} para entrega
            </ProdutoEmEntrega>
          )}
        </Content>
      ) : (
        <TextoAviso>
          Para prosseguir por favor selecione ao menos um café.
        </TextoAviso>
      )}
    </SelectCoffeProductColum>
  );
}
