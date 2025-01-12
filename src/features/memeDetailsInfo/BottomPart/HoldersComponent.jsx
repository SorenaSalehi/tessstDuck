import { colorLibrary } from "../../../color-library";

import { Avatar, Box, Typography } from "@mui/material";

import { motion } from "motion/react";
import { convertWalletAddress } from "../../../utils/helpers";

export default function HoldersComponent({ holder, symbol }) {
  return (
    <Box
      component={motion.li}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={1}
      my={"0.2rem"}
      width={"100%"}
    >
      {/* //*LEFT */}
      <Box display={"flex"} gap={1} maxWidth={"60%"}>
        <Avatar
          alt="duck"
          src="/duck.jpg"
          sx={{ width: "4rem", height: "4rem" }}
        />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-evenly"}
        >
          <Box display={"flex"}>
            <Typography
              variant="body2"
              color={colorLibrary.title}
              fontWeight={"bold"}
              sx={{
                textWrap: "nowrap",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                maxWidth: "30%",
              }}
            >
              @{holder.name}
            </Typography>{" "}
            <Typography
              variant="body2"
              color={colorLibrary.title}
              fontWeight={"bold"}
            >
              {" "}
              / {convertWalletAddress(holder.address)}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            color={colorLibrary.text}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Box display={"flex"} alignItems={"center"} gap={"0.3rem"}>
              <Typography
                // color={color}
                fontWeight={"bold"}
              >
                600k {symbol}
                {/* {tradType} */}
              </Typography>
              <Typography
                variant="caption"
                alignSelf={"end"}
                color={colorLibrary.text}
              >
                {/* {getCustomRelativeTime(timeStamp)} */}
              </Typography>
            </Box>
          </Typography>
        </Box>
      </Box>

      {/* //* Right */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"end"}
        gap={"0.6rem"}
      >
        <Typography
          variant="body2"
          color={colorLibrary.title}
          textAlign={"right"}
          fontWeight={"bold"}
        >
          Owns 20%{/* {formatBigPrice(amount)} TON */}
        </Typography>
      </Box>
    </Box>
  );
}
