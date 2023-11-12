import styles from "./Hero.module.css";
import heroBackground from "../../../assets/newPng.png"
import { useThemeContext } from "../../../context/ThemeContext";
import "./hero.css"
const Hero = () => {
  const {darkMode, toggleDarkMode} = useThemeContext()
  const className = darkMode ? "dark" : "light"

  return (
    <div className={` theme-${className} ${styles.heroContainer}`}>
        <img className={styles.newBack} src={heroBackground} alt="" />
      <div className={styles.heroTitleContainer}>
        <h1 className={`text-${className}`}>
          Super Flash Sale | <span> 50% off</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
