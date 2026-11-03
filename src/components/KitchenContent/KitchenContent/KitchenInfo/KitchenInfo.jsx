import { ButtonCalculation } from "../../../ButtonСalculation/ButtonCalculation";
import "./KitchenInfo.css";

export function KitchenInfo({ currentKitchen }) {
  return (
    <div className="kitchen-info">
      <h3 className="text-lg font-semiBold">кухня {currentKitchen.title}</h3>
      <p className="text-sm kitchen-info-code">
        {/* Код товара: <span className="font-semiBold">{currentKitchen.id}</span> */}
      </p>
      {/* <p className="kitchen-info-oldPrice">{currentKitchen.oldPrice}</p> */}
      {currentKitchen.priceOptions ? (
        <ul className="kitchen-info-price-options">
          {currentKitchen.priceOptions.map((option) => (
            <li key={option.title}>
              <span>{option.title}:</span> {option.price}
            </li>
          ))}
        </ul>
      ) : (
        <p className="kitchen-info-price">{currentKitchen.price}</p>
      )}
      <div className="kitchen-info-get-consault">
        <ButtonCalculation text={"Зв’язатись з менеджером"} />
      </div>
    </div>
  );
}
