import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageBanner from "../components/common/PageBanner";
import ProductsGrid from "../components/common/ProductsGrid";
import { ProductData } from "../interfaces/allProducts";
import { GetAllProducts } from "../lib/db-hooks";

const Search: NextPage = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const router = useRouter();

  const fetchProducts = async () => {
    const productsResult = await GetAllProducts();
    setProducts(productsResult.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <p className="text-2xl pt-10 pb-4">
        Showing search results for: <strong>{router.query.q ?? ""}</strong>
      </p>

      <ProductsGrid products={products} />
    </div>
  );
};

export default Search;
