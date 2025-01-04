import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

import { useHomeContext } from "../../context/HomePageProvider";
import { colorLibrary } from "../../color-library";
import MemeCoinIMHT from "../../ui/MemeCoinIMHT";
import { useNavigate } from "react-router-dom";

export default function HottestMemeCoinDetails() {
  const { hottestMemeCoin } = useHomeContext();

  const { tokenName, mcap, holders, txns } = hottestMemeCoin?.[0];
  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/meme-coin-details/${1}`);
  }

  return (
    <Card
      sx={{
        bgcolor: colorLibrary.text,
      }}
      onClick={handleNavigate}
    >
      <CardActionArea>
        <CardContent>
          <Box
            component="section"
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={2}
            borderRadius={"1rem"}
            padding={"1rem 0"}
          >
            {/* //*title */}
            <Typography textTransform={"uppercase"} fontWeight={600}>
              {tokenName} is skyrocketing 🚀
            </Typography>

            <Box
              component="div"
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"90%"}
            >
              {/* //*details: Image , Mcap , Holders , Txs*/}
              <Box component="div" textAlign={"center"} width={"45%"}>
                <MemeCoinIMHT
                  mcap={mcap}
                  holders={holders}
                  txns={txns}
                  showImg={true}
                />
              </Box>

              {/* //*duck gif */}
              <Box component="img" src="duck.jpg" width={80} height={130} />
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
