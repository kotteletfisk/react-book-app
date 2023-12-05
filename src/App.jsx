import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Books from "./Books";
import { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ErrorPage from "./Errorpage.jsx";
import bookFacade from "./bookFacade";
import MainLayout from "./MainLayout";
import Details from "./Details.jsx";
import AddBook from "./AddBook.jsx";
import FindBook from "./FindBook.jsx";
import Home from "./Home.jsx";

function App() {
  const [books, setBooks] = useState(bookFacade.getBooks());

  useEffect(() => {
    setBooks(bookFacade.getBooks());
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="books" element={<Books books={books} />}></Route>
        <Route
          path="books/:id"
          element={<Details findBook={(id) => bookFacade.findBook(id)} />}
        />
        <Route
          path="add"
          element={<AddBook addBook={(book) => bookFacade.addBook(book)} />}
        ></Route>
        <Route
          path="find"
          element={<FindBook findBook={(id) => bookFacade.findBook(id)} />}
        ></Route>
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
