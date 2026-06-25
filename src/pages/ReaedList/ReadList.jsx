import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../addToLocalDB";
import Book from "../../components/body/home/books/Book";
import WishList from "../wishList/WishList";
import { useEffect, useState } from "react";

const ReadList = () => {
  const data = useLoaderData();

  const [state, setState] = useState("");
  const [readList, setReadList] = useState([]);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBook = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBook.includes(book.bookId),
    );
    setReadList(myReadList);
  }, [data]);

  const manageState = (type) => {
    setState(type);
    if (type === "page") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setReadList(sortedByPage);
    }
    if (type === "rating") {
      const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <>
      <div className="text-center mt-8 mb-5 md:mt-15 md:mb-10">
        <h2 className="font-bold md:text-xl text-center bg-base-300 inline py-5 px-10 md:px-50 rounded-3xl">
          Read: {readList.length}
        </h2>
      </div>

      <div className="flex justify-center">
        <details className="dropdown">
          <summary className="btn m-1 rounded-xl bg-green-200">
            Sorted by: {state ? state : ""}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => manageState("page")}>Page number</a>
            </li>
            <li>
              <a onClick={() => manageState("rating")}>Rating</a>
            </li>
          </ul>
        </details>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="md:max-w-2/4 mx-auto my-5">
            {readList.map((b, index) => (
              <Book key={index} book={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <WishList></WishList>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ReadList;
