import { Box, Typography, Container } from "@mui/material";
import TodoList from "./components/TodoList";
import Home from "./pages/Home";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import PopupButton from "./components/PopupButton";

function App() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Container maxWidth="md">
          <Typography variant="h1" component="h2" color="red" bgcolor="red">
            h1. Heading
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "1rem",
            }}
          >
            <Box sx={{}}>
              <Typography variant="h3">Hello World</Typography>
            </Box>
          </Box>
          <PopupButton></PopupButton>
          <Grid container alignItems="center" justify="center">
            <Grid item xs={8} bgcolor="blue">
              d
            </Grid>
            <Grid item xs={5}>
              d
            </Grid>
            <Grid item xs={4}>
              d
            </Grid>
            <Grid item xs={8}>
              d
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default App;
