import { useNavigate } from "react-router";

const WishList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3 className="font-bold text-xl text-red-400 text-center my-20">
        WishList is not ready yet for users
      </h3>
      <div className="flex justify-center mb-5">
        <button className="btn" onClick={() => navigate(-1)}>
          Home
        </button>
      </div>
    </div>
  );
};

export default WishList;
