import { useEffect, useState } from "react";
import "./App.css";
import axios from "./api";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    await axios
      .get("/notes")
      .then((res) => {
        console.log(res.data.notes);
        setNotes(res.data.notes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <h3>Notes App</h3>
      {notes.map((note) => {
        return <h6>{note.text}</h6>;
      })}
    </div>
  );
}

export default App;
