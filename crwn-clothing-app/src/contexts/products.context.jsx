import { createContext, useState } from "react";
import Products from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(Products);
  const value = { products };

  return (
    <ProductsProvider.Provider value={value}>
      {children}
    </ProductsProvider.Provider>
  );
};
