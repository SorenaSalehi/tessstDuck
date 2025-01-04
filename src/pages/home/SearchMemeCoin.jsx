import React, { useState } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { Height, Scale, Search } from "@mui/icons-material";
import { motion } from "motion/react";

import { colorLibrary } from "../../color-library";

export default function SearchMemeCoin() {
  const [query, setQuery] = useState("");

  return (
    <Box
      component={motion.div}
      whileTap={{ scale: 0.8 }}
      sx={{ width: "100%" }}
    >
      <TextField
        id="query"
        placeholder="🔍 Search"
        fullWidth
        // slotProps={{
        //   input: {
        //     startAdornment: (
        //       <InputAdornment position="start">
        //         <Search sx={{ color: colorLibrary.title }} />
        //       </InputAdornment>
        //     ),
        //   },
        // }}
        sx={{
          bgcolor: colorLibrary.boxBgLighter,
          borderRadius: "1.8rem",
          "& .MuiOutlinedInput-root": {
            height: "2.2rem",
            "& fieldset": {
              border: "none",
            },
            "&:hover fieldset": {
              border: "none",
            },
            "&.Mui-focused fieldset": {
              border: "none",
            },
          },
          "& .MuiInputBase-input": {
            color: colorLibrary.title, // Input text color
          },
          "& .MuiInputLabel-root": {
            color: colorLibrary.title, // Label color
          },
          "& .MuiInputBase-input::placeholder": {
            textAlign: "center", // Center the placeholder text
            opacity: 1,
          },
        }}
        value={query}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
    </Box>
  );
}
