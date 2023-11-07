import styles from "./Hero.module.css";
import heroBackground from "../../../assets/newPng.png"

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
        <img className={styles.newBack} src={heroBackground} alt="" />
      <div className={styles.heroTitleContainer}>
        <h1>
          Super Flash Sale | <span> 50% off</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
