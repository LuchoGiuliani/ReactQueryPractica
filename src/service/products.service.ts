import {Product} from "../interface"

export const getProducts = async (page = 0):Promise<Product[]> => {

    try {
      const response = await fetch(`https://my-json-server.typicode.com/LuchoGiuliani/DataBaseDH/products?_page=${page}&_limit=24`);
     
      if(response.ok) {
        const data = await response.json();
        return data
      }else {
        throw new Error("failed to fetch products")
      }
    } catch (error) {
     throw new Error("failed network error")
    }
  }; 

  export const createProduct = async(product: Product):Promise<Product> => {

    try {
      const response = await fetch(`https://my-json-server.typicode.com/LuchoGiuliani/DataBaseDH/products`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(product)

      })

      if(response.ok) {
        const data = await response.json();
        return data
      }else {
        throw new Error("fail to create product")
        
      }
    } catch (error) {
      throw new Error("network error")

      
    }

  }