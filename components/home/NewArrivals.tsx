import ProductsGrid from "../common/ProductsGrid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { GetAllProducts } from "../../lib/db-hooks";
import { ProductData } from "../../interfaces/allProducts";
import Link from "next/link";

const NewArrivals: React.FC = () => {
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
        <h3 className="font-extrabold text-3xl">New Arrivals</h3>
        <p className="font-normal text-sm">
          Sitewide discount and save up to 25% on all new arrivals.
        </p>
      </div>

      <div className="mt-10" />

      {products && <ProductsGrid products={products.slice(0,8)} />}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
        <NewArrivalsBanner
          imagePath="/static/images/bedroom.jpg"
          title="Bed Room"
        />
        <NewArrivalsBanner
          imagePath="/static/images/dining.jpg"
          title="Dining Deals"
        />
      </div>
    </div>
  );
};

export default NewArrivals;

const NewArrivalsBanner: React.FC<{ imagePath: string; title: string }> = ({
  imagePath,
  title,
}) => {
  return (
    <div className="relative h-[25vh] md:h-[30vh] lg:h-[32vh]">
      <Image
        src={imagePath}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-2xl "
        alt={title}
      />

      <div className="absolute bg-black opacity-20 rounded-2xl top-0 bottom-0 left-0 right-0" />

      <div className="absolute left-0 right-0 top-[50%] translate-y-[-50%] text-center">
        <h4 className="text-4xl font-bold uppercase text-white">{title}</h4>
        <p className="capitalize text-white font-light mt-2.5 mb-5">
          Upto 20% off on all furniture
        </p>
        <Link href={"/shop"} passHref>
        <button className="primary-btn text-white">Shop Now</button>
        </Link>
      </div>
    </div>
  );
};
