import { ProductData } from "../../interfaces/allProducts";
import ProductCard from "./ProductCard";

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



