import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "18px", xs: "10px" } }}
        marginTop="64px"
        textAlign="center"
        pb="40px"
      >
        Made with by Ismailcet
      </Typography>
    </Box>
  );
};

export default Footer;
