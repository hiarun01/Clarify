import React from "react";

const ImagePreview = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit gap-4 py-4 w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-5 w-full h-fit max-w-3xl">
        {/* Original Image  */}
        <div className="border-1 w-full shadow-md flex flex-col items-center justify-center h-84 bg-gray-100 rounded-2xl overflow-hidden">
          <span>no image</span>
        </div>
        {/* Enhance Image */}
        <div className="border-1 w-full shadow-md flex flex-col items-center justify-center h-84 bg-gray-100 rounded-2xl overflow-hidden">
          Enhance Image
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
