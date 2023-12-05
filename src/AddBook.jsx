import { useEffect, useState } from "react"; 

function AddBook({ addBook }) {
    const clear = {title: "", info: ""};
    const [inputBook, setInputBook] = useState(clear);
    const [message, setMessage] = useState("");

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setInputBook({...inputBook, [name]: value});
  }

  function handleSubmit(event) {
    event.preventDefault();
    addBook(inputBook);
    setInputBook(clear);
    setMessage("Book added");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [message]);

    return ( 
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Title" value={inputBook.title} onChange={handleChange}/>
                <input type="text" name="info" placeholder="Info" value={inputBook.info} onChange={handleChange}/>
                <button type="submit">Add Book</button>
            </form>
            <p>{message}</p>
        </div>
     );
}

export default AddBook;