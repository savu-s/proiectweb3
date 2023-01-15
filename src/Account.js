import React from "react";
import "./SignInSignUp.css";
function Account() {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <h1>Pagină cont </h1>
      <p>Bine ai venit {localStorage.getItem("name")}</p>
      <button onClick={logout} className="logout">
        Deconectați-vă
      </button>
      <button onClick={deleteAccount} className="delete">
        Ștergere
      </button>
    </div>
  );
}
export default Account;
