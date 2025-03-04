import { useState } from "react";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/auth/signup", { // ✅ Corrected endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name, // ✅ Include name
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (json.authtoken) {
      localStorage.setItem("token", json.authtoken); // ✅ Store token
      alert("Signup successful! Redirecting...");
      window.location.href = "/"; // ✅ Redirect to a protected page
    } else {
      alert(json.error || "Something went wrong"); // ✅ Show API error message
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
        <h2>Create an account to use iNotebook</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name" // ✅ Added name attribute
            value={credentials.name}
            onChange={handleChange} // ✅ Corrected function call
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email" // ✅ Added name attribute
            value={credentials.email}
            onChange={handleChange} // ✅ Corrected function call
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password" // ✅ Added name attribute
            value={credentials.password}
            onChange={handleChange} // ✅ Corrected function call
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
