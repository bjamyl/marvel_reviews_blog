import Image from "next/image";
import banner2 from '../../assets/banner2.jpg'
const Banner = () => {
  return (
    <header className="flex items-center justify-center">
      <div className="relative">
        <div className="relative w-[85vw] h-[25vh] sm:h-[30vh]  md:h-[40vh] lg:h-[50vh] xl:h-[65vh] 2xl:h-[70vh] my-4 ">
          <Image src={banner2} alt="banner_image" layout="fill" objectFit="cover" className="rounded-3xl"/>
        </div>
        <div className="absolute top-8 left-3 lg:left-10 font-bold lg:top-16">
          <h2 className="text-[#DF0302] text-base sm:text-lg lg:text-xl xl:text-2xl">HOME OF THE BEST</h2>
          <h2 className=" text-white text-2xl sm:text-3xl lg:text-4xl xl:text-6xl">
            <span className="text-xl sm:text-2xl lg:text-3xl xl:text-5xl">REVIEWS</span><br /> IN THE MULTIVERSE
          </h2>
        </div>
        <div className="absolute bottom-8 left-3 lg:left-10 flex items-center space-x-4 xl:space-x-8 lg:bottom-14">
            <button className="bg-transparent py-1 lg:hover:scale-110 lg:transform lg:duration-500 text-white border px-2 text-sm sm:text-base lg:text-xl">Read Review</button>
            <button className="text-white py-1 lg:hover:scale-110 lg:transform lg:duration-500 hover:cursor-pointer bg-[#FB0200] px-2 text-sm sm:text-base lg:text-xl">Watch Trailer</button>
        </div>
      </div>
    </header>
  );
};

export default Banner;
