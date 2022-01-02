import Image from "next/image";
import { Eye, Star } from "react-feather";
import { StarIcon } from "@heroicons/react/solid";
import { ProductData } from "../../interfaces/allProducts";
import ProductQuickViewModal from "./ProductQuickViewModal";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface ProductGridProps {
  products?: ProductData[];
}
export const ProductsGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid gap-6 gap-y-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;

export const ProductCard: React.FC<{ productData: ProductData }> = ({
  productData,
}) => {
  const rating = Math.floor(Math.random() * 6) + 1;
  const [selectedProduct, setSelectedProduct] = useState<ProductData>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="group">
      {/* Product Quick View Modal */}
      {isModalOpen &&
        ProductQuickViewModal({
          product: selectedProduct,
          onClose: () => setIsModalOpen(false),
        })}
      {/* Image */}
      <div className="relative aspect-w-1 aspect-h-1 cur">
        <Image
          src={productData.images[0]}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt="Product"
          onClick={() => router.push(`/product/${productData.id}`)}
        />
        {/* //TODO: Implement ProductQuickViewModal component */}
        {/* <div
          onClick={() => {
            setSelectedProduct(productData);
            setIsModalOpen(true);
          }}
          className="absolute w-14 h-12 left-[80%] top-[80%] flex items-center justify-center bg-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 cursor-pointer"
        >
          <Eye className="w-6 h-6" />
        </div> */}
        <div
          className={`${
            productData?.discount > 0 ? "opacity-100" : "opacity-0"
          } absolute top-4 left-4 bg-primary text-white rounded flex items-center justify-center w-14 h-8`}
        >
          Sale
        </div>
      </div>
      {/* ratings */}
      <Ratings rating={rating} />
      <Link href={`/product/${productData.id}`} passHref>
        <a>
          <p className="font-bold text-left text-xl mt-3 line-clamp-2 hover:text-primary cursor-pointer">
            {productData.name}
          </p>
        </a>
      </Link>

      <div className="flex justify-between items-end">
        <p className="font-semibold text-lg text-yellow-500 mt-4 text-left">
          {
            <ProductPrice
              price={productData.price}
              finalPrice={productData.finalPrice}
            />
          }
        </p>

        <button className="primary-btn h-14 whitespace-nowrap text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const Ratings: React.FC<{ rating: number }> = ({ rating }) => {
  const ratingIconsList = [];
  for (let i = 0; i < 5; i++) {
    ratingIconsList.push(
      <StarIcon
        key={i}
        className={`h-6 ${i < rating ? "text-yellow-500" : "text-gray-400"}`}
      />
    );
  }
  return <div className="flex mt-4">{ratingIconsList}</div>;
};

const ProductPrice: React.FC<{ price: number; finalPrice?: number }> = ({
  price,
  finalPrice,
}) => {
  return (
    <>
      {price != finalPrice ? (
        <span>
          <span className="line-through text-black">${price.toFixed(2)}</span>
          {" $"}
          {finalPrice?.toFixed(2)}
        </span>
      ) : (
        <span>${price.toFixed(2)}</span>
      )}
    </>
  );
};
