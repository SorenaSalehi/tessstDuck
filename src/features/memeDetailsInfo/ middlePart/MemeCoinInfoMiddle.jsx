import { colorLibrary } from "../../../color-library";

import { Box, Divider, Typography } from "@mui/material";

import InfoDescription from "./InfoDescription";
import InfoSocialButtons from "./InfoSocialButtons";
import InfoCopyTextItems from "./InfoCopyTextItems";
import { useSelectedMemeCoinContext } from "../../../context/SelectedMemeCoinProvider";
import InfoCreator from "./InfoCreator";

export default function MemeCoinInfoMiddle() {
  return (
    <Box
      bgcolor={colorLibrary.boxBg}
      borderRadius={"1rem"}
      overflow={"hidden"}
      width={"100%"}
    >
      {/* //* HEADER  */}
      <Box
        display={"flex"}
        bgcolor={colorLibrary.boxBg}
        padding={"0.5rem 0.6rem"}
      >
        <Typography
          color={colorLibrary.title}
          fontFamily={"'Quicksand', sans-serif"}
          fontWeight={500}
        >
          Token Information
        </Typography>
      </Box>

      <Box
        borderRadius={"1rem 1rem 0 0"}
        overflow={"hidden"}
        bgcolor={colorLibrary.boxBgLighter}
        display={"flex"}
        flexDirection={"column"}
        gap={"1rem"}
        padding={"0.5rem 0.6rem"}
      >
        {/* //*Token Information  Description */}
        <InfoDescription />

        <Divider
          sx={{
            borderColor: colorLibrary.text,
          }}
        />

        {/* //* Social Icons */}
        <InfoSocialButtons />

        <Divider
          sx={{
            borderColor: colorLibrary.text,
          }}
        />

        {/* //*Copy Items */}

        <InfoCopyTextItems />

        <Divider
          sx={{
            borderColor: colorLibrary.text,
          }}
        />

        {/* //* Creator Part */}
        <InfoCreator />
      </Box>
    </Box>
  );
}
