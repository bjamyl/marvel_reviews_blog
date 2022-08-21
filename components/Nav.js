import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
import Menu from "./Menu/Menu";
const Nav = () => {




  return (
    <>
      <Menu/>
      <nav className="bg-[#E81127] text-white flex justify-between py-2 px-20">
        <div>
          <h1 className="text-3xl">Logo</h1>
        </div>
        <div>
          <div className="md:hidden">
            <HiMenuAlt3  size={36} />
          </div>
          <ul className="flex-row gap-10 my-2 text-xl hidden md:block">
            <li>Home</li>
            <li>Posts</li>
            <li>About</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
