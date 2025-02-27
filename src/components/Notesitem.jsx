/* eslint-disable react/prop-types */
import notecontext from "../context/notes/Notecontext";
import { useContext } from "react";
const Notesitem = (props) => {
    const context = useContext(notecontext)
const {deletenote} = context
    const { note } = props;
    return (
        <div className="col md-3">

            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deletenote(note._id)}} ></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div>
        </div>
    )
}

export default Notesitem