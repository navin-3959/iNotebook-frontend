/* eslint-disable react/prop-types */
import Notecontext from "./Notecontext";
import { useState } from "react";
const Notestate = (props)=>{
     const notesinitial = [
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
    return (
        <Notecontext.Provider value={{notes,setnotes}}>
           {props.children}
        </Notecontext.Provider>
    )
}


export default Notestate