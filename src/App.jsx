import React, { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

function App() {
  const [notes, setNotes] = useState([]);
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAddNote = () => {
    if (inputText.trim() !== "") {
      const newNote = {
        id: Date.now(),
        text: inputText,
      };
      setNotes([...notes, newNote]);
      setInputText("");
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="container mx-auto p-4 bg-yellow-100">
      <h1 className="text-4xl font-bold mb-4 font-cursive">Note Taking App</h1>
      <div className="flex mb-4">
        <input type="text" placeholder="Enter a new note" value={inputText} onChange={handleInputChange} className="input input-bordered flex-grow mr-2" />
        <button onClick={handleAddNote} className="btn btn-primary rounded-full">
          <FaPlus className="mr-2" />
          Add Note
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.id} className="card bg-blue-100 shadow-xl rounded-xl">
            <div className="card-body">
              <p>{note.text}</p>
              <div className="card-actions justify-end">
                <button onClick={() => handleDeleteNote(note.id)} className="btn btn-error btn-sm rounded-full">
                  <FaTrash className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
