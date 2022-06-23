import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Input from "@mui/material/Input";

export const SearchBar = (placeholder, onChange, value, type) => {
  return (
    <div className="searchBar">
      <SearchOutlinedIcon />
      <Input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        disableUnderline="true"
      />
    </div>
  );
};

export default SearchBar;
