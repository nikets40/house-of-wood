import React, { MouseEventHandler, useRef, useState } from "react";
import { Upload, Trash, Trash2 } from "react-feather";
import Image from "next/dist/client/image";

const AddProduct = () => {
  const [productImages, setProductImages] = useState<File[]>([]);
  const inputFile = useRef(null);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="add-product-form"
      >
        <h3 className="text-2xl font-semibold">Add Product</h3>
        <label>
          Product Name
          <input type="text" />
        </label>

        <label>
          Product Brand
          <select>
            <option>Select a brand</option>
            <option>Brand 1</option>
            <option>Brand 2</option>
            <option>Brand 3</option>
            <option>Brand 4</option>
          </select>
        </label>

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
          <div className="mt-2 flex flex-wrap gap-2">
            <ImageList
              onRemove={(index: number) => {
                const images = productImages.filter((_, i) => i !== index);
                setProductImages(images);
              }}
              images={productImages}
            />
            <UploadImageButton
              onClick={() => {
                inputFile.current.click();
              }}
            />
          </div>
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

const UploadImageButton: React.FC<{ onClick: MouseEventHandler }> = ({
  onClick,
}) => {
  return (
    <div onClick={onClick} className="add-img-box">
      <Upload />
      Upload
    </div>
  );
};

const ImageList: React.FC<{ images: File[]; onRemove: Function }> = ({
  images,
  onRemove,
}) => {
  return (
    <React.Fragment>
      {images.map((image, index) => (
        <div className="relative add-img-box">
          <Image
            src={URL.createObjectURL(image)}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
          <div
            onClick={() => {
              onRemove(index);
            }}
            className="absolute right-1 top-1 bg-white rounded-full p-1.5 text-red-500 shadow-lg cursor-pointer "
          >
            <Trash2 className="w-5 h-5" />
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};
