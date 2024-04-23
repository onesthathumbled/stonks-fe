import { Link } from "react-router-dom";
import "../../styles/admin/AdminNavbar.css";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import LanguageIcon from "@mui/icons-material/Language";
import BookIcon from "@mui/icons-material/Book";
import SettingsIcon from "@mui/icons-material/Settings";
import LightModeIcon from "@mui/icons-material/LightMode";
import { logout } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";

const AdminNavbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="Admin-NavBar-Container">
      <div className="Block-1">
        <Link to="/admin" className="Link Logo">
          Stonks
        </Link>
        <Link to="/admin" className="Link">
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
  );
};

export default AdminNavbar;
