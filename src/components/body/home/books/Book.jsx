import { FaRegStar } from "react-icons/fa";

const book = ({ book }) => {
  const { category, rating, image, author, bookName, yearOfPublishing } = book;
  return (
    <div className="card shadow-sm p-5 cursor-pointer hover:bg-green-50 hover:shadow-lg hover:scale-[1.01] active:scale-[1]">
      <figure className="bg-base-300 py-8 rounded-xl">
        <img className="h-70 rounded-lg" src={image} alt="Shoes" />
      </figure>
      <div className="items-start mt-5">
        <div className="flex justify-between w-full">
          <h2 className="card-title">{bookName}</h2>
          <div className="badge badge-secondary">{yearOfPublishing}</div>
        </div>
        <p className="mb-3">By : {author}</p>
        <div className="flex justify-between w-full py-3 border-t border-dashed">
          <p>{category}</p>
          <div className="flex items-center gap-2">
            <p>{rating}</p>
            <FaRegStar></FaRegStar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default book;
