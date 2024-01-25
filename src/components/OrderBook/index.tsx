const Orderbook = () => {
  const bids = [
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "95" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "10" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "20" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "70" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "30" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "50" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "20" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "80" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "90" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "80" },

    // Add more bid entries as needed
  ];

  const asks = [
    {
      price: 12436.54,
      quantity: 0.024,
      total: 1056.028,
      percentage: "95",
    },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "10" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "20" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "70" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "30" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "50" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "20" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "80" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "90" },
    { price: 12436.54, quantity: 0.024, total: 1056.028, percentage: "90" },
  ];

  return (
    <div className="flex flex-col h-full gap-4 ">
      <div className="flex overflow-y-scroll items-center border border-[#25272A]  px-4 h-10 justify-between">
        <div className=" h-full flex border border-x-0 border-t-0  border-b-[#FFFFFF] items-center justify-center flex-1">
          <p className="text-[#FFFFFF] text-sm font-semibold">Order Book</p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p className="text-[#BABABA] text-sm font-semibold">Trades</p>
        </div>
      </div>

      <div className=" flex flex-col  gap-1">
        <div className="flex px-2 justify-between">
          <p className="text-[11px] flex gap-1 font-medium text-filament-text-secondary">
            Price
            <span className="text-filament-text-tertiary text-[11px] font-normal">
              USDC
            </span>
          </p>
          <p className="text-[11px] flex gap-1 font-medium text-filament-text-secondary">
            Size
            <span className="text-filament-text-tertiary text-[11px] font-normal">
              BTC
            </span>
          </p>
          <p className="text-[11px] font-medium text-filament-text-secondary">
            Total
          </p>
        </div>
        <div className="flex   flex-col overflow-y-scroll gap-1">
          {bids.map((bid, index) => {
            return (
              <div
                key={index}
                className="flex px-2 py-[2px] justify-between"
                style={{
                  background: `linear-gradient(90deg, #a943432c ${bid.percentage}%, transparent ${bid.percentage}%)`,
                }}
              >
                <p className="text-filament-text-error text-xs font-normal">
                  {bid.price}
                </p>
                <p className="text-xs font-normal text-white">{bid.quantity}</p>
                <p className="text-xs font-normal text-filament-text-secondary">
                  {bid.total}
                </p>
              </div>
            );
          })}
        </div>
        <div className="border border-[#FFFFFF0D] py-2.5 px-2">
          <p className="text-base font-medium text-filament-text-success">
            43,998.5
          </p>
        </div>
        <div className="flex   flex-col gap-1">
          {asks.map((bid, index) => {
            return (
              <div
                key={index}
                className="flex  px-2 py-[2px] justify-between"
                style={{
                  background: `linear-gradient(90deg, #0fe7b126 ${bid.percentage}%, transparent ${bid.percentage}%)`,
                }}
              >
                <p className="text-filament-text-success text-xs font-normal">
                  {bid.price}
                </p>
                <p className="text-xs font-normal text-white">{bid.quantity}</p>
                <p className="text-xs font-normal text-filament-text-secondary">
                  {bid.total}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orderbook;
