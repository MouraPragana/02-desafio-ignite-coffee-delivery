import {
  AdditionalTextContent,
  MainContent,
  SubTitle,
  TextContent,
  Title,
  WelcomeSection,
} from "./styles";

import imgHome from "../../../../assets/svg/imgHome.svg";
import cartAdditionalContent from "../../../../assets/svg/cartAdditionalContent.svg";
import packAdditionalContent from "../../../../assets/svg/packAdditionalContent.svg";
import deliverAdditionalContent from "../../../../assets/svg/deliverAdditionalContent.svg";
import coffeeAdditionalContent from "../../../../assets/svg/coffeeAdditionalContent.svg";

export function WelComeSection() {
  return (
    <WelcomeSection>
      <MainContent>
        <TextContent>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <AdditionalTextContent>
            <span>
              <img src={cartAdditionalContent} alt="cartAdditionalContent" />
              Compra simples e segura
            </span>
            <span>
              <img src={packAdditionalContent} alt="packAdditionalContent" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <img
                src={deliverAdditionalContent}
                alt="deliverAdditionalContent"
              />
              Entrega rápida e rastreada
            </span>
            <span>
              <img
                src={coffeeAdditionalContent}
                alt="coffeeAdditionalContent"
              />
              O café chega fresquinho até você
            </span>
          </AdditionalTextContent>
        </TextContent>
        <img src={imgHome} alt="" />
      </MainContent>
    </WelcomeSection>
  );
}
