import React, { useState, useEffect } from "react";
import "./Note.css";
import deleteIcon from "../../assets/delete.svg";

const Note = (props) => {
  const [noteText, setNoteText] = useState(props.note.text || "");

  useEffect(() => {
    setNoteText(props.note.text);
  }, [props.note.text]);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setNoteText(newText);
    props.updateText(props.note.id, newText);
  };

  const handleDeleteClick = () => {
    props.deleteNote(props.note.id);
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        value={noteText}
        onChange={handleTextChange}
      />
      <p>{props.note.time}</p>
      <div className="note_footer">
        <img src={deleteIcon} alt="DELETE" onClick={handleDeleteClick} />
      </div>
    </div>
  );
};

export default Note;
