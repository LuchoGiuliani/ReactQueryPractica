import { useState } from "react";
import { useQuery } from "react-query";
import { Toaster } from "sonner";
import { CardProduct } from "../../components/ui/CardProduct";
import Hero from "../../components/ui/Hero/Hero";
import { getProducts } from "../../service";
import styles from "./Home.module.css";
import { useThemeContext } from "../../context/ThemeContext";
import "./home.css"

export const Home = () => {
  const {darkMode, toggleDarkMode} = useThemeContext()
  const className = darkMode ? "dark" : "light"

  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery(
    ["products", page],
    () => getProducts(page),
    { keepPreviousData: true }
  );

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <div className={`theme-${className} ${styles.container}`}>
        {data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={`theme-${className} ${styles.paginationContainer}`}>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previus page
        </button>
        <div>
          <span>{page}</span>
        </div>
        <button
          className={styles.paginationButton}
          onClick={() => setPage(page + 1)}
        >
          Next page
        </button>
      </div>
    </>
  );
};
