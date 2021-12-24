import { useEffect, useState } from "react";
import { ProductData } from "../../interfaces/allProducts";
import { GetAllProducts } from "../../lib/db-hooks";
import ProductsGrid from "../common/ProductsGrid";

const Trending: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>();

  const getProducts = async () => {
    GetAllProducts().then((products) => {
      setProducts(products.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="font-extrabold text-3xl">Trending Items</h3>
        <p className="font-normal text-sm capitalize">
          Sitewide discount and save up to 25% on all trending products.
        </p>
        <div className="mt-10" />
        {products && <ProductsGrid products={products.reverse().slice(0, 8)} />}
      </div>
    </div>
  );
};
export default Trending;
