import React from "react";
import Note from "../Note/Note";
import "./NoteContainer.css";

const NoteContainer = ({
  notes,
  deleteNote,
  updateText,
  handleSearch,
  searchTerm,
}) => {
  const reverseArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      array.push(arr[i]);
    }
    return array;
  };

  const reversedNotes = reverseArray(notes);

  return (
    <div className="note-container">
      <div className="header">
        <h2>Notes</h2>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="note-container_notes">
        {reversedNotes.length > 0 ? (
          reversedNotes.map((item) => (
            <Note
              key={item.id}
              note={item}
              deleteNote={deleteNote}
              updateText={updateText}
            />
          ))
        ) : (
          <div className="no-notes">No Notes present</div>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
