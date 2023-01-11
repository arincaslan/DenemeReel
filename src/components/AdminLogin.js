import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { auth } from "./FireImage";
import { signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const getRandom = Object.values(props)[0];

  

  const Validate = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setLoggedIn(true);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container" style={{ padding: "50px" }}>
      <div className="row">
        <div
          className="col-lg-12"
          style={{
            display: "flex",
            "justify-content": "center",
            "align-items": "center",
          }}
        >
          <text>Login Formu</text>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="col-lg-12" style={{ border: "1px solid black" }}>
          <div className="col-lg-6">
            <text>E-Mail</text>
            <br></br>
            <input
              onChange={(e) => setEmail(e.target.value)}
              id="inpKullanıcı"
              type="text"
              value={email}
              className="inp-contact"
            ></input>
          </div>
          <div className="col-lg-6">
            <text>Parola</text>
            <br></br>
            <input
              id="inpParola"
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              value={password}
              className="inp-contact"
            ></input>
          </div>
          <br></br>
        </div>
        {loggedIn ? (
          <Redirect
            onClick={() => {
              Validate();
            }}
            to={"/admin/" + getRandom}
            style={{ display: "inline-block", cursor: "pointer" }}
            className="btn-search"
          >
            {" "}
            Giriş Yapınız
          </Redirect>
        ) : (
          <Link
            onClick={() => {
              Validate();
            }}
            to="./adminLogin"
            style={{ display: "inline-block", cursor: "pointer" }}
            className="btn-search"
          >
            {" "}
            Giriş Yapınız
          </Link>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
