/* eslint-disable no-unused-vars */
import { Product } from './reducer'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function newProduct(newProduct: Product) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  }
}

export function removeProduct(produtToRemove: Product) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      produtToRemove,
    },
  }
}
