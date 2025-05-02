import { useEffect, useState } from "react";
import { GetAllPayments } from "../../../common/services/payments-services";

import style from "./PaymentGrid.module.css";
import DateFilter from "./DateFilter";

function PaymentGrid() {
  const [payments, setPayments] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDateFilter = () => {};

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
    <div>
      {errorMessage && <span>{errorMessage}</span>}
      <DateFilter onSelect={handleDateFilter} />
      {payments.map((payment) => {
        return (
          <div key={payment.transactionId} className={style.row}>
            <div>Transaction ID: {payment.transactionId}</div>
            <div>Date: {payment.date}</div>
            <div>Description: {payment.description}</div>
            <div>Amount: {payment.amount}</div>
          </div>
        );
      })}
      {loading && <div>{"...Loading"}</div>}
    </div>
  );
}

export default PaymentGrid;
