import Image from "next/image";

const Post = ({ title, date, image, text }) => {
  return (
    <div className="xl:hover:scale-95 xl:transition xl:duration-700">
      <div className="mb-4">
        <Image
          src={image}
          height={1080}
          width={1920}
          layout="responsive"
          className="xl:hover:scale-110 xl:transition xl:duration-1000"
          alt=""
        />
      </div>
      <div className="">
        <h2 className="font-bold text-2xl xl:text-3xl">{title}</h2>
        <p className="font-light text-xl">{date}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Post;
