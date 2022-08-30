import {
  HomeContainer,
  HomeContent,
  Title,
  SubTitle,
  AdicionalContent,
  LeftContent,
} from './styles'
import imgHome from '../../assets/imgHome.svg'

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
          <AdicionalContent>Conteudo Adicional</AdicionalContent>
        </LeftContent>
        <img src={imgHome} alt="" />
      </HomeContent>
    </HomeContainer>
  )
}
