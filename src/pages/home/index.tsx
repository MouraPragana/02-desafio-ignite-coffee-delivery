import {
  HomeSection,
  MainContent,
  Title,
  SubTitle,
  AdditionalContent,
  TextContent,
} from './styles'
import imgHome from '../../assets/imgHome.svg'
import cartAdditionalContent from '../../assets/cartAdditionalContent.svg'
import packAdditionalContent from '../../assets/packAdditionalContent.svg'
import deliverAdditionalContent from '../../assets/deliverAdditionalContent.svg'
import coffeeAdditionalContent from '../../assets/coffeeAdditionalContent.svg'

export function Home() {
  return (
    <HomeSection>
      <MainContent>
        <TextContent>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <AdditionalContent>
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
          </AdditionalContent>
        </TextContent>
        <img src={imgHome} alt="" />
      </MainContent>
    </HomeSection>
  )
}
