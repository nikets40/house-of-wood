import Image from "next/image";
import {
  HeartIcon as HeartIconFilled,
  XIcon,
  StarIcon,
} from "@heroicons/react/solid";
import {
  HeartIcon as HeartIconOutlined,
  ShareIcon,
} from "@heroicons/react/outline";
import { ProductData } from "../../interfaces/allProducts";
import ProductQuantity from "./ProductQuantity";
import ModalView from "../common/ModalView";

//TODO: Implement ProductQuickViewModal component

interface ProductQuickViewProps {
  product: ProductData;
  onClose: () => void;
}
const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
}) => {
  return (
    <div>
      {/* overlay Effect */}
      <ModalView>
        {/* Content Box */}
        <div className="relative bg-white rounded w-[60vw] h-[50vh] mx-auto mt-[50vh] translate-y-[-50%] flex flex-row p-8 gap-8">
          <XIcon
            onClick={onClose}
            className="absolute right-4 top-4 cursor-pointer text-gray-700 w-6 h-6"
          />

          {/* Product Images */}

          <div>
            {/* Selected Image */}
            <div></div>
            {/* Other Images */}
            <div></div>
          </div>

          <div className="relative w-1/2 h-full">
            <Image
              src={product.images[0]}
              layout="fill"
              objectFit="cover"
              className="rounded-sm"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col">
            <Ratings rating={3} />
            <h4 className="mt-5 text-xl line-clamp-2 font-bold">
              {product.name}
            </h4>
            <p className="mt-4 text-primary text-3xl font-semibold">
              ${product.price.toFixed(2)}
            </p>
            <p className="mt-2 line-clamp-6">{product.description}</p>
            <div className="flex flex-row items-center mt-4 gap-10">
              <ProductQuantity quantity={1} productID={product.id} />
              <button className="primary-btn text-white">Add To Cart</button>
            </div>
            <div className="flex-grow" />
            <div className="flex items-center justify-between">
              <p className="cursor-pointer">More Information</p>
              <div className="flex items-center gap-4">
                <ShareIcon className="w-6 h-6 text-gray-500 cursor-pointer" />
                <HeartIconOutlined className="w-6 h-6 text-gray-500 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </ModalView>
    </div>
  );
};

export default ProductQuickView;

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
