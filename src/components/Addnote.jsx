import { useContext, useState } from "react";
import notecontext from "../context/notes/Notecontext";

const Addnote = () => {
    const context = useContext(notecontext);
    const { addnote } = context;

    const [note, setnote] = useState({ title: "", description: "", tag: "" });

    const usernote = (e) => {
        e.preventDefault(); // Prevents page reload

        if (note.title.trim() === "" || note.description.trim() === "") {
            alert("Title and Description cannot be empty!");
            return;
        }

        addnote(note.title, note.description, note.tag);
        setnote({ title: "", description: "", tag: "" }); // Reset fields
    };

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
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
                            id="description"
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
                            id="tag"
                            name="tag"
                            autoComplete="off"
                            value={note.tag}
                            onChange={onchange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={usernote}>
                        Add Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Addnote;
