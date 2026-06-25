import Navbar from "../components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className="max-w-360 mx-auto px-10 bg-cyan-50 flex flex-col min-h-screen">
      <Navbar></Navbar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
