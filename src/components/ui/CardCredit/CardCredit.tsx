import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import styles from "./CardCredit.module.css";
import { useState } from "react";
import useCartContext from "../../../hooks/useCartContext";
import { CartProduct } from "../../../interface";
export const CardCredit = () => {
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

 const {dispatch} = useCartContext()
  const { number, name, expiry, cvc } = cardData;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setCardData({
      ...cardData,
      focus: e.target.name,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validar que los campos no esten vacios
    const { number, name, expiry, cvc } = cardData;
    if ([number, name, expiry, cvc].includes("")) {
      return;
    }

    //Limpiar el estado
    setCardData({
      number: "",
      name: "",
      expiry: "",
      cvc: "",
      focus: "",
    });

    dispatch({type:"CLEAR_CART", payload: { } as CartProduct})
  };

  return (
    <div className={styles.container}>
      <div>
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={cardData.focus}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.formControl}>
          <label htmlFor="number">Card Number </label>
          <input
            onChange={handleInputChange}
            type="text"
            name="number"
            id="number"
            value={number}
            onFocus={handleInputFocus}
          />
        </div>
        <div className={styles.formControl}>
          <label htmlFor="name">Card Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="name"
            id="name"
            value={name}
            onFocus={handleInputFocus}
          />
        </div>

        <div className={styles.formInputGroup}>
          <div className={styles.formControl}>
            <label htmlFor="expiry">Card Expiry</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="expiry"
              id="expiry"
              value={expiry}
              onFocus={handleInputFocus}
            />
          </div>
        </div>
        <div className={styles.formControl}>
          <label htmlFor="cvc">Card CVC</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="cvc"
            id="cvc"
            value={cvc}
            onFocus={handleInputFocus}
          />
        </div>
        <button type="submit" className={styles.buyButton}>
          Buy now
        </button>
      </form>
    </div>
  );
};