import {NavLink} from "react-router-dom";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 text-center ">
      <div className="flex justify-center mb-12">
        <div className="inline-flex  gap-3 items-center rounded-full  text-red-700 border border-gray-200 px-3 py-1">
          <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-sm whitespace-nowrap text-purple-700">
            Live
          </span>
          <span className="text-sm font-medium">AI Image Enhancer</span>
        </div>
      </div>
      {/* Main heading */}
      <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-12 max-w-4xl mx-auto">
        AI Image Enhancer, upscales your images one click
      </h1>
      {/* Subtext */}
      <div className="max-w-3xl mx-auto mb-12 text-lg text-gray-600">
        <p className="flex flex-wrap justify-center items-center gap-2">
          Enhances and upscales your images with just one click.
        </p>
      </div>
      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <NavLink to="/dashboard">
          <button className="inline-flex text-lg items-center gap-2 rounded-sm border border-red-700 bg-red-600 px-8 py-2 text-white hover:bg-transparent hover:text-red-700">
            Start Free
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
