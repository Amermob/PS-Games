import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container">
      <section className="landing">
        <div className="text-section">
          <h1>your one stop for all you need for your playstation 4 & 5 Games</h1>
          <p>your favorite game, only in PSG</p>
          <Link to="all-games">
            Shop Now <FaArrowRight />
          </Link>
        </div>
        <img src="./src/assets/imgs/image-panel.jpg" alt="first background" />
      </section>
    </div>
  );
}
