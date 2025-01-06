import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import { calcMcapHistory } from "../utils/helpers";

const SelectedMemeCoinContext = createContext();

function SelectedMemeCoinProvider({ children }) {
  //*this will set after the user click on a memCoin(1.using in the MemeCoinDetails)
  const [selectedMemeCoinId, setSelectedMemeCoinId] = useState(null);
  const [selectedMemeCoinData, setSelectedMemeCoinData] = useState({});
  const mcapResults = calcMcapHistory(
    selectedMemeCoinData?.priceHistory,
    selectedMemeCoinData?.mcap
  );
  const [chartType, setChartType] = useState("price");
  const [chartTimeBtns, setChartTimeBtns] = useState("1min");

  useEffect(() => {
    setSelectedMemeCoinData(
      data.find((coin) => coin?.tokenId === Number(selectedMemeCoinId))
    );
  }, [selectedMemeCoinId]);

  return (
    <SelectedMemeCoinContext.Provider
      value={{
        selectedMemeCoinId,
        setSelectedMemeCoinId,
        selectedMemeCoinData,
        mcapResults,
        chartType,
        setChartType,
        chartTimeBtns,
        setChartTimeBtns,
      }}
    >
      {children}
    </SelectedMemeCoinContext.Provider>
  );
}

function useSelectedMemeCoinContext() {
  const context = useContext(SelectedMemeCoinContext);
  if (!context) {
    throw new Error(
      "useSelectedMemeCoinContext must be used within a SelectedMemeCoinProvider"
    );
  }
  return context;
}

export { SelectedMemeCoinProvider, useSelectedMemeCoinContext };
