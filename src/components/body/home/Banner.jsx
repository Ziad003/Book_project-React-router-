import { useState } from "react";
import img from "../../../assets/81DFOJy-jfL._AC_UF1000,1000_QL80_.jpg";
import { Link } from "react-router";
const Banner = () => {
  const [state, setState] = useState(false);
  return (
    <div
      className="hero bg-green-50 my-8 rounded-2xl py-20"
      onMouseEnter={() => setState(true)}
      onMouseLeave={() => setState(false)}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className={`h-100 max-w-sm rounded-lg shadow-2xl shadow-blue-200 ${state ? "rotate-360 scale-[1.05] transition duration-2000" : ""}`}
        />
        <div>
          <h1 className="text-5xl font-bold">
            Book to freshen up
            <br />
            your bookshelf
          </h1>
          <Link to={"/readList"}>
            <button className="btn mt-8 bg-green-600 text-white rounded-lg">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
