import { Container, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Order = () => {
  return (<Container>
    <Typography
      sx={{ mt: 25, mb: 20, textAlign: "center", fontSize: "1.8rem" }}
    >
      Your order has been placed!{" "}
      <CheckCircleIcon sx={{ color: "green", width: "50px", height: "50px" }} />
    </Typography></Container>
  );
};

export default Order;
