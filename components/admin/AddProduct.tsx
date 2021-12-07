import React, { MouseEventHandler, useRef, useState } from "react";
import { Upload, Trash, Trash2 } from "react-feather";
import Image from "next/dist/client/image";
import MultiImageUpload from "./MultiImageUpload";
import AutoCompleteField from "../common/AutoCompleteField";
import { FieldValues, useForm } from "react-hook-form";

const AddProduct = () => {
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
  const [brand, setBrand] = useState("");

  const { register, watch, handleSubmit } = useForm();

  const onFormSubmit = (data: any) => {};

  // TODO: add form hook
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onFormSubmit);
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
          placeholder="Select Brand"
          options={brandOptions}
          value={brand}
          onChange={(value) => {
            setBrand(value);
          }}
        />

      

        <label>
          Product Category
          <select>
            <option>Select a brand</option>
            <option>Category 1</option>
            <option>Category 2</option>
            <option>Category 3</option>
            <option>Category 4</option>
          </select>
        </label>

        <label>
          Product Description
          <textarea placeholder="Enter product description" rows={5} />
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
              e.target.value = "";
            }}
          />
          <MultiImageUpload
            onRemove={(index: number) => {
              const images = productImages.filter((_, i) => i !== index);
              setProductImages(images);
            }}
            inputFile={inputFile}
            productImages={productImages}
          />
        </label>

        <label>
          Product Price ($)
          <input type="number" />
        </label>

        <label>
          Product Discount (%)
          <input type="number" />
        </label>

        <button className="primary-btn text-white">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
