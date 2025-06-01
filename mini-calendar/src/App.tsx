import { useEffect, useState, useRef } from "react";
import Calendar from "./Calendar";

interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}

function App() {
  const calendarRef = useRef<CalendarRef>(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(calendarRef);

    setTimeout(() => {
      calendarRef.current?.setDate(new Date("2025-10-1"));
    }, 3000);
  }, []);

  return (
    <>
      <Calendar
        ref={calendarRef}
        defaultValue={new Date("2023-2-3")}
        onChange={(date) => {
          console.log(date.toLocaleString());
        }}
      />
      <button onClick={() => setDate(new Date("1999-10-26"))}>
        changeDate
      </button>
      <Calendar
        value={date}
        onChange={(date) => {
          console.log(date.toLocaleString());
        }}
      />
    </>
  );
}

export default App;
