import React, {useState} from "react";
import UploadImage from "./UploadImage";
import ImagePreview from "./ImagePreview";
import {getEnhanceImage} from "../utils/Api";

const Home = () => {
  const [upload, setUpload] = useState(null);
  const [enhance, setEnhance] = useState(null);
  const [loading, setLoading] = useState(false);

  const uploadImageHandler = async (file) => {
    setUpload(URL.createObjectURL(file));
    setLoading(true);
    // Api
    try {
      const enhanceImageUrl = await getEnhanceImage(file);

      setEnhance(enhanceImageUrl.image);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white lg:grid lg:h-screen lg:place-content-center">
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-5 sm:px-6 sm:py-5 lg:px-5 lg:py-5">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="mt-10 text-lg font-bold text-pretty text-gray-700 sm:text-lg/relaxed px">
            Enhances and upscales your images with just{" "}
            <span className="font-extrabold text-red-700">one click.</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto justify-center w-full max-w-2xl gap-4 sm:px-6 lg:px-8 lg:py-5 py-5">
        <UploadImage uploadImageHandler={uploadImageHandler} />
        <ImagePreview upload={upload} loading={loading} enhance={enhance} />
      </div>
    </div>
  );
};

export default Home;
