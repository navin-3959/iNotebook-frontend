/* eslint-disable no-unused-vars */
import notecontext from "../context/notes/Notecontext";
import { useContext, useEffect, useRef, useState } from "react";
import Notesitem from "./Notesitem";
import Addnote from "./Addnote";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
export default function Notes() {


    const context = useContext(notecontext)
    const { notes, addnote, getnotes, editnote } = context;
    useEffect(() => {
        getnotes()
    }, []);
    const refclose = useRef(null)
    const ref = useRef(null)
    const updatenote = (currentnote) => {
        console.log("Updating Note:", currentnote);
        setnote({
            id: currentnote._id || "",
            etitle: currentnote.title || "",
            edescription: currentnote.description || "",
            etag: currentnote.tag || ""
        });
    
    

        // Show modal properly
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    };

    const [note, setnote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
    const usernote = (e) => {
        e.preventDefault(); // Prevents page reload

        if ((note.etitle || "").trim() === "" || (note.edescription || "").trim() === "") {
            alert("Title and Description cannot be empty!");
            return;
        }
        console.log("updated note", note)
        editnote(note.id, note.etitle, note.edescription, note.etag);
        const modalElement = document.getElementById('exampleModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
            
            // Delay focus reset slightly to ensure modal hides first
            setTimeout(() => {
                document.body.focus(); // Shifts focus away from modal elements
            }, 50);
        }

        setnote({ id: "", etitle: "", edescription: "", etag: "" });
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
                                        name="etitle"
                                        autoComplete="off"
                                        value={note.etitle}
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
                                        name="edescription"
                                        autoComplete="off"
                                        value={note.edescription}
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
                                        name="etag"
                                        autoComplete="off"
                                        value={note.etag}
                                        onChange={onchange}
                                    />
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refclose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
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


            </div>
        </>
    )
}
