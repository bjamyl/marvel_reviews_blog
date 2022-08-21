import Post from "./Post";
import spiderman from "../../../assets/spiderman.jpg";
import blackwidow from "../../../assets/blackwidow.jpg";
import morbius from "../../../assets/morbius.jpg";
import eternals from "../../../assets/eternals.png";

const Posts = () => {
  return (
    <section className="">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 md:gap-8 xl:gap-10 mx-10 xl:mx-0 space-y-10 sm:space-y-0">
        <Post
          image={spiderman}
          title={"Christmans Came Early: An Epic Blockbuster"}
          date={"March 2, 2021"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat vulputate pulvinar suspendisse pellentesque. Velit sed lorem viverra cras semper aliquam. Sem montes, volutpat, sagittis, suspendisse. Eu nec."
          }
        />
        <Post
          image={blackwidow}
          title={"Christmans Came Early: An Epic Blockbuster"}
          date={"March 2, 2021"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat vulputate pulvinar suspendisse pellentesque. Velit sed lorem viverra cras semper aliquam. Sem montes, volutpat, sagittis, suspendisse. Eu nec."
          }
        />
        <Post
          image={morbius}
          title={"You have to watch this one yourself and then decide"}
          date={"March 2, 2021"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat vulputate pulvinar suspendisse pellentesque. Velit sed lorem viverra cras semper aliquam. Sem montes, volutpat, sagittis, suspendisse. Eu nec."
          }
        />
        <Post
          image={eternals}
          title={"Christmans Came Early: An Epic Blockbuster"}
          date={"March 2, 2021"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat vulputate pulvinar suspendisse pellentesque. Velit sed lorem viverra cras semper aliquam. Sem montes, volutpat, sagittis, suspendisse. Eu nec."
          }
        />
      </div>
    </section>
  );
};

export default Posts;
