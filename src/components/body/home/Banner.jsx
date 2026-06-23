import img from "../../../assets/the-dying-game-cover.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen my-8 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Book to freshen up
            <br />
            your bookshelf
          </h1>
          <button className="btn mt-8 bg-green-600 text-white rounded-lg">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
