import Catalog from "./components/catalog/Catalog.js";
import { useEffect, useState } from "react";
import List from "./components/list/List.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const couse = "React js";
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.dbooks.org/api/recent")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setBooks(res?.books);
      });

    console.log(books);
  }, []);

  return (
    <div className="App">
      <header className="App-header">{<List blogs={books} />}</header>
    </div>
  );
}

export default App;
