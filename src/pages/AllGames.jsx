import { Link ,useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Games } from "../assets/utile/Games";

export default function AllGames() {
  
  const [searchParam, setSearchParam] = useSearchParams()

  const url = searchParam.get("console")

  const filterdGames = searchParam.get("console") ? Games.filter(game => game.type === url) : Games
  

  const popularImgEl = filterdGames.map((game) => {
    return (
      <div key={game.id}>
        <img src={game.img} alt={game.id} />
        <p>{game.title}</p>
        <p>
          {game.price}
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
        </p>
        <Link to={game.id} dataset={game.title}>
          View Product
        </Link>
      </div>
    );
  });

  useEffect(() => {

   
      document.title = "All Games"
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="img-collection">
        <Link to="..">Go Back</Link>
      <div className="text-section">
        <p>Filter by:</p>
        <Link to="?console=PS4">PS4</Link>
        <Link to="?console=PS5">PS5</Link>
        <Link to=".">Clear Filter</Link>
      </div>
      <div className="imgs">{popularImgEl}</div>
    </section>
  );
}
