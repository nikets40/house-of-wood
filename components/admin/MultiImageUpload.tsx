import React from "react";
import { MouseEventHandler } from "react";
import { Trash2, Upload } from "react-feather";
import Image from "next/dist/client/image";

interface MultiImageUploaderProps {
  onRemove: Function;
  productImages: File[];
  inputFile: React.RefObject<HTMLInputElement>;
}

const MultiImageUpload: React.FC<MultiImageUploaderProps> = ({
  onRemove,
  productImages,
  inputFile,
}) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      <ImageList onRemove={onRemove} images={productImages} />
      <UploadImageButton
        onClick={() => {
          inputFile.current.click();
        }}
      />
    </div>
  );
};

export default MultiImageUpload;

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
        <div key={image.name+index}  className="relative add-img-box">
          <Image
            src={URL.createObjectURL(image)}
            layout="fill"
            objectFit="cover"
            className="rounded"
            alt=""
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
