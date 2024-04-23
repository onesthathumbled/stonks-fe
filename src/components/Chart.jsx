import TradingViewWidget from "react-tradingview-widget";
import "../styles/Chart.css";
import { useSelector } from "react-redux";

const Chart = () => {
  const search = useSelector((state) => state.search);

  // Implement another fix for SR

  return (
    <div className="Chart">
      <TradingViewWidget
        symbol={search.search}
        theme="Dark"
        // width={958}
        width={1190}
        // width={1374}
        // width="1530"
        height={571}
        // height="773"
        // backgroundColor="#161A1E"
        className="TradingViewWidget"
      />
    </div>
  );
};

export default Chart;
