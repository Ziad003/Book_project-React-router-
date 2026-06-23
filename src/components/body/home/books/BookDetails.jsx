import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const bookId = parseInt(id);
  const singleBook = books.find((book) => book.bookId === bookId);

  const {
    bookName,
    author,
    category,
    image,
    review,
    tags,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
  } = singleBook;
  console.log(
    bookName,
    author,
    category,
    image,
    review,
    tags,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
  );
  return (
    <div className="card card-side bg-base-100 shadow-sm flex flex-col md:flex-row py-20">
      <figure className="p-10 bg-base-300 ml-8 rounded-xl flex-1">
        <img className=" rounded-xl" src={image} alt="Movie" />
      </figure>
      <div className="card-body flex-2">
        <h2 className="card-title">{bookName}</h2>
        <p className="border-b border-base-300 flex items-center">By : {author}</p>
        <p className="border-b border-base-300 flex items-center">{category}</p>
        <p>
          <span className="font-bold">Review : </span>
          {review}
        </p>
        <div className="flex border-b border-base-300 pb-3">
          <p className="flex-0">Tag</p>
          <p className="ml-7">
            {tags.map((tag) => (
              <button className="mr-5  px-4 rounded-xl bg-base-300 text-green-500 font-semibold">
                #{tag}
              </button>
            ))}
          </p>
        </div>
        <div className="pb-5">
        <pre>Number of Pages:        <span className="font-bold">{totalPages}</span></pre>
        <pre>Publisher:              <span className="font-bold">{publisher}</span></pre>
        <pre>Year of Publishing:     <span className="font-bold">{yearOfPublishing}</span></pre>
        <pre>Rating:                 <span className="font-bold">{rating}</span></pre>
        </div>
        <div className="">
          <button className="btn mr-3">Read</button>
          <button className="btn bg-cyan-500">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
