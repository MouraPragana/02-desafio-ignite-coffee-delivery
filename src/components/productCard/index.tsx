import coffeeBrand1 from '../../assets/brands/coffeeBrand1.svg'
import purpleCart from '../../assets/svg/purpleCart.svg'
import {
  Card,
  ImageCard,
  ProductAmount,
  ProductDescription,
  ProductPrice,
  ProductPriceAndAmout,
  ProductTag,
  ProductTitle,
} from './styles'

export function ProductCard() {
  return (
    <Card>
      <ImageCard src={coffeeBrand1} alt="" />
      <ProductTag>Tradicional</ProductTag>
      <ProductTitle>Expresso Tradicional</ProductTitle>
      <ProductDescription>
        O tradicional café feito com água quente e grãos moídos
      </ProductDescription>
      <ProductPriceAndAmout>
        <ProductPrice>
          <p>R$</p>9,90
        </ProductPrice>
        <ProductAmount>
          <button>-</button>
          <span>100</span>
          <button>+</button>
        </ProductAmount>
        <button>
          <img src={purpleCart} alt="" />
        </button>
      </ProductPriceAndAmout>
    </Card>
  )
}
