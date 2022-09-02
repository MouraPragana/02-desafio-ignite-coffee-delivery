import { useEffect, useState } from 'react'
import { ProductCard } from '../../../../components/productCard'
import { CoffeeContent, MainContent, Title } from './styles'

import dataJSON from '../../../../data.json'

interface dataProps {
  id: string
  tags: string[]
  title: string
  description: string
  price: number
  imageUrl: string
}

export function ProductsSection() {
  const [data, setDate] = useState<dataProps[]>([])

  useEffect(() => {
    setDate(dataJSON)
  }, [data])

  return (
    <MainContent>
      <Title>Nossos Cafés</Title>
      <CoffeeContent>
        {data.map((coffee) => {
          return (
            <ProductCard
              id={coffee.id}
              key={coffee.id}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
              price={coffee.price}
              imageUrl={coffee.imageUrl}
            />
          )
        })}
      </CoffeeContent>
    </MainContent>
  )
}
