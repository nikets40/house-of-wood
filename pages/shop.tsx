import { NextPage } from "next";
import { useEffect, useState } from "react";
import DropdownButton from "../components/common/DropdownButton";
import PageBanner from "../components/common/PageBanner";
import ProductsGrid from "../components/common/ProductsGrid";
import PriceRangeSlider from "../components/common/PriceRangeSlider";
import { ProductData } from "../interfaces/allProducts";
import { GetAllProducts } from "../lib/db-hooks";

const Shop: NextPage = () => {
  const categories: FilterItemProps[] = [
    { name: "All Category", noOfitems: 41 },
    { name: "Bathroom", noOfitems: 5 },
    { name: "Bedroom", noOfitems: 4 },
    { name: "Decor", noOfitems: 7 },
    { name: "Dining Chair", noOfitems: 9 },
    { name: "Dining room", noOfitems: 3 },
    { name: "Sofa", noOfitems: 6 },
    { name: "Table", noOfitems: 7 },
  ];

  const brands: FilterItemProps[] = [
    { name: "All Brands", noOfitems: 41 },
    { name: "Ikea", noOfitems: 12 },
    { name: "Ashley", noOfitems: 8 },
    { name: "Kartell", noOfitems: 13 },
    { name: "American Signature", noOfitems: 7 },
  ];

  const [products, setProducts] = useState<ProductData[]>([]);

  const fetchProducts = async () => {
    const productsResult = await GetAllProducts();
    setProducts(productsResult.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const divider = <div className="w-full h-[1px] bg-gray-200 my-10" />;
  return (
    <div>
      <PageBanner page="shop" />

      <div className="flex flex-col-reverse lg:flex-row justify-between gap-20 mt-8">
        {/* left side */}
        <div className="min-w-[300px] ">
          <FilterList items={categories} title="Category" />
          {divider}
          <FilterList items={brands} title="brands" />
          {divider}

          <PriceRangeSlider min={100} max={1000} />

          <button className="primary-btn text-white w-full rounded-full mt-10">
            Filter
          </button>
        </div>

        {/* right side */}
        <div className="flex-grow">
          <div className="flex gap-8 justify-between flex-col md:flex-row">
            <h3 className="text-3xl font-bold">Featured Products</h3>
            <DropdownButton title="Dropdown Button" />
          </div>
          <div className="mt-8" />
          <ProductsGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default Shop;

interface FilterItemProps {
  name: string;
  noOfitems: number;
}
const FilterList: React.FC<{ title: string; items: FilterItemProps[] }> = ({
  title,
  items,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(items[0].name);
  return (
    <div>
      <h5 className="font-bold text-lg capitalize">{title}</h5>
      <div className="ml-6 mt-6">
        {items.map((category) => (
          <div
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className="flex my-3 cursor-pointer group"
          >
            <div
              className={`w-5 h-5 border border-gray-400 rounded ${
                selectedCategory == category.name && "bg-primary border-0"
              }`}
            />
            <p
              className={`${
                selectedCategory == category.name && "font-bold"
              } flex-grow ml-5 group-hover:text-primary`}
            >
              {category.name}
            </p>
            <p
              className={`${selectedCategory == category.name && "font-bold"}`}
            >{`(${category.noOfitems})`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
