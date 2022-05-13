import { Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css";

const Navbar = () => {
  return (
    <div className={style.navbarMain}>
      <div>
        <Typography>Focus App</Typography>
      </div>
      <div>Settings</div>
    </div>
  );
};

export default Navbar;
