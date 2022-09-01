import purpleCart from '../../assets/svg/purpleCart.svg'
import {
  ButtonAmount,
  ButtonCart,
  Card,
  ImageCard,
  ProductAmount,
  ProductDescription,
  ProductPrice,
  ProductPriceAndAmout,
  ProductTag,
  ProductTitle,
  TagsContent,
} from './styles'
import { CurrencyConverter } from '../../functions/currencyConverter'

interface ProductCardProps {
  tags: string[]
  title: string
  description: string
  price: number
  imageUrl: string
}

export function ProductCard({
  tags,
  title,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  console.log(imageUrl)
  return (
    <Card>
      <ImageCard src={imageUrl} alt="" />
      <TagsContent>
        {tags.map((tag) => {
          return <ProductTag key={tag}>{tag}</ProductTag>
        })}
      </TagsContent>
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductPriceAndAmout>
        <ProductPrice>
          <p>R$</p>
          {CurrencyConverter(price)}
        </ProductPrice>
        <ProductAmount>
          <ButtonAmount>-</ButtonAmount>
          <span>10</span>
          <ButtonAmount>+</ButtonAmount>
        </ProductAmount>
        <ButtonCart>
          <img src={purpleCart} alt="" />
        </ButtonCart>
      </ProductPriceAndAmout>
    </Card>
  )
}
