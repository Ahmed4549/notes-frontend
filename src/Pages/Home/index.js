import React, { useEffect, useState } from "react";
import axios from "../../api";
import OutlinedCard from "../../Components/Card";
import { Box } from "@mui/system";

const Home = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    getNotes();
  }, []);
  const getNotes = async () => {
    await axios
      .get("notes")
      .then((res) => {
        console.log(res.data.notes);
        setNotes(res.data.notes);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h3>Notes App</h3>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {notes.map((note) => {
          return <OutlinedCard data={note} />;
        })}
      </Box>
    </div>
  );
};

export default Home;
