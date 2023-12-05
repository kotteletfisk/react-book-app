import { useState } from "react";

function FindBook({ findBook }) {
  const [inputId, setInputId] = useState("");
  const [found, setFound] = useState(false);

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setInputId(value);
    const book = findBook(value);
    setFound(book);
    console.log(found);
  }

  return (
    <div>
      <h2>Find Book by ID</h2>
      <div>
        <form>
          <input
            type="number"
            name="id"
            placeholder="ID"
            value={inputId}
            onChange={handleChange}
          />
        </form>
      </div>
      <div>
        {found ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{found.id}</td>
                <td>{found.title}</td>
                <td>{found.info}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Book not found</p>
        )}
      </div>
    </div>
  );
}

export default FindBook;
