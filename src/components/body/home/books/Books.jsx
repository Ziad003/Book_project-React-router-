import Book from "./Book";
const Books = ({ books }) => {
  return (
    <div>
      <h3 className="text-3xl font-bold">Books</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 work-sans-font">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
