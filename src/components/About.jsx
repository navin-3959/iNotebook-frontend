import { useContext,useEffect } from "react"
import Notecontext from "../context/notes/Notecontext"
const About = () => {
  const a = useContext(Notecontext);
  if(!a){ return <div>Error: context not found </div>}
  
  useEffect(() => {
    a.update()
  }, [])
  
  return (
    <div>
      This is about page {a.state.name}
    </div>
  )
}

export default About
