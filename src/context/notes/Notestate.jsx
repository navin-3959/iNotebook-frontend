/* eslint-disable react/prop-types */
import Notecontext from "./Notecontext";

const Notestate = (props)=>{
     

    return (
        <Notecontext.Provider value={{}}>
           {props.children}
        </Notecontext.Provider>
    )
}


export default Notestate