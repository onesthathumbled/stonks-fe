import { useEffect, useState } from "react";
import "../styles/MainSymbol.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import TuneIcon from "@mui/icons-material/Tune";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../features/search/searchSlice";
import { quote } from "../features/search/searchSlice";

const MainSymbol = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);

  const [searchQuery, setSearchQuery] = useState(search.search);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    dispatch(setSearch(event.target.value));
  };

  useEffect(() => {
    dispatch(quote(searchQuery));
  }, [dispatch, searchQuery]);

  return (
    <div className="MainSymbol">
      <div className="Details Symbol">
        <input
          type="text"
          className="Text Green"
          onChange={handleSearchChange}
          value={searchQuery}
        />
        <ArrowDropDownIcon />
      </div>

      <p className="Details Price Text Green">{search.quote?.latest_price}</p>

      <div className="Details Mark">
        <p className="Text Gray">Change</p>
        <p className="SubText">{search.quote?.change}</p>
      </div>

      <div className="Details Index">
        <p className="Text Gray">Change Percent</p>
        <p className="SubText">{search.quote?.change_percent}%</p>
      </div>

      <div className="Details Funding">
        <p className="Text Gray">Previous Close</p>
        <p className="Orange SubText">{search.quote?.previous_close}</p>
      </div>

      <div className="Details Change">
        <p className="Text Gray">Market Cap</p>
        <p className="Red SubText">{search.quote?.market_cap}</p>
      </div>

      <div className="Details High">
        <p className="Text Gray">Week 52 High</p>
        <p className="SubText">{search.quote?.week_52_high}</p>
      </div>

      <div className="Details High">
        <p className="Text Gray">Week 52 Low</p>
        <p className="SubText">{search.quote?.week_52_low}</p>
      </div>

      <NavigateNextIcon className="RightArrow" />
      <TuneIcon className="Tune" />
    </div>
  );
};

export default MainSymbol;
