import { useParams } from "react-router-dom";

function Details({ findBook }) {
    const { id } = useParams();
    const focusedBook = findBook(id);

    return ( 
        <div>
            <h2>Details</h2>
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
                        <td>{focusedBook.id}</td>
                        <td>{focusedBook.title}</td>
                        <td>{focusedBook.info}</td>
                    </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Details;