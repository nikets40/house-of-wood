import { GetServerSideProps, NextPage } from "next";
import React, { useEffect, useState } from "react";
import { jsonToProductData, ProductData } from "../../interfaces/allProducts";
import { GetProductById } from "../../lib/db-hooks";
import ErrorPage from "../404";
import Image from "next/image";
import ProductQuantity from "../../components/common/ProductQuantity";
import { StarIcon } from "@heroicons/react/solid";

const ProductPage: NextPage<{ productResult: any }> = ({ productResult }) => {
  const [product, setProduct] = useState<ProductData>();

  useEffect(() => {
    if (productResult.exists) {
      const productData = jsonToProductData(productResult.data);
      setProduct(productData);
    }
  }, []);
  return (
    <main>
      {productResult?.exists && product ? (
        <div className="mt-10 flex flex-col gap-10 md:flex-row">
          {/* Product Images */}
          <ProductImagesSection
            images={product.images}
            className="md:w-1/2 max-w-2xl"
          />
          {/* Product Details */}
          <ProductDetailsSection product={product} className="md:w-1/2" />
        </div>
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
  const productResult = await GetProductById(productID);
  return {
    props: {
      productResult: JSON.parse(JSON.stringify(productResult)),
    },
  };
};

const ProductImagesSection: React.FC<{ images: string[]; className?: string }> =
  ({ images = [], className = "" }) => {
    const [selectedImage, setSelectedImage] = useState<string>(images[0]);
    return (
      <div className={`${className}`}>
        {images.length > 0 && (
          <div className="flex flex-row-reverse gap-4">
            {/* Selected Image */}
            <div className="relative w-full aspect-w-1 aspect-h-1">
              <Image
                src={selectedImage}
                layout="fill"
                objectFit="contain"
                className="md:bg-gray-100 border-2 border-gray-200"
              />
            </div>
            {/* Other Images */}
            <div className="flex flex-col gap-2 mt-4">
              {/* Images Grid */}
              {images.map((image, index) => (
                <div
                  key={image + index}
                  className="relative h-12 w-12 border rounded cursor-pointer"
                >
                  <Image
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                    alt=""
                    onClick={() => {
                      setSelectedImage(image);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

const ProductDetailsSection: React.FC<{
  product: ProductData;
  className?: string;
}> = ({ product, className = "" }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Ratings rating={3} />
      <h4 className="mt-5 text-xl line-clamp-2 font-bold">{product.name}</h4>
      <p className="mt-4 text-primary text-3xl font-semibold">
        ${product.price.toFixed(2)}
      </p>
      <p className="mt-2 line-clamp-6">{product.description}</p>
      <div className="flex flex-row items-center mt-4 gap-10">
        {/* <ProductQuantity
          productID={product.id}
        /> */}
        <button className="primary-btn text-white">Add To Cart</button>
      </div>
      <div className="flex-grow" />
    </div>
  );
};

const Ratings: React.FC<{ rating: number; noOfReviews?: number }> = ({
  rating,
  noOfReviews = 3,
}) => {
  const ratings = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      ratings.push(<StarIcon className="text-yellow-500 w-8 h-8" />);
    } else ratings.push(<StarIcon className="text-gray-300 w-8 h-8" />);
  }

  return (
    <div className="flex -ml-1 items-center">
      {ratings}
      <span className="text-gray-400 text-base ml-8">{`(${noOfReviews} customer reviews)`}</span>
    </div>
  );
};
