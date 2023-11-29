import React from "react";
import { Box, Typography, Container } from "@mui/material";
import homePageVideo from "./images/homepagemotion.mp4"; // Path to your video file
import Footer from "@/scenes/footer/index";

const HomePage = () => {
  return (
    <>
      {/* ...AppBar code (not shown here) */}

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{ color: "#fff", textAlign: "center" }}
          >
            Welcome to the Future of Data Analyst
          </Typography>
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100vw", // Sets the width to the full width of the viewport
              height: "auto", // Sets the height automatically based on the video aspect ratio
              minHeight: "100vh", // Ensures the video covers the viewport height
              objectFit: "cover", // Covers the entire area of the container
              transform: "translate(-50%, -50%)",
              top: "50%",
              left: "50%",
              zIndex: -1,
              borderRadius: "155px",
            }}
          >
            <source src={homePageVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
      </Box>

      {/* Rest of the content */}
      {/* ...Footer code (not shown here) */}
      <Footer />
    </>
  );
};

export default HomePage;
