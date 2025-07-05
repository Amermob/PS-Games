import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";

import { auth, db } from "../assets/utile/firebase";

import { toast } from "react-toastify";
import { setDoc, doc, getDoc } from "firebase/firestore";

export default function User() {
  const [userDetails, setUserDetails] = useState([]);

  async function fetchUserData() {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists) {
        setUserDetails(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  }
  function signOuts() {
    signOut(auth)
      .then(() => {
        document.title = "PS Games";
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchUserData();
    document.title = "User Home Page";
  }, []);

  console.log(userDetails.firstName);

  return (
    <section className="logged-in">
      <div>
        <h2>welcome {userDetails.firstName}</h2>
        <button onClick={() => signOuts()}>sign Out</button>
      </div>
    </section>
  );
}
