import Navber from "../components/header/Navber";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
