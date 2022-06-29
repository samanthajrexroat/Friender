import React from "react";
import "../assets/index.css";

import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const SearchBar = (placeholder, onChange, value, type) => {
  return (
    <Grid sm={12} md={4} lg={6}>
      <Grid item className="searchBarContainer">
        <Paper
          elevation={3}
          style={{
            borderRadius: "10px",
            background: "linear-gradient(to right, #ece9e6, #ffffff)",
            justifyContent: "space-evenly",
            padding: "10px",
          }}
        >
          <div className="searchBar">
            <Input
              onChange={onChange}
              value={value}
              type={type}
              placeholder="  Write A Post"
              disableUnderline={true}
            />
          </div>
          <div className="searchIcons">
            <div>
              <AddPhotoAlternateIcon /> Photo
            </div>
            <div>
              <OndemandVideoIcon /> Video
            </div>
            <div>
              <CalendarMonthIcon /> Event
            </div>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
