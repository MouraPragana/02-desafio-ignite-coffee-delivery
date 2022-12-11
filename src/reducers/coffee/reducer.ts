import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Product {
  id: string;
  tags: string[];
  title: string;
  description: string;
  price: number;
  quant: number;
  imageUrl: string;
}

export interface Endereco {
  complemento?: string;
  cep: string;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  uf: string;
}

export interface LastOrder {
  products: Product[];
  enderecoEntrega: Endereco;
  paymentMethod: string;
  dateToDelivery: Date;
  hasArrived: boolean;
  secondsToArrive: number;
}

export interface CoffeeState {
  products: Product[];
  paymentMethod: string;
  lastOrder: LastOrder;
}

export function CoffeeReducer(state: CoffeeState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT: {
      if (
        state.lastOrder.secondsToArrive <= 0 ||
        !state.lastOrder.secondsToArrive
      ) {
        const productIndexOnCart = state.products.findIndex((product) => {
          return product.id === action.payload.newProduct.id;
        });

        if (productIndexOnCart < 0) {
          return produce(state, (draft) => {
            draft.products.push(action.payload.newProduct);
          });
        }

        return produce(state, (draft) => {
          draft.products[productIndexOnCart].quant += 1;
        });
      }
      return state;
    }

    case ActionTypes.REMOVE_PRODUCT: {
      if (
        state.lastOrder.secondsToArrive <= 0 ||
        !state.lastOrder.secondsToArrive
      ) {
        const productIndexOnCart = state.products.findIndex((product) => {
          return product.id === action.payload.productToRemove.id;
        });

        if (productIndexOnCart < 0) {
          return state;
        }

        if (state.products[productIndexOnCart].quant === 1) {
          return produce(state, (draft) => {
            draft.products = draft.products.filter(
              (product) => product.id !== action.payload.productToRemove.id
            );
          });
        }

        return produce(state, (draft) => {
          draft.products[productIndexOnCart].quant -= 1;
        });
      }

      return state;
    }

    case ActionTypes.DELETE_AN_ENTIRE_PRODUCT: {
      if (
        state.lastOrder.secondsToArrive <= 0 ||
        !state.lastOrder.secondsToArrive
      ) {
        return produce(state, (draft) => {
          draft.products = draft.products.filter(
            (item) => item.id !== action.payload.productToDelete.id
          );
        });
      }
      return state;
    }

    case ActionTypes.CHANGE_PAYMENT_METHOD: {
      if (
        state.lastOrder.secondsToArrive <= 0 ||
        !state.lastOrder.secondsToArrive
      ) {
        return produce(state, (draft) => {
          draft.paymentMethod = action.payload.paymentMethod;
        });
      }
      return state;
    }

    case ActionTypes.SET_LAST_ORDER: {
      if (
        state.lastOrder.secondsToArrive <= 0 ||
        !state.lastOrder.secondsToArrive
      ) {
        return produce(state, (draft) => {
          draft.lastOrder = action.payload.data;
        });
      }
      return state;
    }

    case ActionTypes.ORDER_HAS_ARRIVED: {
      return produce(state, (draft) => {
        draft.lastOrder.hasArrived = true;
        draft.lastOrder.secondsToArrive = 0;
        draft.products = [];
        draft.paymentMethod = "";
      });
    }

    case ActionTypes.CHANGE_SECONDS_TO_ARRIVE: {
      return produce(state, (draft) => {
        draft.lastOrder.secondsToArrive = action.payload.data;
      });
    }

    default:
      return state;
  }
}
