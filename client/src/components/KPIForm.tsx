import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  CssBaseline,
  Container,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

// Create a theme instance.
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7cb342", // You can customize this color
    },
  },
  components: {
    // Name of the component
    MuiTextField: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          backgroundColor: "rgba(255, 255, 255, 0.09)",
          borderRadius: "4px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.12)", // White with 12% opacity
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)", // White with 30% opacity
            },
            "&.Mui-focused fieldset": {
              borderColor: "#7B2F3D", // White with 50% opacity
            },
          },
          "& .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.7)", // Label text color
          },
          "& .MuiInputBase-input": {
            color: "white", // Input text color
          },
        },
      },
    },
  },
});

const KPIForm = () => {
  const [kpiData, setKpiData] = useState({
    totalProfit: "",
    totalRevenue: "",
    totalExpenses: "",
    // Add other KPI fields as necessary
  });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setKpiData({ ...kpiData, [name]: value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Add the logic to send the data to the backend here
    // ...
  };

  // The form component wrapped in the ThemeProvider
  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main" maxWidth="sm" sx={{ mt: 4 }}>
        <CssBaseline />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5" color="white" gutterBottom>
            FILL OUT FORM
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="totalProfit"
            label="Total Profit"
            name="totalProfit"
            autoComplete="total-profit"
            autoFocus
            onChange={handleChange}
            value={kpiData.totalProfit}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="totalRevenue"
            label="Total Revenue"
            name="totalRevenue"
            autoComplete="total-revenue"
            onChange={handleChange}
            value={kpiData.totalRevenue}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="totalExpenses"
            label="Total Expenses"
            name="totalExpenses"
            autoComplete="total-expenses"
            onChange={handleChange}
            value={kpiData.totalExpenses}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          {/* Add more input fields as needed */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "#7B2F3D",
              "&:hover": {
                bgcolor: "#682e35", // a darker shade when hovering over the button
              },
            }}
          >
            Submit Form
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default KPIForm;
