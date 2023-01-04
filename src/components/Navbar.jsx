import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="border-b shadow border-gray-300 px-4 py-2 w-full leading-8 mx-auto">
      <div className="flex justify-between items-center">
        <div className="font-thin leading-10">
          <a href="/" className="bg-green-200 px-3 py-1 rounded">
            Parking
          </a>
        </div>
        <div className="">
          <NavLink
            to={"/"}
            className="px-3 py-1 border-b-2 hover:border-b-slate-400 mr-2"
          >
            Entry
          </NavLink>
          <NavLink
            to={"/dashboard"}
            className="px-3 py-1 border-b-2 hover:border-b-slate-400 mr-2"
          >
            Dashboard
          </NavLink>
        </div>
      </div>
    </div>
  );
}
