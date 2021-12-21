import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import "./index.css";
function muiNavBar() {
  return (
    <Container maxWidth="none" sx={{ bgcolor: "primary.main" }}>
      <Button disabled className="Button">
        HELLO Hello
      </Button>
    </Container>
  );
}

export default muiNavBar;
