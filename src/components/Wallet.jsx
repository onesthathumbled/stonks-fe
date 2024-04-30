import "../styles/Trade.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { wallet } from "../features/auth/authSlice";
import { topupWallet } from "../features/auth/authSlice";

const Wallet = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  const user = useSelector((state) => state.auth);

  const handleTopup = async (e) => {
    e.preventDefault();
    await dispatch(topupWallet(amount));
    await dispatch(wallet());
    setAmount("");
  };

  useEffect(() => {
    dispatch(wallet());
  }, [dispatch]);

  return (
    <div className="Trade WDeposit">
      {user?.user?.data?.status ? (
        <>
          {/* <div className="Top">
            <div>
              <button>Cross</button>
              <button>20x</button>
            </div>
            <div>
              <TuneIcon className="Tune" />
            </div>
          </div> */}

          {/* <div className="Mid">
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
          </div> */}

          <div className="LowerMid">
            <div className="Wallet WMid">
              <p className="Text">Balance</p>
              <p className="Sub">
                $
                {isNaN(user.wallet?.wallet) || user.wallet?.wallet === null
                  ? 0
                  : parseFloat(user.wallet?.wallet).toFixed(2)}
              </p>
            </div>

            {/* <div className="Total">
              <p className="Text">Total</p>
              <p className="Sub">
                $
                {quantity
                  ? parseFloat(
                      quantity * parseInt(symbol.quote?.latest_price)
                    ).toFixed(2)
                  : 0}
              </p>
            </div> */}

            {/* <div className="Total">
              <p className="Text">Stocks</p>
              <p className="Sub">
                {user.stock?.stock?.quantity
                  ? parseInt(user.stock?.stock?.quantity)
                  : 0}
              </p>
            </div> */}
          </div>

          <div className="Form">
            <form onSubmit={handleTopup}>
              <div className="Price">
                <label>Amount</label>
                <input
                  className="QuantityInput"
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="Bottom">
                <button type="submit" className="Buy">
                  Deposit
                </button>
                {/* <button type="submit" className="Sell" onClick={handleSell}>
                  Sell/Short
                </button> */}
              </div>
            </form>
          </div>
        </>
      ) : (
        <div className="TradeNot">
          {user?.user?.data?.roles === 1 ? (
            <div>
              <p className="TradeNotT">Admins are not allowed to deposit.</p>
            </div>
          ) : (
            <div>
              <div>
                <p className="TradeNotT">You're not allowed to deposit yet.</p>
                <p className="TradeNotS">Please wait for the confirmation.</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Wallet;
