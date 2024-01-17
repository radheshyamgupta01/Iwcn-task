import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

function Note() {
  const [newNote, setNewNote] = useState();
  const [content, setContent] = useState();
  const [noteData, setNoteData] = useState([]);
  const [getData, setGetData] = useState(false);

  const NoteHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/notes/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newNote,
          content: content,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setNoteData((prevNoteData) => [...prevNoteData, data]);
        console.log("Note added successfully", data);
        setGetData(true);
      } else {
        console.error("Failed to add note");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const NoteDeleteHandler = async (noteId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/notes/deleteNote/${noteId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("successfully deleted");
        setGetData(true);
      } else {
        console.error("Note deletion failed");
      }
    } catch (error) {
      console.error("Error occurred during note deletion:", error);
    }
  };

  useEffect(() => {
 
    const fetchNotes = async () => {
      try {
        const response = await fetch("http://localhost:8080/notes/getAllNotes");
        if (!response.ok) {
          throw new Error("Failed to fetch notes");
        }

        const data = await response.json();
        console.log(data);
        setNoteData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotes();
    setGetData(false);
  }, [getData]);
  return (
    <div className="bg-gray-100">
      <Header />
      <div className=" flex items-center justify-center ">
        <form
          className="flex items-center justify-center mt-2"
          onSubmit={(e) => NoteHandler(e)}
        >
          <div className="flex items-center max-w-md mx-auto bg-gray-200 w-98 h-12 border-2 border-blue-500 p-2">
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent focus:outline-none"
              placeholder="Type note..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
            />
            <input
              type="text"
              className="w-full px-4 py-2 bg-transparent focus:outline-none border-l-2 border-blue-500"
              placeholder="Type content..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex items-center bg-blue-500 justify-center w-20 h-12 text-white"
            >
              Add Note
            </button>
          </div>
        </form>
      </div>
      <div className="flex  flex-wrap overflow-x-auto gap-4 mt-4">
        {noteData.map((note, index) => (
          <div
            key={index}
            className="relative flex max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-blue-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40"
          >
            <p className="block font-sans text-sm font-normal uppercase leading-normal text-white antialiased">
              {note.title}
            </p>
            <p className="block mt-4 font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              {note.content}
            </p>
            <p className="block mt-2 font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              {note.createdAt}
            </p>
            <div className="mt-12 p-0">
              <button
                className=" flex block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
                onClick={() => NoteDeleteHandler(note.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note;
