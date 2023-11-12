import Logo from "../../../assets/logo.svg";
import Cart from "../../../assets/cart.svg";
import sun from "../../../assets/sun.png";
import moon from "../../../assets/moon.png";
import styles from "./Navbar.module.css";
import { useState } from "react";
import { CartModal } from "../CartModal/CartModal";
import useCartContext from "../../../hooks/useCartContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeContext } from "../../../context/ThemeContext";
import "./navbar.css"

export const Navbar = () => {

  const { darkMode, toggleDarkMode } = useThemeContext() as { darkMode: unknown, toggleDarkMode: () => void };
  const className = darkMode ? "dark" : "light"

  console.log(darkMode);
  

  const [showCartModal, setShowCartModal] = useState(false);

  const {
    state: { cartItems },
  } = useCartContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleShowCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleNavigateToHome = () => {
    navigate("/");
  };

  return (
    <div className={`theme-${className} ${styles.navbarContainer}`}>
      <div className={styles.navbarDetail} onClick={handleNavigateToHome}>
        <img src={Logo} width={50} height={50} alt="Logo del ecommerce" />
        <div>
          <span className={`text-${className}`}>DH Ecommerce</span>
        </div>
      </div>

      {location.pathname !== "/checkout" && (
        <>
          <div className={styles.container}>
            <button onClick={toggleDarkMode}  value={darkMode} className={styles.dark}> <img src={darkMode ? moon: sun} alt="" /></button>
            <div className={styles.navbarCartContainer}>
              <p className={styles.navbarTextAmount}>{cartItems.length}</p>
              <img src={Cart} alt="Cart" onClick={handleShowCartModal} />
            </div>
            </div>
          {showCartModal && (
            <CartModal handleShowCartModal={handleShowCartModal} />
            )}
        </>
      )}
    </div>
  );
};
