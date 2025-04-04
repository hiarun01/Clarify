import React from "react";
import Loading from "./Loading";

const ImagePreview = ({upload, loading, enhance}) => {
  return (
    <div className="flex flex-col items-center justify-center h-fit gap-4 py-4 w-full max-w-3xl">
      <div className="grid grid-cols-2 lg:grid-cols-2  gap-5 w-full h-fit max-w-3xl">
        {/* Original Image  */}
        <div className=" w-full shadow-sm  text-center h-80 rounded-2xl overflow-hidden relative">
          <p className="bg-red-600 text-white">Original Image</p>
          {upload ? (
            <img src={upload} className="w-full h-full object-cover" />
          ) : (
            <div className="bg-gray-200 opacity-50 flex justify-center items-center h-full w-full">
              No Image Selected
            </div>
          )}
        </div>
        {/* Enhance Image */}
        <div className=" w-full shadow-sm text-center h-80 rounded-2xl overflow-hidden">
          <p className="bg-red-600 text-white">Enhance Image</p>
          {enhance && !loading && (
            <img src={enhance} className="w-full h-full object-cover" />
          )}

          {loading ? (
            <Loading />
          ) : (
            <div className="bg-gray-200 opacity-50 flex justify-center items-center h-full w-full">
              Enhance Image Not Available..
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreview;
