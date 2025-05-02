const DateFilter = (props) => {
  const { onSelect } = props;
  return (
    <div>
      <label htmlFor="dateFilter">{"Date Filter "}</label>
      <input type="date" onChange={(event) => onSelect(event.target.value)} />
    </div>
  );
};

export default DateFilter;
