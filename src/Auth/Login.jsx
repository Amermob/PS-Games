import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../assets/utile/firebase";
import { Navigate } from "react-router-dom";

export default function Login({ user }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   useEffect(() => {
    document.title = "Login";
  }, []);

  async function handelSignIn() {
    if (!email || !password) return;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
                
        
      })
      .catch((er) => {

        alert("there has been an error, please check you details")

      });
  }

  if (user) {
    return <Navigate to="/user"></Navigate>;
  }

 

  return (
    <>
      <section className="login-section">
        <div>
          <h2>Login</h2>
          <form action={() => handelSignIn()}>
            <label>
              Email:
              <input
                type="email"
                placeholder="example@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                placeholder="*********"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button>Login</button>
          </form>
        </div>
        <div className="login-method">
          <Link className="google">
            <FaGoogle />
            Continue with Google
          </Link>
        </div>
        <div>
          <p>Don't have an account?</p>
          <button>Register</button>
        </div>
      </section>
    </>
  );
}
