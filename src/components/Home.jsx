import React from "react";
import UploadImage from "./UploadImage";
import ImagePreview from "./ImagePreview";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit gap-4 py-4 w-full">
      <UploadImage />
      <ImagePreview />
    </div>
  );
};

export default Home;
