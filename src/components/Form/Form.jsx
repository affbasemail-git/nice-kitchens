import { useRef, useState } from "react";
import { useFormContext } from "../../FormContext";
import "./Form.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

export function Form() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const { isOpen, formType, closeForm } = useFormContext();
  const isInstallmentForm = formType === "installment";
  const [loading, setLoading] = useState(false);
  const isSendingRef = useRef(false);

  const formRef = useRef(null);
  const handleClickOutside = (e) => {
    if (formRef.current && !formRef.current.contains(e.target)) {
      closeForm();
    }
  };
  const sendQuizResaults = async (e) => {
    e.preventDefault();

    if (isSendingRef.current) return;
    isSendingRef.current = true;

    setLoading(true);

    try {
      await axios.post(
        isInstallmentForm
          ? "https://kuhni-back.vercel.app/api/sendInstallmentRequest"
          : "https://kuhni-back.vercel.app/api/sendMessageToTelegram",
        isInstallmentForm
          ? {
              name,
              phone: phoneNumber,
              bank,
              quizResaults: {
                type: "Оформлення розстрочки",
                bank,
              },
            }
          : { name, phone: phoneNumber },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      await emailjs.send(
        "service_g69zpkw",
        "template_l4353a8",
        {
          emailTitle: isInstallmentForm
            ? "Нова заявка на оформлення розстрочки"
            : "Новий запит на консультацію з форми",
          messagge: isInstallmentForm
            ? `
📞 Телефон: +380${phoneNumber}
👤 Ім'я: ${name}
🏦 Банк: ${bank}
        `
            : `
📞 Телефон: +380${phoneNumber}
👤 Ім'я: ${name}
        `,
        },
        "CnzOwsFQR0Hu_DO7p",
      );

      setLoading(false);
      setPhoneNumber("");
      setName("");
      setBank("");
      toast.success("Заявку відправлено!");
      closeForm();
    } catch (error) {
      setLoading(false);
      toast.error("Сталася помилка");
      console.error(error);
    } finally {
      isSendingRef.current = false;
    }
  };

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      {isOpen && (
        <div className="fixed-form" onClick={handleClickOutside}>
          <div className="form-wrapper" ref={formRef}>
            <form action="" className="modal-form" onSubmit={sendQuizResaults}>
              <IoMdClose
                className="testimonialsSlider-icon-close"
                onClick={() => closeForm()}
              />
              <h3
                className="text-md font-semiBold"
                style={{ textAlign: "center" }}
              >
                {isInstallmentForm
                  ? "Оформити розстрочку"
                  : "Зв'яжіться з нами!"}
              </h3>
              {!isInstallmentForm && (
                <>
                  <a
                    href="tel:0800-33-78-15"
                    className="text-base font-bold"
                    style={{ margin: "0px 0 10px", textAlign: "center" }}
                  >
                    0800-33-78-15
                  </a>
                  <a
                    href="tel:044-599-69-69"
                    className="text-base font-bold"
                    style={{ margin: "0px 0 10px", textAlign: "center" }}
                  >
                    044-599-69-69
                  </a>
                  <p className="text-base font-semiBold">Тисніть на іконки:</p>
                  <div className="pop-up-icons" style={{ marginTop: "10px" }}>
                    <a href="https://msng.link/o?+380678295889=vi">
                      <img src="/icons/vb.svg" alt="" className="icon-social" />
                    </a>
                    <a href="https://t.me/FainiKuhni">
                      <img src="/icons/tg.svg" alt="" className="icon-social" />
                    </a>
                  </div>
                  <h3
                    className="text-md font-semiBold"
                    style={{ textAlign: "center" }}
                  >
                    Або залиште свої контакти
                  </h3>
                </>
              )}
              <input
                type="text"
                className="name-input-modal-form"
                style={{ maxWidth: "100%" }}
                placeholder="Ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {isInstallmentForm && (
                <label
                  className="installment-form-label text-sm font-semiBold"
                  htmlFor="phone"
                >
                  Номер телефону
                </label>
              )}
              <div
                className={`phone-input-wrapper mobile-margins ${
                  isInstallmentForm ? "installment-phone-input" : ""
                }`}
                style={{ maxWidth: "100%" }}
              >
                <label className="phone-prefix" htmlFor="phone">
                  +380
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, ""); // тільки цифри
                    if (val.length <= 9) {
                      setPhoneNumber(val);
                    }
                  }}
                  required
                />
              </div>
              {isInstallmentForm && (
                <>
                  <label
                    className="installment-form-label text-sm font-semiBold"
                    htmlFor="installment-bank"
                  >
                    Через який банк хочете оформити розстрочку?
                  </label>
                  <select
                    id="installment-bank"
                    className="name-input-modal-form installment-bank-select"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Оберіть банк або попросіть поради
                    </option>
                    <option value="ПриватБанк">ПриватБанк</option>
                    <option value="monobank">monobank</option>
                    <option value="UKRSIBBANK">UKRSIBBANK</option>
                    <option value="Idea Bank">Idea Bank</option>
                    <option value="ПУМБ">ПУМБ</option>
                    <option value="Плати Пізніше">
                      Плати Пізніше
                    </option>
                    <option value="Ще не визначився — потрібна допомога менеджера">
                      Ще не визначився - потрібна допомога менеджера
                    </option>
                  </select>
                </>
              )}
              <button className="modal-submit" disabled={loading}>
                {loading ? "Відправка..." : "Відправити"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
