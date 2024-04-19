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


  return (
    <div className="Chart" ref={parentRef}>
      <TradingViewWidget
          symbol="AAPL"
          theme="dark"
          width={parentSize.width - 2}
          height={parentSize.height - 2}
          className="TradingViewWidget"
      />
    </div>
  )
}

export default Chart