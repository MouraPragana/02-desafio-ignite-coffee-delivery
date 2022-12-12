import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import cash from "../../../../assets/svg/cash.svg";
import creditCard from "../../../../assets/svg/creditCard.svg";
import Currency from "../../../../assets/svg/currency.svg";
import debitCard from "../../../../assets/svg/debitCard.svg";
import Gps from "../../../../assets/svg/gps.svg";
import { PayamentCard } from "../../../../components/payamentCard";
import { CoffeeContext } from "../../../../context/coffeeContext";

import {
  AddressAndPaymentColum,
  Body,
  Content,
  FooterPayament,
  Header,
  InputPlaceholder,
  InputStyled,
  RowPayament,
  Title,
} from "./styles";

export function CompleteOrderSection() {
  const { paymentMethod, selectPaymentMethod, lastOrder } =
    useContext(CoffeeContext);

  const isFormDisabled =
    lastOrder?.secondsToArrive <= 0 || !lastOrder?.secondsToArrive
      ? false
      : true;
  const { register } = useFormContext();

  function handleChangePaymentMethod(data: string) {
    selectPaymentMethod(data);
  }

  return (
    <AddressAndPaymentColum>
      <Header>Complete seu pedido</Header>
      <Body>
        <Title>
          <img src={Gps} alt="gpsIcon" />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Title>
        <Content>
          <InputStyled
            disabled={isFormDisabled}
            defaultValue={isFormDisabled ? lastOrder.enderecoEntrega.cep : ""}
            width="200px"
            type="text"
            placeholder="CEP"
            {...register("cep")}
            required
          />
          <InputStyled
            disabled={isFormDisabled}
            defaultValue={isFormDisabled ? lastOrder.enderecoEntrega.rua : ""}
            width="560px"
            type="text"
            placeholder="Rua"
            {...register("rua")}
            required
          />

          <div>
            <InputStyled
              disabled={isFormDisabled}
              defaultValue={
                isFormDisabled ? lastOrder.enderecoEntrega.numero : ""
              }
              width="200px"
              type="text"
              placeholder="Número"
              {...register("numero", { valueAsNumber: true })}
              required
            />
            <InputPlaceholder>
              <input
                disabled={isFormDisabled}
                defaultValue={
                  isFormDisabled ? lastOrder.enderecoEntrega.complemento : ""
                }
                id="complemento"
                placeholder="Complemento"
                {...register("complemento")}
              />
              <label htmlFor="complemento">opcional</label>
            </InputPlaceholder>
          </div>

          <div>
            <InputStyled
              disabled={isFormDisabled}
              defaultValue={
                isFormDisabled ? lastOrder.enderecoEntrega.bairro : ""
              }
              width="200px"
              type="text"
              placeholder="Bairro"
              {...register("bairro")}
              required
            />
            <InputStyled
              disabled={isFormDisabled}
              defaultValue={
                isFormDisabled ? lastOrder.enderecoEntrega.cidade : ""
              }
              width="276px"
              type="text"
              placeholder="Cidade"
              {...register("cidade")}
              required
            />
            <InputStyled
              disabled={isFormDisabled}
              defaultValue={isFormDisabled ? lastOrder.enderecoEntrega.uf : ""}
              width="60px"
              type="text"
              placeholder="UF"
              {...register("uf")}
              required
            />
          </div>
        </Content>
      </Body>
      <FooterPayament>
        <Title>
          <img src={Currency} alt="currencyIcon" />
          <div>
            <span>Pagamento</span>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </Title>
        <RowPayament>
          <PayamentCard
            icon={creditCard}
            title={"cartão de crédito"}
            active={paymentMethod}
            onClick={() => handleChangePaymentMethod("cartão de crédito")}
          />
          <PayamentCard
            icon={debitCard}
            title={"cartão de débito"}
            active={paymentMethod}
            onClick={() => handleChangePaymentMethod("cartão de débito")}
          />
          <PayamentCard
            icon={cash}
            title={"dinheiro"}
            active={paymentMethod}
            onClick={() => handleChangePaymentMethod("dinheiro")}
          />
        </RowPayament>
      </FooterPayament>
    </AddressAndPaymentColum>
  );
}
