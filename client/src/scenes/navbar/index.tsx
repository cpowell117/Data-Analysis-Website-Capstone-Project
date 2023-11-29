import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";
import Logo from "./images/FSULogo.png";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      {/* LEFT SIDE */}
      <FlexBetween gap="0.75rem">
        <img
          src={Logo}
          alt="FSU Logo"
          style={{ width: "28px", height: "28px" }}
        />
        <Typography variant="h4" fontSize="16px">
          SWMG
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("home")}
            style={{
              color:
                selected === "home" ? palette.primary[300] : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Home
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[300] } }}>
          <Link
            to="/about"
            onClick={() => setSelected("about")}
            style={{
              color:
                selected === "about" ? palette.primary[300] : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            About Us
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[300] } }}>
          <Link
            to="/dashboard"
            onClick={() => setSelected("dashboard")}
            style={{
              color:
                selected === "dashboard"
                  ? palette.primary[300]
                  : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[300] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color:
                selected === "predictions"
                  ? palette.primary[300]
                  : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[300] } }}>
          <Link
            to="/contact"
            onClick={() => setSelected("contact")}
            style={{
              color:
                selected === "contact"
                  ? palette.primary[300]
                  : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Contact
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
