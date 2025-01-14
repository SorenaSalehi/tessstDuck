import React, { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box } from "@mui/material";

import { colorLibrary } from "../../color-library";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "50%",
      color: colorLibrary.title,
      backgroundColor: colorLibrary.boxBgLighter1,
    },
  },
};

const names = ["Game", "Movie", "Music", "Car"];

export default function SelectCategory() {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <Box
      bgcolor={colorLibrary.boxBgLighter2}
      borderRadius={"1rem"}
      sx={{
        "& .MuiSelect-select": {
          color: colorLibrary.text,
        },
      }}
    >
      <FormControl
        sx={{
          width: "100%",
        }}
      >
        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return (
                <em style={{ color: colorLibrary.text, opacity: 0.5 }}>
                  Choose Your MemeCoin Category
                </em>
              );
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>Choose Your MemeCoin Category</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
