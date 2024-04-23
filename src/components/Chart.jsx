import TradingViewWidget from 'react-tradingview-widget';
import '../styles/Chart.css'
import { useEffect, useRef, useState } from 'react';

const Chart = () => {

  const [parentSize, setParentSize] = useState({ width: 0, height: 0 });
  const parentRef = useRef(null);

  useEffect(() => {
    if (parentRef.current) {
      const { width, height } = parentRef.current.getBoundingClientRect();
      setParentSize({ width, height });
    }
  }, []);


  // Implement another fix for SR

  return (
    <div className="Chart" ref={parentRef}>
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
//           symbol="AAPL"
//           theme="dark"
//           width={parentSize.width - 2}
//           height={parentSize.height - 2}
//           className="TradingViewWidget"
      />
    </div>
  )
}

export default Chart