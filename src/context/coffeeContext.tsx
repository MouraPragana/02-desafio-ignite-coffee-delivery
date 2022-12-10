import { createContext, ReactNode, useReducer } from 'react'
import { CoffeeReducer, Product } from '../reducers/coffee/reducer'
import { newProduct, removeProduct } from '../reducers/coffee/actions'

interface CoffeeContextType {
  products: Product[]
  productsOnCart: number
  addNewProduct: (data: Product) => void
  removeOneProduct: (data: Product) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(CoffeeReducer, {
    products: [],
    productsOnCart: 0,
  })

  const { products, productsOnCart } = coffeeState

  function addNewProduct(data: Product) {
    dispatch(newProduct(data))
  }

  function removeOneProduct(data: Product) {
    dispatch(removeProduct(data))
  }

  return (
    <CoffeeContext.Provider
      value={{ addNewProduct, removeOneProduct, products, productsOnCart }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
