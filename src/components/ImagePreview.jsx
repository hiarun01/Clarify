import React from "react";

const ImagePreview = ({upload, loading, enhance}) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit gap-4 py-4 w-full max-w-3xl">
      <div className="grid grid-cols-2 lg:grid-cols-2  gap-5 w-full h-fit max-w-3xl">
        {/* Original Image  */}
        <div className=" w-full shadow-sm  border-red-700 text-center h-80 rounded-2xl overflow-hidden relative">
          <p className="bg-red-600 text-white">Original Image</p>
          {upload ? (
            <img
              src={upload}
              alt="Original"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-50">
              No Image Selected
            </div>
          )}
        </div>
        {/* Enhance Image */}
        <div className=" w-full shadow-sm text-center h-80 rounded-2xl overflow-hidden">
          <p className="bg-red-600 text-white">Enhance Image</p>
          <img src="" alt="Original" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
