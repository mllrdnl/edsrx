import React, { useState } from "react";
import "../styles/toggleswitch.css";

export const ToggleSwitch = () => {
    
    const [isToggled, setIsToggled] = useState(false);
    const onToggle = () => setIsToggled(!isToggled);
    
    return (
        <div className="toggle_container">        
        <label className="toggle-switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </label>
      </div>
    );
  }