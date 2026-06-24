import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../addToLocalDB";
import Book from "../../components/body/home/books/Book";
import WishList from "../wishList/WishList";

const ReadList = () => {
  const data = useLoaderData();

  const storedBookData = getStoredBook();
  const convertedStoredBook = storedBookData.map((id) => parseInt(id));
  const myReadList = data.filter((book) =>
    convertedStoredBook.includes(book.bookId),
  );

  return (
    <>
      <div className="text-center mt-15 mb-10">
        <h2 className="font-bold text-xl text-center bg-base-300 inline py-5 px-50 rounded-3xl">
          Read: {myReadList.length}
        </h2>
      </div>
      <Tabs>
        <TabList>
          <Tab>Rread Book</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <div className="max-w-2/4 mx-auto my-5">
            {myReadList.map((b) => (
              <Book book={b}></Book>
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
