import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../Context/Notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  let history = useNavigate();
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });
  const { notes, getNotes, updateNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history("/login");
    }

    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const editNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const handleOnclick = (e) => {
    updateNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    props.showalert("Notes Updated succesfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <AddNote showalert={props.showalert} />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    aria-describedby="emailHelp"
                    name="etitle"
                    onChange={onChange}
                    value={note.etitle}
                    minLength={3}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    onChange={onChange}
                    name="edescription"
                    value={note.edescription}
                    minLength={5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="etag">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tag"
                    onChange={onChange}
                    name="etag"
                    value={note.etag}
                  />
                </div>
                <div className="form-check"></div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                onClick={handleOnclick}
                type="button"
                className="btn btn-primary"
                disabled={
                  note.etitle.length < 3 || note.edescription.length < 5
                }
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Note</h2>
        <div className="container">
          {notes.length === 0 && "No Notes to display"}
        </div>
        {notes.map((note) => {
          return (
            <Noteitem
              showalert={props.showalert}
              key={note._id}
              editNote={editNote}
              note={note}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
