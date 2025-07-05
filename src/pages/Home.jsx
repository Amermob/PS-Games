import { IoCartOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

import Footer from "./Footer";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [cart, setCart] = useState(false);
  const [order, setOrders] = useState([]);
  const [search, setSearch] = useState();
  const [searchIcon, setSearchIcon] = useState(false);

  function deleteGame(e) {
    setOrders((prev) => prev.filter((game) => game.id !== e.target.id));
  }

  const everyOrder = order.map((game) => {
    return (
      <div key={game.id} className="order">
        <img src={game.img} alt={game.title} />
        <h4>{game.title}</h4>
        <span>
          
          <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1000 1000"
          >
            <path
              className="st0"
              d="M553.3,687.4h0c-7.8,17.2-12.9,35.9-14.9,55.5l164.4-35c7.8-17.2,12.9-35.9,14.9-55.5l-164.4,35Z"
            />
            <path
              className="st0"
              d="M702.8,603.3c7.8-17.2,12.9-35.9,14.9-55.5l-128.1,27.2v-52.4l113.2-24.1c7.8-17.2,12.9-35.9,14.9-55.5l-128.1,27.2v-188.3c-19.6,11-37.1,25.7-51.2,43v156.2l-51.2,10.9v-235.7c-19.6,11-37.1,25.7-51.2,43v203.6l-114.6,24.4c-7.8,17.2-12.9,35.9-14.9,55.5l129.5-27.5v66l-138.8,29.5c-7.8,17.2-12.9,35.9-14.9,55.5l145.3-30.9c11.8-2.5,22-9.5,28.6-19.1l26.6-39.5h0c2.8-4.1,4.4-9,4.4-14.3v-58.1l51.2-10.9v104.7l164.4-35h0Z"
            />
          </svg>
          {game.price}{" "}
        </span>
        <button onClick={(e) => deleteGame(e)} id={game.id}>
          Delete
        </button>
      </div>
    );
  });

  function title() {
    document.title = "PS Games";
  }

  const arrayOfPrices = order.map((games) => {
    return games.price;
  });

  const total = arrayOfPrices.reduce((i, e) => {
    return i + e;
  }, 0);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <header className="interact">
        <div className="logo-ul hide-in-desktop">
          <Link onClick={title} to=".">
            <img src="/src/assets/Icons/cover.png" alt="" />
          </Link>
        </div>

        <div className={`form ${searchIcon ? "show-input" : ""}`}>
          <input
            type="text"
            placeholder="Search your favorite game here"
            onChange={(e) => handleSearch(e)}
            onClick={(e) => (e.target.value = "")}
          />
          <Link className="search" to="search">
            search
          </Link>
        </div>
        <div className="user">
          <div
            onClick={() => setSearchIcon(!searchIcon)}
            className="search-icon"
          >
            <FaSearch />
          </div>
          <div className="cart" onClick={() => setCart(!cart)}>
            <IoCartOutline />
            <span>{order.length}</span>
          </div>
          <div className="log-in">
            <Link to="login">Login</Link>
            <Link to="register">Register</Link>
          </div>
        </div>
      </header>

      <div className="links">
        <ul>
          <Link onClick={title} to=".">
            Home
          </Link>
          <Link to="/ps4-games">PS4</Link>
          <Link to="/ps5-games">PS5</Link>
          <Link to="/all-games">All Games</Link>
        </ul>
      </div>

      <div className={`cart-box ${cart ? "show-cart" : ""}`}>
        <div className="top">
          <h2>Shopping Cart</h2>
          <button onClick={() => setOrders([])}>Clear Cart</button>
        </div>
        {everyOrder}
        <div className="bottom">
          <h2>Total Amount</h2>
          <span>
            {" "}
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1000 1000"
            >
              <path
                className="st0"
                d="M553.3,687.4h0c-7.8,17.2-12.9,35.9-14.9,55.5l164.4-35c7.8-17.2,12.9-35.9,14.9-55.5l-164.4,35Z"
              />
              <path
                className="st0"
                d="M702.8,603.3c7.8-17.2,12.9-35.9,14.9-55.5l-128.1,27.2v-52.4l113.2-24.1c7.8-17.2,12.9-35.9,14.9-55.5l-128.1,27.2v-188.3c-19.6,11-37.1,25.7-51.2,43v156.2l-51.2,10.9v-235.7c-19.6,11-37.1,25.7-51.2,43v203.6l-114.6,24.4c-7.8,17.2-12.9,35.9-14.9,55.5l129.5-27.5v66l-138.8,29.5c-7.8,17.2-12.9,35.9-14.9,55.5l145.3-30.9c11.8-2.5,22-9.5,28.6-19.1l26.6-39.5h0c2.8-4.1,4.4-9,4.4-14.3v-58.1l51.2-10.9v104.7l164.4-35h0Z"
              />
            </svg>{" "}
            {total}
          </span>
          <button>check out</button>
        </div>
      </div>

      <Outlet context={[order, setOrders, search]} />
      <Footer />
    </>
  );
}
