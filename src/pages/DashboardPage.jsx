import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import VehicleForm from "../components/VehicleForm";

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 h-screen overflow-hidden w-screen">
        <div className="col-span-3 border">
          <NavLink to={"/dashboard"}>
            <div className="border-b border-gray-300 px-4 py-2 w-full leading-8 mx-auto">
              Dashboard
            </div>
          </NavLink>
        </div>
        <div className="col-span-9 border">
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <main>
              <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                <div className="border-b shadow border-gray-300 px-4 py-2 w-full leading-8 mx-auto">
                  Dashboard
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
