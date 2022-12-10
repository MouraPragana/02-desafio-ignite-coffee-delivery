import { CompleteOrderSection } from "./components/CompleteOrderSection";
import { SelectedCoffeProducts } from "./components/SelectedCoffeProducts";
import { CheckoutPage } from "./styles";

export function Checkout() {
  return (
    <CheckoutPage>
      <CompleteOrderSection />
      <SelectedCoffeProducts />
    </CheckoutPage>
  );
}
