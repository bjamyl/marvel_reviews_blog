import Head from "next/head";
import Image from "next/image";
import Banner from "../components/HomepageComponents/Banner";
import Posts from "../components/HomepageComponents/Posts/Posts";

export default function Home() {
  return (
    <div  className="flex flex-col justify-center items-center">
      <div className="max-w-[1280px] ">
        <Banner />
        <h1 className="flex items-center justify-center mt-8 mb-8 text-3xl lg:text-5xl xl:my-16 text-[#DF0302] font-bold">
          ALL POSTS
        </h1>
        <Posts />
      </div>
    </div>
  );
}
