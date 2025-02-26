import { useContext ,useState} from "react";
import notecontext from "../context/notes/Notecontext";
const Addnote = () => {
    const context = useContext(notecontext)
    const { addnote } = context;

    const [note, setnote] = useState({title: "", description: "", tag: ""})
    const usernote = () => {
    addnote(note.title,note.description,note.tag)
    }
    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <div className="container my-3">
                <h1>Add a Note</h1>
                <form action="">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            aria-describedby="emailHelp"
                            autoComplete="current-password"
                            onChange={onchange}
                        />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">
                        description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            autoComplete="current-password"
                            onChange={onchange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={usernote}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Addnote