// TradingViewWidget.jsx
import { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef() as any;

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BINANCE:ETHUSDT",
          "interval": "60",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          
          "backgroundColor": "#1B1C1E",
          "locale": "en",
          "enable_publishing": false,
          "hide_side_toolbar": false,
          "toolbar_bg": "#1B1C1E",
          "hide_volume": true,
          "allow_symbol_change": true,
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);

    const toolbar = document.getElementsByClassName("content-Z4M3tWHb") as any;

    if (toolbar) {
      console.log("Toolbar found----", toolbar);
      // Change the background color
      //   toolbar.style.backgroundColor = "#059669";
    }

    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container bg-filament-card-bg"
      ref={container}
      style={{ height: "100%", width: "100%" }}
    >
      <div
        className="tradingview-widget-container__widget"
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
    </div>
  );
}

export default memo(TradingViewWidget);
