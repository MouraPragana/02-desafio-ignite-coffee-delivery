/* eslint-disable no-unused-vars */
import { Product } from "./reducer";

export enum ActionTypes {
  ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  DELETE_AN_ENTIRE_PRODUCT = "DELETE_AN_ENTIRE_PRODUCT",
  CHANGE_PAYMENT_METHOD = "CHANGE_PAYMENT_METHOD",
}

export function newProduct(newProduct: Product) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      newProduct,
    },
  };
}

export function removeProduct(productToRemove: Product) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: {
      productToRemove,
    },
  };
}

export function deleteProduct(productToDelete: Product) {
  return {
    type: ActionTypes.DELETE_AN_ENTIRE_PRODUCT,
    payload: {
      productToDelete,
    },
  };
}

export function changePaymentMethod(paymentMethod: string) {
  return {
    type: ActionTypes.CHANGE_PAYMENT_METHOD,
    payload: {
      paymentMethod,
    },
  };
}
