import noteContext from "./noteContext";
import React, { useState } from "react";

const Notestate = (props) => {
  // const obj={
  //     "name":"vikash"
  // }
  // const[state,setState]=useState(obj)
  // const update=()=>{
  //     setTimeout(()=>{
  //         setState({
  //             "name":"sharma"
  //         })
  //     },1000)
  //       }
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //get all notes
  const getNotes = async () => {
    //TODO:api call
    //http://localhost:5000/api/notes/
    const response = await fetch(
      `https://mynotebook-antt.onrender.com/api/notes/fetchallnotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setNotes(json);
  };

  // add a note

  const addNote = async (title, description, tag) => {
    //TODO:api call
    const response = await fetch(
      `https://mynotebook-antt.onrender.com/api/notes/addnote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },

        body: JSON.stringify({
          title: title,
          description: description,
          tag: tag,
        }),
      }
    );
    const note = await response.json();
    setNotes(notes.concat(note));
  };

  //delete a note
  const deleteNote = async (id) => {
    //apic all
    const response = await fetch(
      `https://mynotebook-antt.onrender.com/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },

        body: JSON.stringify({
          title: "title",
          description: "description",
          tag: "tag",
        }), // body data type must match "Content-Type" header
      }
    );
    const json = await response.json();
    console.log(json);
    //logoc for delete
    console.log(`note is deleted ${id}`);
    const newnote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newnote);
  };
  //update a note
  const updateNote = async (id, title, description, tag) => {
    //api call
    const response = await fetch(
      `https://mynotebook-antt.onrender.com/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },

        body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
      }
    );
    const json = await response.json();
    console.log(json);
    console.log("I am called");
    const newNote = JSON.parse(JSON.stringify(notes));
    //edit logic
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};
export default Notestate;
