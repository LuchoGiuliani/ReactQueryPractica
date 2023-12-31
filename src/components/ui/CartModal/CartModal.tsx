import styles from "./CartModal.module.css";
import Close from "../../../assets/close.svg";
import { FC } from "react";

import { Table } from "../Table/Table";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../../context/ThemeContext";

interface Props {
  handleShowCartModal: () => void;
}

export const CartModal: FC<Props> = ({ handleShowCartModal }) => {

 
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/checkout");
    handleShowCartModal();
  };

  return (
    <div className={`${styles.modalContainer}`}>
      <button className={styles.modalCloseButton} onClick={handleShowCartModal}>
        <img src={Close} alt="close" />
      </button>
      <Table />
      <div>
        <button
          onClick={handleNavigate}
          className={styles.modalButtonContainer}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};
