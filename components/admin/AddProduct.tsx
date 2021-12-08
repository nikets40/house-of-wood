import React, { useEffect, useRef, useState } from "react";
import MultiImageUpload from "./MultiImageUpload";
import AutoCompleteField from "../common/AutoCompleteField";
import { useForm } from "react-hook-form";
import { AddNewProduct, UploadFiles } from "../../lib/db-hooks";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const AddProduct = () => {
  console.log("re-rendered");
  const router = useRouter();

  const [isUploading, setIsUploading] = useState(false);

  const [productImages, setProductImages] = useState<File[]>([]);
  const inputFile = useRef(null);
  const brandOptions = [
    "Ikea",
    "Fisher Price",
    "P&G",
    "Pampers",
    "Huggies",
    "Nestle",
    "Meggi",
    "Kelloggs",
  ];
  const categoryOptions = ["Baby", "Food", "Clothes", "Toys"];

  const { register, watch, handleSubmit, setValue, getValues } = useForm();

  const onFormSubmit = async (data: any) => {
    setIsUploading(true);
    console.log("form submmited with data: ", data);
    const result = await AddNewProduct(data);
    setIsUploading(false);
    console.log("result: ", result);
    if (result.success) {
      toast.success(result.message);
      router.push({ query: { tab: "manage-products" } });
    } else {
      toast.error(result.message);
    }
  };

  useEffect(() => {
    var discount = parseInt(getValues()?.discount);
    var price = parseInt(getValues()?.price);
    isNaN(price) ? setValue("price", 0) : setValue("price", price);
    isNaN(discount) ? setValue("discount", 0) : setValue("discount", discount);
    const finalPrice = price - (price * discount) / 100;
    setValue("finalPrice", "$" + finalPrice.toFixed(2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("discount"), watch("price")]);

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
          Product Price ($)
          <input type="number" {...register("price")} />
        </label>

        <label>
          Product Discount (%)
          <input type="number" {...register("discount")} />
        </label>

        <label>
          Final Price ($)
          <input type="text" disabled {...register("finalPrice")} />
        </label>

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
