import { Link } from "react-router-dom";
import "../styles/Tickers.css";
import StarIcon from "@mui/icons-material/Star";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TuneIcon from "@mui/icons-material/Tune";
import { useSelector } from "react-redux";

const Tickers = () => {
  const userRole = useSelector((state) => state.auth?.user?.data?.roles);

  return (
    <div
      className="Tickers"
      style={{ marginTop: userRole === 1 ? "22px" : "0" }}
    >
      <StarIcon className="Link Star" />
      <div className="Link">
        <Link className="Symbol">MSFT</Link>
        <span className="Green">+3.32%</span>
      </div>

      <div className="Link">
        <Link className="Symbol">AMZN</Link>
        <span className="Green">+3.45%</span>
      </div>

      <div className="Link">
        <Link className="Symbol">GOOGL</Link>
        <span className="Red">-0.60%</span>
      </div>

      <div className="Link">
        <Link className="Symbol">FB</Link>
        <span className="Red">-0.77%</span>
      </div>

      <div className="Link">
        <Link className="Symbol">TSLA</Link>
        <span className="Red">-2.20%</span>
      </div>

      <NavigateNextIcon className="Link RightArrow" />
      <TuneIcon className="Link Tune" />
    </div>
  );
};

export default Tickers;
