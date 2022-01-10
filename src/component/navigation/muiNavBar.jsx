import React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions";

import "./index.css";
function MuiNavBar({ scrollState }) {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);

  const onLogout = () => {
    dispatch(logoutAction());
  };

  let navBG = "";
  if (scrollState == "top") navBG = "inherit";
  if (scrollState == "amir") navBG = "black";

  if (role == "Admin") {
    return (
      <Container
        maxWidth="none"
        style={{ backgroundColor: "black" }}
        className="muiNavBar-admin"
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
            <Button href="/" variant="Text" size="large" className="Button">
              Home
            </Button>
            <Button
              href="/MusicAdmin"
              variant="Text"
              size="large"
              className="Button"
            >
              OnRepeat
            </Button>
            <Button
              href="/FeedAdmin"
              variant="Text"
              size="large"
              className="Button"
            >
              Feed
            </Button>
            <Button
              onClick={onLogout}
              variant="Text"
              size="large"
              className="Button"
            >
              Logout
            </Button>
          </Box>
        </Stack>
      </Container>
    );
  }
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

export default MuiNavBar;
