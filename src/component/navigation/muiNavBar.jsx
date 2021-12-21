import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

import "./index.css";
function muiNavBar() {
  return (
    <Container maxWidth="none" sx={{ bgcolor: "inherit" }}>
      <Stack direction="row" justifyContent="space-between" p={3}>
        <Button
          variant="Text"
          size="large"
          className="Button"
          startIcon={<FontAwesomeIcon icon={faRocket} />}
        >
          Fahem HakikiKhaya
        </Button>
        <Box>
          <Button variant="Text" size="large" className="Button">
            Contained
          </Button>
          <Button variant="Text" size="large" className="Button">
            Contained
          </Button>
          <Button variant="Text" size="large" className="Button">
            Contained
          </Button>
          <Button variant="Text" size="large" className="Button">
            Contained
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default muiNavBar;
