import Message from "../Components/message";
import Card2 from "../Components/card2";
import ProductOperations from "../Services/product-operations";
import { useState, useEffect } from "react";
import { Left } from "../Components/header";
import Head from "../Components/head";
import GooglePayButton from "@google-pay/button-react";

function DisplayFunction() {
  const [Products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await ProductOperations.loadproduct();
      setProducts(productsData);
    };
    loadProducts();
  }, []);

  const Update = (val, prod_id) => {
    const updatedProducts = Products.map((prod) => {
      if (prod.id === prod_id) {
        const updatedProd = { ...prod };
        if (val === "+") updatedProd.quantity++;
        else if (updatedProd.quantity > 0) updatedProd.quantity--;
        return updatedProd;
      }
      return prod;
    });
    setProducts(updatedProducts);
    setCount(count + 1);
  };

  useEffect(() => {
    let newTotal = 0.0;
    Products.forEach((prod) => {
      newTotal += parseFloat(prod.price) * prod.quantity;
    });
    setTotal(parseFloat(newTotal.toFixed(2)));
  }, [count, Products]);

  return (
    <div style={{ margin: "16px" }}>
      <div style={{ display: "flex", marginBottom: "16px" }}>
        <div style={{ flex: "0 0 75%", marginRight: "16px" }}>
          <Head classname="Products" /> 
          <Left fn={Update} Products={Products} />
        </div>
        <div style={{ flex: "0 0 25%", background: "aliceblue", padding: "16px" }}>
          <Head classname="Basket"/>
          <div style={{marginLeft:"50px"}}>
            {Products.map((prod) => {
              if (prod.quantity > 0) {
                return (
                  <Card2
                    key={prod.id}
                    id={prod.id}
                    name={prod.name}
                    quantity={prod.quantity}
                    price={prod.price}
                    url={prod.url}
                    fn={Update}
                  />
                );
              }
              return null;
            })}
          </div>
          <div style={{marginTop:"10px"}}>
          <Message classname="Total: Rs." val={total} heading={5} />
          <Message classname="Payable Amount: Rs." val={(total * 1.18).toFixed(2)} heading={5} />
          </div>
          <GooglePayButton
          style={{marginLeft:"50px", marginTop:"10px"}}
            environment="TEST"
            buttonSizeMode="fill"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: total.toFixed(2).toString(),
                currencyCode: "USD",
                countryCode: "US",
              },
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("load payment data", paymentRequest);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DisplayFunction;
