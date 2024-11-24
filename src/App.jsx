import React, { useEffect, useState } from "react";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notesapp")) || []
  );
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = (color) => {
    const newNote = {
      id: Date.now() + Math.floor(Math.random() * 78),
      text: "",
      time: new Date().toLocaleString(),
      color,
    };

    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const updateText = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  useEffect(() => {
    localStorage.setItem("notesapp", JSON.stringify(notes));
  }, [notes]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NoteContainer
        notes={filteredNotes}
        deleteNote={deleteNote}
        updateText={updateText}
        handleSearch={handleSearch}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default App;
