import Image from "next/image";
import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <header className="flex items-center justify-center">
      <div className="border relative">
        <div className="relative w-[75vw] h-[38vh] my-4">
          <Image src={banner} alt="banner_image" layout="fill" objectFit="cover"/>
        </div>
        <div className="absolute top-10 left-3 font-bold">
          <h2 className="text-[#DF0302] text-base">HOME OF THE BEST</h2>
          <h2 className=" text-white text-4xl">
            <span className="text-3xl">REVIEWS</span><br /> IN THE MULTIVERSE
          </h2>
        </div>
        <div className="absolute bottom-8 left-3 flex items-center space-x-4">
          <div className="border text-white hover:cursor-pointer">
            <p className="px-2 text-sm">Read Review</p>
          </div>
          <div className="bg-[#FB0200] text-white hover:cursor-pointer">
            <p className="px-2 text-sm">Watch Trailer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
