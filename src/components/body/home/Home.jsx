import Banner from "./Banner";
import Books from "./books/Books";
import { useLoaderData } from "react-router";

const Home = () => {
  const books = useLoaderData();
  return (
    <div className="text-center">
      <Banner></Banner>
      <div>
        <Books books={books}></Books>
      </div>
    </div>
  );
};

export default Home;
