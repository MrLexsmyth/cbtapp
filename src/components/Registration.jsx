import React, { useState } from "react";
import Login from "./Login";

const Registration = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Firstname", JSON.stringify(firstname));
      localStorage.setItem("Password", JSON.stringify(password));

      console.log("Saved in local storage");
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }
  return (
    <div className="text-info bg-light shadow-lg p-3 mb-5 bg-white rounded rounded-3">
      {login ? (
        <form onSubmit={handleSubmit}>
          <h1 className="d-flex justify-content-center">Sign Up</h1>
          <div className="form-group">
            <label> First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              onChange={(event) => setFirstname(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              onChange={(event) => setLastname(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter E-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control "
              placeholder="Enter Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn bg-danger border border-white mt-3 btn-dark btn-lg"
            >
              Sign Up
            </button>
          </div>
          {flag && (
            <div className="alert alert-danger" role="alert">
              !Please Fill Every Field.
            </div>
          )}

          <p className="alex d-flex justify-content-center mt-3">
            Already Registered ?{""}{" "}
            <p style={{ color: "red" }}>
              {" "}
              <span onClick={handleClick}> Sign In</span>
            </p>
          </p>
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Registration;
