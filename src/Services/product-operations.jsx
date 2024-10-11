import fetchingdata from "./api-client";
import Product from "../Model/product";

const ProductOperations = {
  async loadproduct() {
    const data = await fetchingdata();
    const products = data["products"];
    const productArray = products.map((prod) => {
      const curr_prod = new Product(prod.id, prod.name, prod.price, prod.image_url, prod.gender);
      return curr_prod;
    });
    return productArray;
  },
};

export default ProductOperations;
