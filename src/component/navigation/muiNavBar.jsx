import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

import "./index.css";
function muiNavBar({ scrollState }) {
  let navBG = "";
  if (scrollState == "top") navBG = "inherit";
  if (scrollState == "amir") navBG = "black";

  // const onNavigateClick = (e) => {
  //   return <Navigate to=`${e}` replace />
  // };
  return (
    <Container
      maxWidth="none"
      style={{ backgroundColor: navBG }}
      className="muiNavBar"
    >
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
            About Me
          </Button>
          <Button variant="Text" size="large" className="Button">
            Contained
          </Button>
          <Button variant="Text" size="large" className="Button">
            Contained
          </Button>
          <Button href="/Login" variant="Text" size="large" className="Button">
            Hello Guest
          </Button>
        </Box>
      </Stack>
    </Container>
  );
}

export default muiNavBar;
