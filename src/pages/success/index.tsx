import { Body, Item, Left, SuccessContainer, Title } from "./styles";
import GpsSuccess from "../../assets/svg/gpsSuccess.svg";
import TimeSuccess from "../../assets/svg/timeSuccess.svg";
import MoneySuccess from "../../assets/svg/moneySuccess.svg";
import CarDelivery from "../../assets/svg/carDelivery.svg";
import { useContext } from "react";
import { CoffeeContext } from "../../context/coffeeContext";
import { SpanPagamento } from "../home/components/welcomeSection/styles";
import { Navigate } from "react-router-dom";

export function Success() {
  const { lastOrder } = useContext(CoffeeContext);

  return (
    <>
      {lastOrder && lastOrder?.hasArrived ? (
        <Navigate to="/" />
      ) : (
        <SuccessContainer>
          <Title>
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </Title>
          <Body>
            <Left>
              <Item>
                <img src={GpsSuccess} />
                <div>
                  <p>
                    Entrega em{" "}
                    <span>
                      {lastOrder &&
                        lastOrder.enderecoEntrega &&
                        lastOrder.enderecoEntrega.rua}
                    </span>
                  </p>
                  <p>
                    {lastOrder &&
                      lastOrder.enderecoEntrega &&
                      lastOrder.enderecoEntrega.bairro}{" "}
                    -{" "}
                    {lastOrder &&
                      lastOrder.enderecoEntrega &&
                      lastOrder.enderecoEntrega.cidade}
                    ,{" "}
                    {lastOrder &&
                      lastOrder.enderecoEntrega &&
                      lastOrder.enderecoEntrega.uf}
                  </p>
                </div>
              </Item>
              <Item>
                <img src={TimeSuccess} />
                <div>
                  <p>Previsão de entrega</p>
                  <span>20 min - 30 min</span>
                </div>
              </Item>
              <Item>
                <img src={MoneySuccess} />
                <div>
                  <p>Pagamento na entrega</p>
                  <SpanPagamento>
                    {lastOrder && lastOrder.paymentMethod}
                  </SpanPagamento>
                </div>
              </Item>
            </Left>
            <img src={CarDelivery} />
          </Body>
        </SuccessContainer>
      )}
    </>
  );
}
