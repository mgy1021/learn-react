import React from "react";

function Header() {
  return (
    <div className="calendar-header">
      <div className="calendar-header-left">
        <div className="calendar-header-icon">&lt;</div>
        <div className="calendar-header-value">2023年11月</div>
        <div className="calendar-header-icon">&gt;</div>
        <div className="calendar-header-btn">今天</div>
      </div>
    </div>
  );
}

export default Header;
