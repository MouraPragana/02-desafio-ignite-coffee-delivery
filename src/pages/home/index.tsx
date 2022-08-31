import {
  HomeContainer,
  HomeContent,
  Title,
  SubTitle,
  AdicionalContent,
  LeftContent,
} from './styles'
import imgHome from '../../assets/imgHome.svg'
import cartAdicionalContent from '../../assets/cartAdicionalContent.svg'
import packAdicionalContent from '../../assets/packAdicionalContent.svg'
import deliverAdicionalContent from '../../assets/deliverAdicionalContent.svg'
import coffeeAdicionalContent from '../../assets/coffeeAdicionalContent.svg'

export function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <LeftContent>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <AdicionalContent>
            <span>
              <img src={cartAdicionalContent} alt="cartAdicionalContent" />
              Compra simples e segura
            </span>
            <span>
              <img src={packAdicionalContent} alt="packAdicionalContent" />
              Embalagem mantém o café intacto
            </span>
            <span>
              <img
                src={deliverAdicionalContent}
                alt="deliverAdicionalContent"
              />
              Entrega rápida e rastreada
            </span>
            <span>
              <img src={coffeeAdicionalContent} alt="coffeeAdicionalContent" />O
              café chega fresquinho até você
            </span>
          </AdicionalContent>
        </LeftContent>
        <img src={imgHome} alt="" />
      </HomeContent>
    </HomeContainer>
  )
}
