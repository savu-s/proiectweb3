import React, { useEffect, useRef, useState } from "react";
import Account from "./Account";
import "./SignInSignUp.css";
function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showAccount, setShowAccount] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");
  useEffect(() => {
    if (localSignUp) {
      setShowAccount(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });
  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Cont creat cu succes!!");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (
      email.current.value == localEmail &&
      password.current.value == localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Utilizator sau parolă greșite, încearcă din nou!");
    }
  };
  return (
    <div>
      {showAccount ? (
        <Account />
      ) : show ? (
        <div className="container">
          <h1>Salut {localName}</h1>
          <div className="input_space">
            <input placeholder="Email" type="text" ref={email} />
          </div>
          <div className="input_space">
            <input placeholder="Parola" type="password" ref={password} />
          </div>
          <button onClick={handleSignIn}>Autentificare</button>
        </div>
      ) : (
        <div className="container">
          <div className="input_space">
            <input placeholder="Nume" type="text" ref={name} />
          </div>
          <div className="input_space">
            <input placeholder="Email" type="text" ref={email} />
          </div>
          <div className="input_space">
            <input placeholder="Parolă" type="password" ref={password} />
          </div>
          <button onClick={handleClick}>Înscrie-te</button>
        </div>
      )}
    </div>
  );
}
export default SignInSignupWithLocalStorage;
