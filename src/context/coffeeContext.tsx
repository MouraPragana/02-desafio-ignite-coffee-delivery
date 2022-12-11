import { differenceInSeconds } from "date-fns";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  changePaymentMethod,
  changeSecondsToArrive,
  deleteProduct,
  lastOrderChange,
  lastOrderHasArrivedFunction,
  newProduct,
  removeProduct,
} from "../reducers/coffee/actions";
import { CoffeeReducer, LastOrder, Product } from "../reducers/coffee/reducer";

interface CoffeeContextType {
  products: Product[];
  paymentMethod: string;
  lastOrder: LastOrder;
  addNewProduct: (data: Product) => void;
  removeOneProduct: (data: Product) => void;
  deleteAnEntireProduct: (data: Product) => void;
  selectPaymentMethod: (data: string) => void;
  setLastOrder: (data: LastOrder) => void;
  setOrderHasArrived: () => void;
  setSecondsToArrive: (data: number) => void;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [coffeeState, dispatch] = useReducer(
    CoffeeReducer,
    {
      products: [],
      paymentMethod: "",
      lastOrder: {},
    },
    () => {
      const storedStateAsJSON = localStorage.getItem("@ignite-coffe-delivery");

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return {
        products: [],
        paymentMethod: "",
        lastOrder: {},
      };
    }
  );

  const { products, paymentMethod, lastOrder } = coffeeState;

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

  function setLastOrder(data: LastOrder) {
    dispatch(lastOrderChange(data));
  }

  function setOrderHasArrived() {
    dispatch(lastOrderHasArrivedFunction());
  }

  function setSecondsToArrive(data: number) {
    dispatch(changeSecondsToArrive(data));
  }

  useEffect(() => {
    localStorage.setItem("@ignite-coffe-delivery", JSON.stringify(coffeeState));
  }, [coffeeState]);

  useEffect(() => {
    let interval: number;

    if (lastOrder && !lastOrder.hasArrived) {
      interval = setInterval(() => {
        const secondsToDeliver = differenceInSeconds(
          new Date(lastOrder.dateToDelivery),
          new Date()
        );

        if (secondsToDeliver <= 0) {
          setOrderHasArrived();
          location.pathname === "/checkout" && navigate(0);
        }

        if (secondsToDeliver > 0) {
          return setSecondsToArrive(secondsToDeliver);
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [lastOrder, setOrderHasArrived, setSecondsToArrive]);

  return (
    <CoffeeContext.Provider
      value={{
        addNewProduct,
        removeOneProduct,
        deleteAnEntireProduct,
        selectPaymentMethod,
        setLastOrder,
        setOrderHasArrived,
        setSecondsToArrive,
        products,
        paymentMethod,
        lastOrder,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
