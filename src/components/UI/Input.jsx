import { Box, TextField } from "@mui/material";
import React from "react";

const Input = ({ name, label, onChange, value }) => {
  return (
    <Box sx={{ width: 1 }} autoComplete="off">
      <TextField
        type={"text"}
        fullWidth
        id={`outlined-` + name}
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
      />
    </Box>
  );
};

export default Input;
