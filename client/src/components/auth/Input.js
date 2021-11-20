import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function Input(props) {
  const {
    name,
    label,
    autoFocus,
    handleChange,
    handleShowPassword,
    type,
    half,
  } = props;

  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        fullWidth
        autoFocus={autoFocus}
        onChange={handleChange}
        variant="outlined"
        required
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
}
