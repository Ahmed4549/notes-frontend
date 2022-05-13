import React from "react";
import OutlinedCard from "../../Components/Card";
import style from "./style.module.css";

const Guest = () => {
  return (
    <div className={style.guestMain}>
      <div className={style.guestInner}>
        <OutlinedCard />
      </div>
    </div>
  );
};

export default Guest;
