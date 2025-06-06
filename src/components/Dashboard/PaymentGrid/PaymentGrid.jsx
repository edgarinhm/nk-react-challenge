import { useEffect, useState } from "react";
import { GetAllPayments } from "../../../common/services/payments-services";

import style from "./PaymentGrid.module.css";
import DateFilter from "./DateFilter";
import currency from "currency.js";
import dayjs from "dayjs";

function PaymentGrid() {
  const [payments, setPayments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateFilter = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const loadPaymentsData = async () => {
      setLoading(true);
      try {
        const data = await GetAllPayments();
        console.log("data", data);
        setPayments(data);
      } catch (error) {
        error && setErrorMessage("Please retry");
      }
      setLoading(false);
    };
    loadPaymentsData();
  }, []);

  return (
    <div className={style.container}>
      {errorMessage && <span>{errorMessage}</span>}
      <div className={style.filters}>
        <DateFilter selectedDate={selectedDate} onSelect={handleDateFilter} />
      </div>
      <table className={style.grid}>
        <thead>
          <th>Transaction ID</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </thead>
        <tbody>
          {payments.map((payment) => {
            return (
              <tr key={payment.transactionId} className={style.row}>
                <td> {payment.transactionId}</td>
                <td>{dayjs(payment.date).format("YYYY-MM-DD")}</td>
                <td>{payment.description}</td>
                <td>{currency(payment.amount).format()}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && <div>{"...Loading"}</div>}
    </div>
  );
}

export default PaymentGrid;
