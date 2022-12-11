import { ProductsSection } from "./components/productsSection";
import { WelComeSection } from "./components/welcomeSection";

export function Home() {
  return (
    <>
      <WelComeSection />
      <ProductsSection />
    </>
  );
}
