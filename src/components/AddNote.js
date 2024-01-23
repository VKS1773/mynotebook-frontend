import React, { useContext, useState } from "react";
import noteContext from "../Context/Notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleOnclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showalert("Note added successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="my-3 container">
      <h2>Add Note</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control my-1"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter Title"
            name="title"
            onChange={onChange}
            minLength={3}
            required
            value={note.title}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control my-1"
            id="description"
            placeholder="Description..."
            onChange={onChange}
            name="description"
            minLength={5}
            required
            value={note.description}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="description">Tag</label>
          <input
            type="text"
            className="form-control my-1"
            id="tag"
            placeholder="Tag..."
            onChange={onChange}
            name="tag"
            value={note.tag}
          />
        </div>

        <button
          disabled={note.title.length < 3 || note.description.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleOnclick}
        >
          AddNote
        </button>
      </form>
    </div>
  );
};

export default AddNote;
