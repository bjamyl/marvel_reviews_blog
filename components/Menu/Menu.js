import React, { useRef, useEffect } from "react";
import { GrClose } from "react-icons/gr";

const Menu = ({}) => {
    
  return (
    <section className="fixed z-10 md:hidden ">
      <div className="relative ">
        {/* Left */}
        <div className="h-2/4 w-screen bg-[#E81127] fixed flex-1 "></div>
        {/* Right */}
        <div className="h-2/4 w-screen bg-[#E81127] fixed bottom-0"></div>
        <div className="absolute text-white top-20 left-5 ">
        <GrClose color="" size={30} />
          <h2 className="text-3xl">Menu</h2>
          <div className="text-7xl space-y-4">
            <h3>Home</h3>
            <h3>Posts</h3>
            <h3>About</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
