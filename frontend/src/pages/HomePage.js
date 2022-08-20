import React from "react";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

function HomePage() {
  const user = useSelector((state) => state.userData.value);
  return (
    <div>
      <Header />
      <Box
        sx={{
          elevation: 5,
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: 3,
          height: "auto",
          width: { xs: 240, sm: 300 },
          margin: "8% auto",
          borderRadius: "10px",
        }}
      >
        <Typography textAlign="center" fontSize={{xs:'1rem', sm:'1.5rem'}} fontWeight={600}>
          {`Welcome ${user.firstName} ${" "} ${user.lastName}`}
        </Typography>
      </Box>
    </div>
  );
}

export default HomePage;
