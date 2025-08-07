import Loading from "./Loading";
import React from "react";

const ImagePreview = ({upload, loading, enhance}) => {
  return (
    <div className=" flex flex-col items-center justify-center gap-4 py-4 w-full max-w-3xl">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8 h-fit w-full max-w-3xl px-5">
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
      <div className="flex justify-center max-w-3xl mt-10">
        {enhance ? (
          <a
            href={enhance}
            download={enhance}
            className="inline-block rounded-3xl border border-red-700 px-20 py-3 text-sm font-bold text-red-700 hover:bg-red-700 hover:text-white focus:ring-3 focus:outline-hidden"
          >
            Download
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default ImagePreview;
