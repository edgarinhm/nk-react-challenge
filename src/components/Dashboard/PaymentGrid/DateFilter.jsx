import DatePicker from "react-datepicker";

const DateFilter = (props) => {
  const { selectedDate, onSelect } = props;
  return (
    <>
      <label htmlFor="dateFilter">{"Date Filter "}</label>
      <DatePicker
        id="dateFilter"
        showIcon
        selected={selectedDate}
        onChange={(date) => onSelect(date)}
      />
    </>
  );
};

export default DateFilter;
