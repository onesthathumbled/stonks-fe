import { Link } from "react-router-dom";
import "../styles/Trade.css";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoIcon from "@mui/icons-material/Info";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buy, sell } from "../features/transactions/transactionSlice";
import { wallet, stock } from "../features/auth/authSlice";

const Trade = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  const symbol = useSelector((state) => state.search);

  const [quantity, setQuantity] = useState("");
  const transaction = useSelector((state) => state.transaction);

  const handleChange = (e) => {
    const value = e.target.value;
    // Ensure quantity is non-negative
    if (!isNaN(value) && parseInt(value) >= 0) {
      setQuantity(value);
    }
  };

  const handleBuy = async (e) => {
    e.preventDefault();
    const total = quantity * parseInt(symbol.quote?.latest_price);

    if (total <= parseInt(user.wallet?.wallet)) {
      const transactionData = {
        symbol: symbol.quote?.symbol,
        company_name: symbol.quote?.company_name,
        quantity: parseInt(quantity),
      };
      await dispatch(buy(transactionData));
      await dispatch(wallet());
      await dispatch(stock(symbol?.search));
      setQuantity("");
    } else {
      console.log("Insufficient funds.");
    }
  };

  const handleSell = async (e) => {
    e.preventDefault();

    if (quantity <= user.stock?.stock?.quantity) {
      const transactionData = {
        symbol: symbol.quote?.symbol,
        company_name: symbol.quote?.company_name,
        quantity: parseInt(quantity),
      };
      await dispatch(sell(transactionData));
      await dispatch(wallet());
      await dispatch(stock(symbol?.search));
      setQuantity("");
    } else {
      console.log("Insufficient funds.");
    }
  };

  useEffect(() => {
    dispatch(wallet());
    dispatch(stock(symbol?.search));
  }, [dispatch, quantity, symbol?.search]);

  return (
    <div className="Trade">
      <div className="Top">
        <div>
          <button>Cross</button>
          <button>20x</button>
        </div>
        <div>
          <TuneIcon className="Tune" />
        </div>
      </div>

      <div className="Mid">
        <div className="Inside">
          <Link className="Text Tr">Limit</Link>
          <Link className="Text Tr Market">Market</Link>
          <div className="Inside-2">
            <Link className="Text">Stop Limit</Link>
            <ArrowDropDownIcon className="Icon" />
          </div>
        </div>

        <div>
          <InfoIcon className="Icon" />
        </div>
      </div>

      <div className="LowerMid">
        <div className="Wallet">
          <p className="Text">Wallet</p>
          <p className="Sub">${parseFloat(user.wallet?.wallet).toFixed(2)}</p>
        </div>

        <div className="Total">
          <p className="Text">Total</p>
          <p className="Sub">
            $
            {quantity
              ? parseFloat(
                  quantity * parseInt(symbol.quote?.latest_price)
                ).toFixed(2)
              : 0}
          </p>
        </div>

        <div className="Total">
          <p className="Text">Stocks</p>
          <p className="Sub">
            {user.stock?.stock?.quantity
              ? parseInt(user.stock?.stock?.quantity)
              : 0}
          </p>
        </div>
      </div>

      <div className="Form">
        <form>
          <div className="Price">
            <label>Quantity</label>
            <input
              className="QuantityInput"
              type="number"
              value={quantity}
              onChange={handleChange}
            />
          </div>

          <div className="Bottom">
            <button type="submit" className="Buy" onClick={handleBuy}>
              Buy/Long
            </button>
            <button type="submit" className="Sell" onClick={handleSell}>
              Sell/Short
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Trade;
