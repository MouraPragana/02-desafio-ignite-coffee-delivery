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
import { useContext } from 'react'
import { CoffeeContext } from '../../context/coffeeContext'

interface ProductCardProps {
  id: string
  tags: string[]
  title: string
  description: string
  price: number
  imageUrl: string
}

export function ProductCard({
  id,
  tags,
  title,
  description,
  price,
  imageUrl,
}: ProductCardProps) {
  const { addProduct, removeProduct, productQuant } = useContext(CoffeeContext)

  function handleAddProduct() {
    addProduct(id)
  }

  function handleRemoveProduct() {
    removeProduct(id)
  }

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
          <ButtonAmount onClick={handleRemoveProduct}>-</ButtonAmount>
          <span>{productQuant(id)}</span>
          <ButtonAmount onClick={handleAddProduct}>+</ButtonAmount>
        </ProductAmount>
        <ButtonCart>
          <img src={purpleCart} alt="" />
        </ButtonCart>
      </ProductPriceAndAmout>
    </Card>
  )
}
