import { useEffect, useState } from "react";
import { GetAllProducts, RemoveProduct } from "../../../lib/db-hooks";
import { ProductData } from "../../../interfaces/allProducts";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import ControlPanel from "./ControlPanel";

const ManageProducts: React.FC = () => {
  const [products, setProducts] = useState<ProductData[]>();
  const [selectedProducts, setSelectedProducts] = useState<ProductData[]>();
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleSelect = (selectedProduct: ProductData) => {
    const product = selectedProducts?.find(
      (product) => product.id === selectedProduct.id
    );
    if (product) {
      console.log("Product exists ");
      const newSelectedProducts = selectedProducts.filter(
        (product) => product.id !== selectedProduct.id
      );
      setSelectedProducts(newSelectedProducts);
    } else {
      console.log("Product does not exists ");
      const newSelectedProducts = (selectedProducts?.concat(selectedProduct))?? [selectedProduct];
      console.log(newSelectedProducts);
      setSelectedProducts(newSelectedProducts);
    }
  };

  const isProductSelected = (id: string) => {
    const product = selectedProducts?.find((product) => product.id === id);
    return product ? true : false;
  };

  const selectAllProducts = () => {
    console.log("Select all products clicked");

    if (!isAllSelected) {
      setSelectedProducts(products);
      setIsAllSelected(true);
    } else {
      setSelectedProducts([]);
      setIsAllSelected(false);
    }
  };

  const getProducts = async () => {
    GetAllProducts().then((products) => {
      setProducts(products.data);
    });
  };

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  }, []);

  const filterOutKeys = ["id", "description", "rating", "date"];

  const getHeaderFieldNames = () => {
    const keys = Object.keys(products[0]);
    return keys.filter((key) => !filterOutKeys.includes(key));
  };

  const handeldleDelete = () => {
    console.log("Delete button clicked");
    if(selectedProducts.length > 0){
      const newProducts = products.filter((product) => !isProductSelected(product.id));
      setProducts(newProducts);
      for(let i = 0; i < selectedProducts.length; i++){
        RemoveProduct(selectedProducts[i].id);
      }
      setSelectedProducts([]);
    }
  }

  return (
    <div className="mx-8 mt-5">
      <div>
        <h3 className="text-3xl font-bold">Manage Products</h3>
        <div>
          {products?.length > 0 && (
            <div>
              <ControlPanel onDelete={handeldleDelete} />
              <table className="manage-products-table">
                <TableHead
                  headers={getHeaderFieldNames()}
                  isAllSelected={selectedProducts?.length == products?.length}
                  onSelectAll={() => selectAllProducts()}
                />

                <TableBody
                  products={products}
                  filterKeys={filterOutKeys}
                  isProductSelected={isProductSelected}
                  onProductSelect={handleSelect}
                />

                <tbody></tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
