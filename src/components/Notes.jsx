/* eslint-disable no-unused-vars */
import notecontext from "../context/notes/Notecontext";
import { useContext } from "react";
import Notesitem from "./Notesitem";


export default function Notes() {


    const context = useContext(notecontext)
    const { notes, setnotes } = context;


    return (
        <div className="row my-3">
            <h2>Your Notes</h2>
            {notes.map((note) => {
                return <Notesitem key={note._id} note ={note}/>
            })}
        </div>
    )
}
