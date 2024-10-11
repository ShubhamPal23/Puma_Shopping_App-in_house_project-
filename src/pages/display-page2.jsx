import { useState, useEffect } from "react";
import Card1 from "../Components/card1";
import ProductOperations from "../Services/product-operations";

const Comp1 = ({ gender, fn }) => {
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await ProductOperations.loadproduct();
      setProducts(productsData);
    };
    loadProducts();
  }, []);

  const filteredProducts = Products.filter(
    (prod) => gender === "Any" || gender === prod.gender
  );

  return (
    <div style={{ display: "flex", flexWrap: "wrap", backgroundColor: "orange", padding: "16px", gap: "16px" }}>
      {filteredProducts.map((prod) => (
        <div key={prod.id} style={{flex: "1 1 30px", maxWidth: "300px", boxSizing: "border-box"}}>
          <Card1
            val="+"
            id={prod.id}
            name={prod.name}
            price={prod.price}
            url={prod.url}
            fn={fn}
          />
        </div>
      ))}
    </div>
  );
};

export default Comp1;
