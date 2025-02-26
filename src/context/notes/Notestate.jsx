/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Notecontext from "./Notecontext";
import { useState } from "react";
const Notestate = (props)=>{
     const notesinitial = [
        {
            "_id": "67b3611cbbca821675cf724aa",
            "user": "67b3540a11e1bdc679c0a2c2",
            "title": "mytitlee",
            "description": "mkmkmkmmkmkm nkn nkn nknk nknk nknkn nkkk",
            "tag": "noo",
            "date": "2025-02-17T16:17:32.072Z",
            "__v": 0
        },
        {
            "_id": "67b3611cbbca821675cf724a",
            "user": "67b3540a11e1bdc679c0a2c2",
            "title": "mytitlee",
            "description": "mkmkmkmmkmkm nkn nkn nknk nknk nknkn nkkk",
            "tag": "noo",
            "date": "2025-02-17T16:17:32.072Z",
            "__v": 0
        }
    ]
const [notes, setnotes] = useState(notesinitial)

//Add a note 
const addnote =(title,description,tag)=>{
    console.log("Before adding:", notes);
let note = {
    "_id": "67b3611cbbca821675cf724aaa",
    "user": "67b3540a11e1bdc679c0a2c2a",
    "title": "mytitlee",
    "description": "mkmkmkmmkmkm nkn nkn nknk nknk nknkn nkkk",
    "tag": "noo",
    "date": "2025-02-17T16:17:32.072Z",
    "__v": 0
}
setnotes(notes.concat(note))
// setnotes(notes.push(note))
}

// delete a note 
const deletenote =()=>{
    
}

//edit a note
const editnote =()=>{
    
}

    return (
        <Notecontext.Provider value={{notes,setnotes,addnote,deletenote,editnote}}>
           {props.children}
        </Notecontext.Provider>
    )
}


export default Notestate