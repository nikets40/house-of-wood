import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { jsonToProductData, ProductData } from "../../interfaces/allProducts";
import { GetProductById } from "../../lib/db-hooks";
import ErrorPage from "../404";

const ProductPage: NextPage<{ productResult: any }> = ({ productResult }) => {
  const [product, setProduct] = useState<ProductData>();

  useEffect(() => {
    if (productResult.exists) {
      const productData = jsonToProductData(productResult.data);
      setProduct(productData);
    }
  },[]);
  return (
    <main>
      {productResult?.exists ? (
        <div>Product Found{product.name}</div>
      ) : (
        <div>
          <ErrorPage />
        </div>
      )}
    </main>
  );
};

export default ProductPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const productID = query.id as string;
  console.log("productID", productID);

  const productResult = await GetProductById(productID);
  return {
    props: {
      productResult: JSON.parse(JSON.stringify(productResult)),
    },
  };
};
