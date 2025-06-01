import React from "react";
import { Dayjs } from "dayjs";
import "./index.scss";
import MonthCalendar from "./MonthCalendar.tsx";
import Header from "./Header.tsx";

export interface CalendarProps {
  value: Dayjs;
}

function Calendar(props: CalendarProps) {
  return (
    <div className="calendar">
      <Header></Header>
      <MonthCalendar {...props} />
    </div>
  );
}

export default Calendar;
