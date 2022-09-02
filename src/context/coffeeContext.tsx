import { createContext, ReactNode, useState } from 'react'

interface products {
  id: string
  quant: number
}

interface CoffeeContextType {
  products: products[]
  addProduct: (id: string) => void
  removeProduct: (id: string) => void
  productQuant: (id: string) => number
  productsOnCart: () => number
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [products, setProducts] = useState<products[]>([])

  function addProduct(id: string) {
    const findProductIndex = products.findIndex((item) => item.id === id)

    if (findProductIndex < 0) {
      const newProduct = {
        id,
        quant: 1,
      }
      setProducts((state) => [...state, newProduct])
    } else {
      const newProductList = products.map((item) =>
        item.id === id
          ? {
              ...item,
              quant: item.quant + 1,
            }
          : item,
      )
      setProducts(newProductList)
    }
  }

  function removeProduct(id: string) {
    const findProductIndex = products.findIndex((item) => item.id === id)

    if (findProductIndex >= 0) {
      const newProductList = products.map((item) =>
        item.id === id
          ? { ...item, quant: item.quant > 0 ? item.quant - 1 : 0 }
          : item,
      )
      const productListOnCart = newProductList.filter((item) => item.quant > 0)
      setProducts(productListOnCart)
    }
  }

  const productsOnCart = () => {
    return products.length
  }

  const productQuant = (id: string) => {
    const product = products.find((item) => item.id === id)
    return product?.quant ? product.quant : 0
  }

  return (
    <CoffeeContext.Provider
      value={{
        products,
        addProduct,
        removeProduct,
        productsOnCart,
        productQuant,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
