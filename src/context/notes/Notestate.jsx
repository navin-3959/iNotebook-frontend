/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Notecontext from "./Notecontext";
import { useState } from "react";
const Notestate = (props) => {
    const host = "http://localhost:3000"
    const notesinitial = [

    ]
    const [notes, setnotes] = useState(notesinitial)

    const getnotes = async () => {
        //api call

        const response = await fetch(`${host}/api/notes/fetchnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiMzU0MGExMWUxYmRjNjc5YzBhMmMyIn0sImlhdCI6MTczOTgwNTcwNn0.51p92DdyUVyV2Uq8M2U1LQQNurGEFTHbkC9WvjosL-8"
            },
        })
        const json = await response.json()
        console.log("Before adding:", json);
        setnotes(json)
        // setnotes([...new Map(json.map(n => [n._id, n])).values()]);
    }

    //Add a note 
    const addnote = async (title, description, tag) => {
        //api call

        const response = await fetch(`${host}/api/notes/addnote/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiMzU0MGExMWUxYmRjNjc5YzBhMmMyIn0sImlhdCI6MTczOTgwNTcwNn0.51p92DdyUVyV2Uq8M2U1LQQNurGEFTHbkC9WvjosL-8"
            },
            body: JSON.stringify({ title, description, tag })
        })

        console.log("Before adding:", notes);
        const note = await response.json()
        // let note = {
        //     "_id": "67b3611cbbca821675cf7248",
        //     "user": "67b3540a11e1bdc679c0a2c2a",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": "2025-02-17T16:17:32.072Z",
        //     "__v": 0
        // }
        // setnotes(notes.concat(note))
        setnotes(prevNotes => {
            const uniqueNotes = [...new Map([...prevNotes, note].map(n => [n._id, n])).values()];
            return uniqueNotes;
        });

    }

    // delete a note 
    const deletenote = async (id) => {
        //api call

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiMzU0MGExMWUxYmRjNjc5YzBhMmMyIn0sImlhdCI6MTczOTgwNTcwNn0.51p92DdyUVyV2Uq8M2U1LQQNurGEFTHbkC9WvjosL-8"
            },
        })
        const json = await response.json()
        console.log("deleting the note" + id)
        setnotes((prevNotes) => prevNotes.filter((note) => note._id !== id));

    }

    //edit a note
    const editnote = async (id, title, description, tag) => {
        //api call

        const response = await fetch(`${host}/api/notes//updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiMzU0MGExMWUxYmRjNjc5YzBhMmMyIn0sImlhdCI6MTczOTgwNTcwNn0.51p92DdyUVyV2Uq8M2U1LQQNurGEFTHbkC9WvjosL-8"
            },
            body: JSON.stringify({ title, description, tag })
        })
        const json = await response.json()



        //logic to edit in client 
        setnotes((prevNotes) =>
            prevNotes.map((note) =>
                note._id === id ? { ...note, title, description, tag } : note
            )
        )

    }


    return (
        <Notecontext.Provider value={{ notes, setnotes, addnote, deletenote, editnote, getnotes }}>
            {props.children}
        </Notecontext.Provider>
    )
}


export default Notestate