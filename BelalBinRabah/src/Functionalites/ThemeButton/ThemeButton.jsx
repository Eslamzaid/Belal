import React from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import './ThemeButton.css'

export default function ThemeButton(props) {
  return (
    <div>
      <div className="darkButton">
        <DarkModeSwitch
          onClick={props.touched}
          size={70}
          checked={props.checkedd}
          moonColor={"black"}
        />
      </div>
    </div>
  );
}
