import { useParams, useNavigate, useOutletContext } from "react-router-dom";
import { Games } from "../assets/utile/Games";
import { useEffect } from "react";

export default function GameDetails() {
  const [order, setOrders] = useOutletContext([]);

  let navigate = useNavigate();

  const { id } = useParams();
  const game = Games.filter((game) => {
    return game.id === id;
  })[0];

  useEffect(() => {
    document.title = game.title;
  });

  return (
    <>
      <section className="game-container">
        <button onClick={() => navigate(-1)}>go back</button>
        <div className="game-section">
          <img src={game.img} alt={game.title} />
          <div className="text-section">
            <p className="game-type">{game.type}</p>
            <h2 className="game-title">{game.title}</h2>
            <p className="game-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              molestiae consequatur soluta reiciendis modi voluptate
            </p>
            <span className="game-price">
              {game.price}{" "}
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
            </span>
            <button
              dataset={game.id}
              onClick={() => setOrders((prev) => [...prev, game])}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
