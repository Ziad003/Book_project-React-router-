import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";

import ListedBooks from "../components/body/ListedBooks";
import Home from "../components/body/home/Home";
import BookDetails from "../components/body/home/books/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch("/booksData.json"), Component: Home },
      {
        path: "/listedBooks",
        Component: ListedBooks,
      },
      {
        path: "book/:id",
        loader: () => fetch("/booksData.json"),
        hydrateFallbackElement: <p>Loading...</p>,
        Component: BookDetails,
      },
    ],
  },
  {
    path: "*",
    element: <p>Page not found</p>,
  },
]);
