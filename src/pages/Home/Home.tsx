import { useState } from "react";
import { useQuery } from "react-query";
import { Toaster } from "sonner";
import { CardProduct } from "../../components/ui/CardProduct";
import Hero from "../../components/ui/Hero/Hero";
import { getProducts } from "../../service";
import styles from "./Home.module.css";

export const Home = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery(
    ["products", page],
    () => getProducts(page),
    { keepPreviousData: true }
  );

  // const [products, setProducts] = useState<Product[]>([]);
  // const [error, setError] = useState(false)
  // const [isLoading,setIsLoading] = useState(true)

  // useEffect(() => {
  //   getProducts().then((data)=> {
  //     setProducts(data)
  //   }).catch(()=> {
  //     setError(true)
  //   }).finally(() => {
  //     setIsLoading(false)
  //   })
  // }, []);

  return (
    <>
      <Hero />
      <Toaster richColors />
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      <div className={styles.container}>
        {data?.map((product) => (
          <CardProduct key={product.tail} product={product} />
        ))}
      </div>
      <div className={styles.paginationContainer}>
        <button className={styles.paginationButton} onClick={()=> setPage(page - 1)}  disabled= {page === 1}>Previus page</button>
        <div>
          <span>{page}</span>
        </div>
        <button className={styles.paginationButton} onClick={()=> setPage(page + 1)}>Next page</button>
      </div>
    </>
  );
};
