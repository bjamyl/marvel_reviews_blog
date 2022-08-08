import { HiMenuAlt3 } from "react-icons/hi";
const Nav = () => {
  return (
    <nav className="bg-[#E81127] text-white flex justify-between py-2 px-4">
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <HiMenuAlt3 size={36}/>
      </div>
    </nav>
  );
};

export default Nav;
