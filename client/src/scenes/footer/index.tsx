// src/components/Footer.tsx

import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const FSURed = "#7B2F3D"; 

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: FSURed, color: "white", py: 6 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="subtitle1" component="p">
          © {new Date().getFullYear()} Finanseer, Inc. All rights reserved.
        </Typography>
        <Typography variant="subtitle1" component="p">
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
          {" | "}
          <Link href="#" color="inherit">
            Terms of Service
          </Link>
          {" | "}
          <Link href="#" color="inherit">
            Contact Us
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
