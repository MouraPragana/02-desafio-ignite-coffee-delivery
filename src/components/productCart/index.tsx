import {
  ButtonAmount,
  ProducAmountAndRemoveRow,
  ProductAmount,
  ProductCartCard,
  ProductCartCardInfo,
  RemoveButton,
} from "./styles";
import coffeBrand1 from "/coffeeBrand1.svg";
import trashIcon from "../../assets/svg/trashIcon.svg";

export function ProductCart() {
  return (
    <ProductCartCard>
      <img src={coffeBrand1} />
      <ProductCartCardInfo>
        <span>Chocolate Quente</span>
        <ProducAmountAndRemoveRow>
          <ProductAmount>
            <ButtonAmount onClick={() => {}}>-</ButtonAmount>
            <span>{1}</span>
            <ButtonAmount onClick={() => {}}>+</ButtonAmount>
          </ProductAmount>
          <RemoveButton>
            <img src={trashIcon} />
            <span>Remover</span>
          </RemoveButton>
        </ProducAmountAndRemoveRow>
      </ProductCartCardInfo>
      <span>R$ 9,90</span>
    </ProductCartCard>
  );
}
