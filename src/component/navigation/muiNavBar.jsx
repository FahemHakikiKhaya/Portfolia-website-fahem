import React from "react";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";

function muiNavBar() {
  const a = grey[900];
  return (
    <div>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </div>
  );
}

export default muiNavBar;
