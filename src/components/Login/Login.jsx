import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [loggedInUsers, setLoggedInUsers] = useState({});
  const handleGoogleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setLoggedInUsers(user);
      })
      .catch((err) => {
        const error = err.message;
        console.error(error);
      });
  };
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedInUsers({});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogleAuth}>login</button>
      <button onClick={handleLogOut}>Log Out</button>

      <div>
        <h3>user name:{loggedInUsers.displayName}</h3>
        <p>email:{loggedInUsers.email}</p>
        <img src={loggedInUsers.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Login;
