import { FiCalendar, FiCreditCard, FiMonitor } from "react-icons/fi";
import "./Installment.css";
import { LuPercent } from "react-icons/lu";
import { ButtonCalculation } from "../ButtonСalculation/ButtonCalculation";

const benefits = [
  {
    icon: FiCalendar,
    title: "Термін",
    description: "від 3 до 10 платежів",
  },
  {
    icon: LuPercent,
    title: "0% комісії",
    description: "та страхування",
  },
  {
    icon: FiMonitor,
    title: "Дистанційне оформлення",
    description: "за кілька хвилин",
  },
  {
    icon: FiCreditCard,
    title: "Без довідки про доходи",
  },
];

const banks = [
  {
    name: "ПриватБанк",
    logo: "/installment/banks/privatbank.png",
    className: "privat",
  },
  {
    name: "monobank",
    logo: "/installment/banks/monobank.svg",
    className: "mono",
  },
  {
    name: "UKRSIBBANK",
    logo: "/installment/banks/ukrsibbank.svg",
    className: "ukrsib",
  },
  {
    name: "Idea Bank",
    logo: "/installment/banks/ideabank.svg",
    className: "idea",
  },
  {
    name: "плати пізніше",
    className: "pay-later",
    logo: "/installment/banks/plati.png",
  },
  { name: "ПУМБ", logo: "/installment/banks/pumb.webp", className: "pumb" },
];

export function Installment() {
  return (
    <section className="installment" aria-labelledby="installment-title">
      <div className="installment-hero">
        <div className="container">
          <div className="installment-copy">
            <h2 id="installment-title" className="text-lg font-medium">
              Кухня у розстрочку
            </h2>
            <p className="installment-description text-base">
              Отримайте кухню вже зараз, а сплачуйте частинами на вигідних
              умовах.
            </p>
          </div>
          <div className="installment-benefits">
            {benefits.map(({ icon: Icon, title, description }) => (
              <article className="installment-benefit" key={title}>
                <div className="installment-benefit-icon" aria-hidden="true">
                  <Icon />
                </div>
                <div className="installment-benefit-copy">
                  <h3 className="text-base font-bold">{title}</h3>
                  {description && <p className="text-base">{description}</p>}
                </div>
              </article>
            ))}
          </div>
          <div className="installment-cta">
            <ButtonCalculation
              text="Оформити розстрочку"
              formType="installment"
            />
          </div>
        </div>
      </div>
      <div className="container installment-banks">
        <h3 className="text-lg font-medium">Оформлюйте у зручному банку</h3>
        <ul className="installment-bank-list" aria-label="Банки-партнери">
          {banks.map(({ name, logo, className }) => (
            <li className={`installment-bank ${className}`} key={name}>
              {logo ? (
                <img src={logo} alt={name} loading="lazy" />
              ) : (
                <span>{name}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
