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
    <div className=" gap-4 w-full m-auto flex flex-col items-center justify-center bg-gray-50 py-5 px-4 sm:px-6 lg:px-8 lg:py-5">
      {/* Banner  */}
      <div className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6  lg:px-8">
        <div className="mx-auto max-w-prose text-center">
          <p className="mt-3 text-lg text-gray-500 sm:mt-4 sm:text-xl">
            Make photos clearer and sharper in just a click
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-2xl gap-4 sm:px-6 lg:px-8 lg:py-5 py-5">
        <UploadImage uploadImageHandler={uploadImageHandler} />
        <ImagePreview upload={upload} loading={loading} enhance={enhance} />
      </div>
    </div>
  );
};

export default Home;
