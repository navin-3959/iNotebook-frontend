/* eslint-disable no-unused-vars */
import notecontext from "../context/notes/Notecontext";
import { useContext, useEffect, useRef, useState } from "react";
import Notesitem from "./Notesitem";
import Addnote from "./Addnote";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function Notes() {


    const context = useContext(notecontext)
    const { notes, addnote, getnotes } = context;
    useEffect(() => {
        getnotes()
    }, []);
    const ref = useRef(null)
    const updatenote = (currentnote) => {
        console.log("Updating Note:", note);
        if (ref.current) {
            const modal = new bootstrap.Modal(ref.current);
            modal.show();
        }
        setnote(currentnote)
    }
    const [note, setnote] = useState({ etitle: "", edescription: "", etag: "" });
    const usernote = (e) => {
        e.preventDefault(); // Prevents page reload

        if (note.title.trim() === "" || note.description.trim() === "") {
            alert("Title and Description cannot be empty!");
            return;
        }
        console.log("updated note",note)
        setnote({ title: "", description: "", tag: "" }); // Reset fields
    };

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
    };
    return (
        <>
            <Addnote />
            {/* <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            <div ref={ref} className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="etitle"
                                        name="title"
                                        autoComplete="off"
                                        value={note.title}
                                        onChange={onchange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edescription"
                                        name="description"
                                        autoComplete="off"
                                        value={note.description}
                                        onChange={onchange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">
                                        Tag (optional)
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="etag"
                                        name="tag"
                                        autoComplete="off"
                                        value={note.tag}
                                        onChange={onchange}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={usernote} type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <Notesitem key={note._id} updatenote={updatenote} note={note} />
                })}
                {/* {notes.map((note) =>
                    note._id ? (
                        <Notesitem key={note._id} note={note} />
                    ) : (
                        <div key={Math.random()}>Invalid Note</div>
                    )
                )} */}

            </div>
        </>
    )
}
