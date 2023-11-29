import React from "react";
import {
  Typography,
  Container,
  Box,
  Paper,
  TextField,
  Button,
} from "@mui/material";

const ContactUs = () => {
  return (
    <Container component="main" maxWidth="lg">
      <Box my={4}>
        <Typography variant="h2" component="h1" gutterBottom color="white">
          Contact Us
        </Typography>
        <Paper style={{ padding: "20px", backgroundColor: "#f7f7f7" }}>
          <Typography variant="h6" component="h2" color="text.primary">
            Get in Touch
          </Typography>
          <Typography paragraph>
            Have questions or feedback? We'd love to hear from you. Fill out the
            form below, or reach out to us via email or phone.
          </Typography>

          {/* Contact Form */}
          <form noValidate autoComplete="off" style={{ marginTop: "20px" }}>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Message"
              fullWidth
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Send Message
            </Button>
          </form>

          {/* Additional Contact Information */}
          <Box mt={4}>
            <Typography variant="h6">Direct Contact</Typography>
            <Typography>Email: contact@finanseer.com</Typography>
            <Typography>Phone: +123 456 7890</Typography>
            {/* Include address or other contact info if necessary */}
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default ContactUs;
