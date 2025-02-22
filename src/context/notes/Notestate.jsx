import Notecontext from "./Notecontext";
import { useState } from "react";

const Notestate = (props)=>{
         const initialstate ={
            "name":"navin",
            "class":"12th"
         }
const [state, setstate] = useState(initialstate)
const update=()=>{
    setTimeout(() => {
        setstate({
            "name":"larry",
            "class":"10th"
        })
    }, 1000);
}
    return (
        <Notecontext.Provider value={{state,update}}>
           {props.children}
        </Notecontext.Provider>
    )
}


export default Notestate