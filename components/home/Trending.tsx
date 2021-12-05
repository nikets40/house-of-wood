import ProductsGrid from "../common/ProductsGrid";

const Trending: React.FC = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h3 className="font-extrabold text-3xl">Trending Items</h3>
        <p className="font-normal text-sm capitalize">
          Sitewide discount and save up to 25% on all trending products.
        </p>
        <div className="mt-10"/>
        <ProductsGrid noOfItems={4} imagePath="/static/images/product-sample2.jpg" />
      </div>
    </div>
  );
};
export default Trending;
