import { Box, Button, Fab } from "@mui/material";
import React from "react";
import { colorLibrary } from "../../color-library";
import { useNavigate } from "react-router-dom";
import { useSelectedMemeCoinContext } from "../../context/SelectedMemeCoinProvider";
import { useSwapPageDataProvider } from "../../context/SwapPageDataProvider";

export default function SwapBtns() {
  const navigate = useNavigate();
  const { selectedMemeCoinId } = useSelectedMemeCoinContext();
  const { setSelectedSwapType } = useSwapPageDataProvider();

  function handleNavigate(type) {
    setSelectedSwapType(type);
    navigate(`/meme-coin-details/${selectedMemeCoinId}/swap`);
  }

  return (
    <Box
      display={"flex"}
      gap={2}
      width={"90%"}
      position={"fixed"}
      bottom={"4.5rem"}
      left={0}
      right={0}
      zIndex={500}
      sx={{ transform: "translate(5%)" }}
    >
      <Button
        variant="h4"
        sx={{
          bgcolor: colorLibrary.bgBuy,
          color: colorLibrary.boxBg,
          borderRadius: "0.5rem",
          flexGrow: 1,
          padding: "0.5rem 0",
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
        }}
        onClick={() => handleNavigate("buy")}
      >
        BUY
      </Button>
      <Button
        variant="h4"
        sx={{
          bgcolor: colorLibrary.bgSell,
          color: colorLibrary.boxBg,
          borderRadius: "0.5rem",
          padding: "0.5rem 0",
          boxShadow:
            "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
          flexGrow: 1,
        }}
        onClick={() => handleNavigate("sell")}
      >
        SELL
      </Button>
    </Box>
  );
}
