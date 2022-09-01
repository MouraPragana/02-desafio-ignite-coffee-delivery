import { ProductCard } from '../../../../components/productCard'

import { CoffeeContent, MainContent, Title } from './styles'

export function ProductsSection() {
  return (
    <MainContent>
      <Title>Nossos Cafés</Title>
      <CoffeeContent>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </CoffeeContent>
    </MainContent>
  )
}
