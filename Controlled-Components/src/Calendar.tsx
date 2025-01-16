import useMergeState from "./hooks/useMergeState";

interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (date: Date) => void;
}

function Calendar(props: CalendarProps) {
  const { value, defaultValue, onChange } = props;

  const [mergedValue, setValue] = useMergeState(new Date(), {
    value,
    defaultValue,
    onChange,
  });

  function changeValue(date: Date) {
    setValue(date);
  }

  return (
    <div>
      {mergedValue?.toLocaleDateString()}
      <div
        onClick={() => {
          changeValue(new Date("2024-5-1"));
        }}
      >
        2024-5-1
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-2"));
        }}
      >
        2024-5-2
      </div>
      <div
        onClick={() => {
          changeValue(new Date("2024-5-3"));
        }}
      >
        2024-5-3
      </div>
    </div>
  );
}

export default Calendar;
