import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CoffeeReducer, Product } from "../reducers/coffee/reducer";
import {
  deleteProduct,
  newProduct,
  removeProduct,
} from "../reducers/coffee/actions";

interface CoffeeContextType {
  products: Product[];
  addNewProduct: (data: Product) => void;
  removeOneProduct: (data: Product) => void;
  deleteAnEntireProduct: (data: Product) => void;
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
    },
    () => {
      const storedStateAsJSON = localStorage.getItem("@ignite-coffe-delivery");

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return { products: [] };
    }
  );

  const { products } = coffeeState;

  function addNewProduct(data: Product) {
    dispatch(newProduct(data));
  }

  function removeOneProduct(data: Product) {
    dispatch(removeProduct(data));
  }

  function deleteAnEntireProduct(data: Product) {
    dispatch(deleteProduct(data));
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
        products,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
