import React from "react";

const UploadImage = ({uploadImageHandler}) => {
  const uploadImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImageHandler(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-fit gap-4 py-4 w-full max-w-3xl px-5">
      <label
        htmlFor="file"
        className="flex flex-col items-center justify-center w-full  border-red-700 h-16 border-2 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-200"
      >
        <span className="text-gray-500 font-bold">Upload an image</span>
        <input
          onChange={uploadImage}
          name="file"
          type="file"
          id="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
};

export default UploadImage;
