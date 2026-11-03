import "./Hero.css";
import { ButtonCalculation } from "../ButtonСalculation/ButtonCalculation";

export function Hero() {
  return (
    <section
      className="hero-section"
      aria-label="Кухні на замовлення у Києві та області"
    >
      <div className="hero-section-container">
        <h1 className="text-xxl font-medium">
          <span className="font-bold">Кухня Вашої мрії</span> <br />
          під ваші розміри за ціною стандартної
        </h1>
        <div className="hero-advantages" aria-label="Наші переваги">
          <div className="hero-advantages-row">
            <div className="hero-circle"></div>
            <p className="text-base">
              <span className="font-bold">Безкоштовний</span>
              <br /> виїзд замірника
            </p>
          </div>
          <div className="hero-advantages-row">
            <div className="hero-circle"></div>
            <p className="text-base">
              <span className="font-bold">Доставка</span>
              <br /> та монтаж
            </p>
          </div>
          <div className="hero-advantages-row">
            <div className="hero-circle"></div>
            <p className="text-base">
              <span className="font-bold">Гарантія</span>
              <br /> 5 років
            </p>
          </div>
        </div>
        <div className="hero-button-container">
          <ButtonCalculation text={"Отримати розрахунок"} />
        </div>
        <div
          className="hero-discount"
          role="note"
          aria-label="Акційна пропозиція"
          style={{display:"none"}}
        >
          <div className="hero-discount-row">
            <img
              src="/hero/discount.webp"
              alt="Акція — посудомийка у подарунок"
              className="hero-discount-row-img"
            />
            <div className="hero-discount-text text-base font-bold">
              {" "}
              <span style={{ color: "#DD4631" }}>АКЦІЯ!</span> Посудомийка в
              подарунок лише цього місяця <br />
              <p className="text-xs font-semiBold">
                *деталі акції уточнюйте у менеджера
              </p>
            </div>
          </div>
          <div className="hero-kitchens">
            <div className="hero-kitchen">
              <img
                src="/hero/kitchen-1.webp"
                alt="Сучасна кухня на замовлення"
              />
              <div className="font-sm white font-semiBold">
                <span className="font-xxxs white font-medium">ціни від</span>
                <br />
                7 770 грн./м.п.
              </div>
            </div>
            <div className="hero-kitchen">
              <img
                src="/hero/kitchen-2.webp"
                alt="Кухня з преміум матеріалів"
              />
              {/* <div className="font-sm white font-semiBold">
                <span className="font-xxxs white font-medium">ціни від</span>
                <br />
                7 770 грн./м.п.
              </div> */}
            </div>
            <div className="hero-kitchen hero-kithchen-mobile-hidden">
              <img
                src="/hero/kitchen-3.webp"
                alt="Доступна кухня на замовлення"
              />
              {/* <div className="font-sm white font-semiBold">
                <span className="font-xxxs white font-medium">ціни від</span>
                <br />
                7 770 грн./м.п.
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
