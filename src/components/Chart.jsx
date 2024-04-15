import TradingViewWidget from 'react-tradingview-widget';
import '../styles/Chart.css'

const Chart = () => {
  return (
    <div className="Chart">
      <TradingViewWidget
        symbol="AAPL"
        theme="dark"
        // width="958"
        // width="1374"
        width="1530"
        // height="538"
        height="773"
        // backgroundColor="#161A1E"
        className="TradingViewWidget"
      />
    </div>
  )
}

export default Chart