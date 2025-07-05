import "./assets/Style/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import GamesStatics from "./pages/GameStatc";
import Ps4Games from "./pages/Ps4Games";
import Ps5Games from "./pages/Ps5Games";
import AllGames from "./pages/AllGames";
import GameDetails from "./pages/GameDetails";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import { NotFound } from "./pages/NotFound";
import User from "./Auth/User";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// import { auth } from "./utile//firebase";
import {auth} from "./assets/utile/firebase"
import ProtectedLink from "./Auth/ProtectedLink";
import Search from "./pages/Search";

export default function PSG() {
  const id = "";
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    document.title = "PS Games";

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h1>loading...</h1>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<GamesStatics />} />
          <Route path="ps4-games" element={<Ps4Games />} />
          <Route path="ps5-games" element={<Ps5Games />} />
          <Route path="all-games" element={<AllGames />} />
          <Route path="all-games/:id" element={<GameDetails id={id} />} />
          <Route path="login" element={<Login user={user} />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={<Search />} />
          <Route
            path="user"
            element={
              <ProtectedLink user={user}>
                <User />
              </ProtectedLink>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
