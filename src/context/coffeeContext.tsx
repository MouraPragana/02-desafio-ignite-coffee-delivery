import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CoffeeReducer, Product } from "../reducers/coffee/reducer";
import {
  deleteProduct,
  newProduct,
  removeProduct,
  changePaymentMethod,
} from "../reducers/coffee/actions";

interface CoffeeContextType {
  products: Product[];
  paymentMethod: string;
  addNewProduct: (data: Product) => void;
  removeOneProduct: (data: Product) => void;
  deleteAnEntireProduct: (data: Product) => void;
  selectPaymentMethod: (data: string) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [coffeeState, dispatch] = useReducer(
    CoffeeReducer,
    {
      products: [],
      paymentMethod: "",
    },
    () => {
      const storedStateAsJSON = localStorage.getItem("@ignite-coffe-delivery");

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return { products: [], paymentMethod: "" };
    }
  );

  const { products, paymentMethod } = coffeeState;

  function addNewProduct(data: Product) {
    dispatch(newProduct(data));
  }

  function removeOneProduct(data: Product) {
    dispatch(removeProduct(data));
  }

  function deleteAnEntireProduct(data: Product) {
    dispatch(deleteProduct(data));
  }

  function selectPaymentMethod(data: string) {
    dispatch(changePaymentMethod(data));
  }

  useEffect(() => {
    localStorage.setItem("@ignite-coffe-delivery", JSON.stringify(coffeeState));
  }, [coffeeState]);

  return (
    <CoffeeContext.Provider
      value={{
        addNewProduct,
        removeOneProduct,
        deleteAnEntireProduct,
        selectPaymentMethod,
        products,
        paymentMethod,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
