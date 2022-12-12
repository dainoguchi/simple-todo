import * as React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box, TextField } from "@mui/material";
import { useState } from "react";
export default function PopupButton() {
  const [Groups, setGroups] = useState(["1", "2"]);
  const [Group, setGroup] = useState("");
  // formでsubmitした瞬間
  // formのイベント
  const addGroup = (e) => {
    setGroup(e.target.value);
  };
  const submitGroup = (e) => {
    e.preventDefault();
    setGroups([...Groups, Group]);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Open Popover
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box
              sx={{
                p: 2,
              }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-label="Expand"
                  aria-controls="-content"
                  id="-header"
                >
                  <Typography></Typography>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
              </Accordion>
              {Groups.map((g) => (
                <Typography variant="body1" color="initial" key={g}>
                  {g}
                </Typography>
              ))}
              {/* formの作り方分からなすぎる */}
              <form onSubmit={submitGroup}>
                <TextField
                  id="asdf"
                  label="asdf"
                  value={Group}
                  onChange={addGroup}
                />
              </form>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
