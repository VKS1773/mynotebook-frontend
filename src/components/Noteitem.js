import React, { useContext } from "react";
import noteContext from "../Context/Notes/noteContext";
const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;

  const { note, editNote } = props;
  const handleonclick = () => {
    deleteNote(note._id);
    props.showalert("Note Deleted", "success");
  };
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex flex-row align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i
              className="fa-solid fa-trash-can mx-2"
              onClick={handleonclick}
            ></i>
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={() => {
                editNote(note);
              }}
            ></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
