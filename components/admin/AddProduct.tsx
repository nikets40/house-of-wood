import React, { useEffect, useRef, useState } from "react";
import MultiImageUpload from "./MultiImageUpload";
import AutoCompleteField from "../common/AutoCompleteField";
import { useForm, useWatch } from "react-hook-form";
import { AddNewProduct, UploadFiles } from "../../lib/db-hooks";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const AddProduct = () => {
  console.log("re-rendered");
  const router = useRouter();

  const [isUploading, setIsUploading] = useState(false);

  const [productImages, setProductImages] = useState<File[]>([]);
  const inputFile = useRef(null);
  const brandOptions = [];
  const categoryOptions = [];

  const { register, watch, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    const finalPrice = getDiscountedPrice(
      getValues().price,
      getValues().discount
    );
    setValue("finalPrice", finalPrice);
  }, [watch("price"), watch("discount")]);

  const onFormSubmit = async (data: any) => {
    console.log("form submmited with data: ", data);

    setIsUploading(true);
    const result = await AddNewProduct(data);
    setIsUploading(false);
    console.log("result: ", result);
    if (result.success) {
      toast.success(result.message, { position: "bottom-center" });
      setTimeout(() => {
        router.reload();
      }, 1000);
    } else {
      toast.error(result.message, { position: "bottom-center" });
    }
  };

  const getDiscountedPrice = (price: number, discount: number) => {
    return price - (price * discount) / 100;
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        onKeyDown={(e) => {
          e.code === "Enter" && e.preventDefault();
        }}
        className="add-product-form"
      >
        <h3 className="text-2xl font-semibold">Add Product</h3>
        <label>
          Product Name
          <input
            type="text"
            {...register("name")}
            placeholder="Enter product Name"
          />
        </label>

        <AutoCompleteField
          label="Product Brand"
          placeholder="Enter Brand"
          suggestions={brandOptions}
          onValueChange={(value) => setValue("brand", value)}
        />

        <AutoCompleteField
          label="Product Category"
          placeholder="Enter product Category"
          suggestions={categoryOptions}
          onValueChange={(value) => setValue("category", value)}
        />

        <label>
          Product Description
          <textarea
            placeholder="Enter product description"
            {...register("description")}
            rows={5}
          />
        </label>
        <label
          onClick={(e) => {
            e.preventDefault();
            // e.stopPropagation();
          }}
        >
          Images
          <input
            type="file"
            className="hidden"
            accept="image/*"
            ref={inputFile}
            multiple
            onClick={(e) => {
              e.stopPropagation();
            }}
            onChange={(e) => {
              const newImages = Array.from(e.target.files).concat(
                Array.from(productImages)
              );
              setProductImages(newImages);
              setValue("images", newImages);
              e.target.value = "";
            }}
          />
          <MultiImageUpload
            onRemove={(index: number) => {
              const images = productImages.filter((_, i) => i !== index);
              setProductImages(images);
              setValue("images", images);
            }}
            inputFile={inputFile}
            productImages={productImages}
          />
        </label>

        <label>
          Product Quantity
          <input
            type="number"
            placeholder="Enter the number of products in stock"
            {...register("quantity")}
          />
        </label>

        <label>
          Product Price ($)
          <input
            type="number"
            placeholder="Enter the price of Product in $"
            {...register("price")}
          />
        </label>

        <label>
          Product Discount (%) (optional)
          <input
            type="number"
            placeholder="Enter the discount on product in %"
            {...register("discount")}
          />
        </label>

        {watch("discount") && watch("price") && (
          <label>
            Final Price ($)
            <input type="number" {...register("finalPrice")} disabled />
          </label>
        )}

        <label className="flex flex-row items-center cursor-pointer">
          <input
            type="checkbox"
            className="hidden"
            {...register("published")}
          />
          <div
            className={`w-5 h-5 mr-2 border rounded ${
              watch("published") && "bg-primary border-0"
            }`}
          />
          <p> Publish Item</p>
        </label>

        <button
          type="submit"
          onClick={() => handleSubmit(onFormSubmit)}
          className="primary-btn text-white"
          disabled={isUploading}
        >
          {!isUploading ? "Add Product" : "Adding product..."}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
