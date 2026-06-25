import { createBrowserRouter } from "react-router";
import Root from "../pages/Root";

import Home from "../components/body/home/Home";
import BookDetails from "../components/body/home/books/BookDetails";
import ReadList from "../pages/ReaedList/ReadList";
import About from "../pages/About";
import DemoAlert from "../components/DemoAlert";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch("/booksData.json"), Component: Home },
      {
        path: "book/:id",
        loader: () => fetch("/booksData.json"),
        hydrateFallbackElement: <p>Loading...</p>,
        Component: BookDetails,
      },
      {
        path: "/readList",
        loader: () => fetch("/booksData.json"),
        Component: ReadList,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/alert",
        Component: DemoAlert,
      },
    ],
  },
  {
    path: "*",
    element: <p>Page not found</p>,
  },
]);
