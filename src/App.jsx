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
    <div className="container mx-auto p-4 bg-gradient-to-br from-pink-400 to-yellow-200">
      <h1 className="text-5xl font-bold mb-6 font-cursive text-indigo-900">📝 Colorful Notes 🎨</h1>
      <div className="flex mb-4">
        <input type="text" placeholder="Enter a new note" value={inputText} onChange={handleInputChange} className="input input-bordered flex-grow mr-2" />
        <button onClick={handleAddNote} className="btn btn-primary rounded-full">
          <FaPlus className="mr-2" />
          Add Note
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div key={note.id} className="card bg-white shadow-xl rounded-xl bg-gradient-to-br from-blue-200 to-green-200 bg-opacity-50 backdrop-filter backdrop-blur-sm">
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
