import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import "../styles/admin/AdminNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LanguageIcon from "@mui/icons-material/Language";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import { logout } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  const userRole = useSelector((state) => state.auth?.user?.data?.roles);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {userRole === 0 ? (
        <div className="Navbar">
          <div className="Block-1">
            <HomeIcon className="Link" />
            <Link to="/dashboard/main" className="Link Logo">
              Stonks
            </Link>
            <Link to="/dashboard/portfolio" className="Link">
              Portfolio
            </Link>
            <Link to="/dashboard/transactions" className="Link">
              Transactions
            </Link>
            <Link to="/dashboard/trending" className="Link">
              Trending
            </Link>
            <Link to="/dashboard/futures" className="Link">
              Futures
            </Link>
            <Link to="/dashboard/options" className="Link">
              Options
            </Link>
            <Link to="/dashboard/trading-bots" className="Link">
              Bots
            </Link>
            <Link to="/dashboard/data" className="Link">
              Data
            </Link>
            <Link to="/dashboard/more" className="Link">
              More
            </Link>
          </div>

          <div className="Block-2">
            <div className="BEmail">{user?.user?.data?.email}</div>
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
      ) : (
        <div className="Admin-NavBar-Container">
          <div className="Block-1">
            <Link to="/admin/main" className="Link Logo">
              Stonks
            </Link>
            <Link to="/admin/main" className="Link">
              Dashboard
            </Link>
            <Link to="/admin/traders" className="Link">
              Traders
            </Link>
            <Link to="/admin/transactions" className="Link">
              Transactions
            </Link>
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
      )}

      <div className="Block-2">
        <div className="BEmail">{user?.user?.data?.email}</div>
        <div>
          <AccountCircleIcon className="Link" />
        </div>
        <div>
          <Link to="/dashboard/wallet">
            <AccountBalanceWalletIcon className="Link" />
          </Link>
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
