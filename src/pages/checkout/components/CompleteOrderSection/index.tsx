import cash from "../../../../assets/svg/cash.svg";
import creditCard from "../../../../assets/svg/creditCard.svg";
import Currency from "../../../../assets/svg/currency.svg";
import debitCard from "../../../../assets/svg/debitCard.svg";
import Gps from "../../../../assets/svg/gps.svg";
import { PayamentCard } from "../../../../components/payamentCard";

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
          <InputStyled width="200px" type="text" placeholder="CEP" />
          <InputStyled width="560px" type="text" placeholder="Rua" />

          <div>
            <InputStyled width="200px" type="text" placeholder="Número" />
            <InputPlaceholder>
              <input id="complemento" placeholder="Complemento" />
              <label htmlFor="complemento">opcional</label>
            </InputPlaceholder>
          </div>

          <div>
            <InputStyled width="200px" type="text" placeholder="Bairro" />
            <InputStyled width="276px" type="text" placeholder="Cidade" />
            <InputStyled width="60px" type="text" placeholder="UF" />
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
          <PayamentCard icon={creditCard} />
          <PayamentCard icon={debitCard} />
          <PayamentCard icon={cash} />
        </RowPayament>
      </FooterPayament>
    </AddressAndPaymentColum>
  );
}
