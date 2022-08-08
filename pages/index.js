import Head from "next/head";
import Image from "next/image";
import Banner from "../components/HomepageComponents/Banner";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <h1>this is the homepage</h1>
    </div>
  );
}
