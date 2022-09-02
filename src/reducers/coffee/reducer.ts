import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Product {
  id: string
  tags: string[]
  title: string
  description: string
  price: number
  quant: number
  imageUrl: string
}

export interface CoffeeState {
  products: Product[]
  productsOnCart: number
}

export function coffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      const productIndexOnCart = state.products.findIndex((product) => {
        return product.id === action.payload.newProduct.id
      })

      if (productIndexOnCart < 0) {
        return produce(state, (draft) => {
          draft.products.push(action.payload.newProduct)
          draft.productsOnCart += 1
        })
      }

      return produce(state, (draft) => {
        draft.products[productIndexOnCart].quant += 1
      })
    }

    case ActionTypes.REMOVE_PRODUCT: {
      const productIndexOnCart = state.products.findIndex((product) => {
        return product.id === action.payload.product.id
      })

      if (productIndexOnCart < 0) {
        return state
      }

      if (state.products[productIndexOnCart].quant === 1) {
        return produce(state, (draft) => {
          draft.productsOnCart = state.productsOnCart - 1
          draft.products = draft.products.filter(
            (product) => product.id !== action.payload.product.id,
          )
        })
      }

      return produce(state, (draft) => {
        draft.products[productIndexOnCart].quant -= 1
      })
    }

    default:
      return state
  }
}
