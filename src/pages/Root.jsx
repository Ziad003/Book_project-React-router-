import Navber from "../components/header/Navber";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className="max-w-360 mx-auto px-10 bg-cyan-50 flex flex-col min-h-screen">
      <Navber></Navber>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
