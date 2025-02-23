import { useContext } from "react";
import Notecontext from "../context/notes/Notecontext";
const Home = () => {
  const context = useContext(Notecontext)
  const {notes,setnotes} = context;
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="current-password"
            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div className="container my-3">
        <h2>Your Notes</h2>
        {notes.map((note)=>{
          return note.title;
        })}
      </div>
    </div>
  );
};

export default Home;
