import { zodResolver } from "@hookform/resolvers/zod";
import { addMinutes, differenceInSeconds } from "date-fns";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";
import { CoffeeContext } from "../../context/coffeeContext";
import { CompleteOrderSection } from "./components/CompleteOrderSection";
import { SelectedCoffeProducts } from "./components/SelectedCoffeProducts";
import { CheckoutPage } from "./styles";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const navigate = useNavigate();
  const { paymentMethod, products, setLastOrder } = useContext(CoffeeContext);

  const schema = z.object({
    cep: z.string().length(8, { message: "Cep precisa ter 8 caracteres" }),
    rua: z.string().min(1, { message: "Por favor escreva uma rua válida." }),
    numero: z.number(),
    complemento: z.string().optional(),
    bairro: z
      .string()
      .min(1, { message: "Por favor escreva um bairro válido." }),
    cidade: z
      .string()
      .min(1, { message: "Por favor escreva uma cidade válida." }),
    uf: z.string().min(1, { message: "Por favor escreva um UF válidO." }),
  });

  type newOrderData = z.infer<typeof schema>;

  const methods = useForm<newOrderData>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = methods;

  function onSubmit(data: newOrderData) {
    const lastOrder = {
      products,
      enderecoEntrega: data,
      paymentMethod,
      dateToDelivery: addMinutes(new Date(), 30),
      hasArrived: false,
      secondsToArrive: differenceInSeconds(
        addMinutes(new Date(), 30),
        new Date()
      ),
    };
    setLastOrder(lastOrder);
    navigate("/success");
  }

  function onError(e: any) {
    console.log(e);
  }

  return (
    <FormProvider {...methods}>
      <CheckoutPage onSubmit={handleSubmit(onSubmit, onError)}>
        <CompleteOrderSection />
        <SelectedCoffeProducts />
      </CheckoutPage>
    </FormProvider>
  );
}
