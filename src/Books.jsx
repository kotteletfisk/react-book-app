import { Link, useLoaderData, NavLink } from "react-router-dom";
import { useState } from "react";
import Details from "./Details.jsx";

function Books({ books, setFocusedBook }) {
  return (
    <div>
        <h2>All Books</h2>
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <Link to={`../books/${book.id}`}>{book.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Books;
