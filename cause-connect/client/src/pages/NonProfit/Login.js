import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";
import "../../styles/Login.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  const [email, setLoginEmail] = useState("");
  const [password, setLoginPassword] = useState("");
  const [user, setUser] = useState({});

  //   onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  const login = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUser(userCredential.user);
        alert(user.email + " Successfully logged In");
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });
  };

  return (
    <div className="App flex">
      <div>
        <img
          className="size-full hidden sm:block"
          src="../LoginPage-image.png"
          alt="login-image"
        />
      </div>
      <div className="ml-96 login-page">
        <h1 className="text-4xl font-bold text-center pb-20">
          Nonprofit Login
        </h1>
        <input
          className="text-input "
          type="email"
          placeholder="Email"
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          className="text-input"
          type="password"
          placeholder="Password"
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />

        <button className="login-button" onClick={login}>
          {" "}
          Login
        </button>

        <p className="text-center pt-5">
          Don't have an account?{" "}
          <a href="/nonprofit/signup" className="text-blue-500 underline">
            Sign Up
          </a>
        </p>
        <p className="text-center pt-5">
          <a href="/" className="text-blue-500 underline">
            Forgot Password?
          </a>
        </p>
        <p className="text-center pt-5">
          <a href="/" className="text-blue-500 underline">
            Log in as an Volunteer/Donor
          </a>
        </p>
      </div>
    </div>
  );
}
