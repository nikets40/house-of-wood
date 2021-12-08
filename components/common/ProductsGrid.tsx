import Image from "next/image";
import { Eye, Star } from "react-feather";
import { StarIcon } from "@heroicons/react/solid";

export const ProductsGrid: React.FC<{ noOfItems: number; imagePath?: string }> = ({
  noOfItems,
  imagePath
}) => {
  const products = [];

  for (let i = 0; i < noOfItems; i++) {
    products.push(<ProductCard key={i} imagePath={imagePath}/>);
  }
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
     {products}
    </div>
  );
};

export default ProductsGrid;

export const ProductCard: React.FC<{imagePath?: string}> = ({imagePath="/static/images/product-sample.jpg"}) => {
  return (
    <div className="group">
      {/* Image */}
      <div className="relative aspect-w-1 aspect-h-1">
        <Image
          src={imagePath}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt="Product"
        />
        <div className="absolute w-14 h-12 left-[80%] top-[80%] flex items-center justify-center bg-white rounded-lg opacity-0 group-hover:opacity-100 transition ease-in-out duration-200 cursor-pointer">
          <Eye className="w-6 h-6" />
        </div>
      </div>
      {/* ratings */}
      <Ratings rating={4} />

      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-xl mt-3">Aqua Globes</p>
          <p className="font-semibold text-lg text-yellow-500 mt-4 text-left">$125.00</p>
        </div>

        <button className="primary-btn h-14 text-white opacity-0 group-hover:opacity-100 transition ease-in-out duration-200">
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
