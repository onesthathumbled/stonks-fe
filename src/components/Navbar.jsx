import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LanguageIcon from "@mui/icons-material/Language";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import { logout } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="Navbar">
      <div className="Block-1">
        <HomeIcon className="Link" />
        <Link className="Link Logo">Stonks</Link>
        <Link className="Link">Futures</Link>
        <Link className="Link">Options</Link>
        <Link className="Link">Trading Bots</Link>
        <Link className="Link">Data</Link>
        <Link className="Link">More</Link>
      </div>

      <div className="Block-2">
        <div>
          <AccountCircleIcon className="Link" />
        </div>
        <div>
          <AccountBalanceWalletIcon className="Link" />
        </div>
        <div>
          <BookmarkIcon className="Link" />
        </div>
        <div>
          <LanguageIcon className="Link" />
        </div>
        <div>
          <BookIcon className="Link" />
        </div>
        <div onClick={handleLogout}>
          <SettingsIcon className="Link" />
        </div>
        <div>
          <LightModeIcon className="Link" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
