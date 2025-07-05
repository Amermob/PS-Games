import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { auth, db } from "../assets/utile/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Register";
  }, []);

  async function handleSignUp() {
    if (!email || !password) return;
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("User Logged in Successfully");
        if (user) {
          setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            firstName: fullName,
          });
        }
      })
      .catch((er) => {
        return alert(er.message);
      });
  }
  return (
    <>
      <section className="login-section">
        <div>
          <h2>Register</h2>
          <form action={() => handleSignUp()}>
            <label>
              Full Name:
              <input
                type="text"
                placeholder="Nathan Drake"
                required
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>

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
            <button>Register</button>
          </form>
        </div>
        <div className="login-method">
          <Link className="google" onClick={""}>
            <FaGoogle />
            Continue with Google
          </Link>
        </div>
        <div>
          <p>Already have an account?</p>
          <button>Login</button>
        </div>
      </section>
    </>
  );
}
