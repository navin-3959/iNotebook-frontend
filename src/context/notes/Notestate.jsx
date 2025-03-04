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
        
        setnotes(json)
    }

    //Add a note 
    const addnote = async (title, description, tag) => {
        try {
            console.log("Sending request to API...");
            const token = localStorage.getItem("token"); // Get token from local storage
            if (!token) {
                alert("Please login first")
                throw new Error("No auth token found. Please log in.");
                
            }
    
            console.log("Using token:", token);
            const response = await fetch(`${host}/api/notes/addnote/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "auth-token": token
                },
                body: JSON.stringify({ title, description, tag }) // Ensure valid JSON
            });
    
            if (!response.ok) {
                // If response is not okay, log error details
                const errorMessage = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Response: ${errorMessage}`);
            }
    
            const json = await response.json(); // Read API response
            console.log("API Response:", json);
    
            // Ensure state updates correctly
            setnotes((prevNotes) => [...prevNotes, json]);
    
        } catch (error) {
            console.error("Error adding note:", error.message);
        }
    };
    

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

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdiMzU0MGExMWUxYmRjNjc5YzBhMmMyIn0sImlhdCI6MTczOTgwNTcwNn0.51p92DdyUVyV2Uq8M2U1LQQNurGEFTHbkC9WvjosL-8"
            },
            body: JSON.stringify({ title, description, tag })
        })
        


        const updatedNote = await response.json();
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