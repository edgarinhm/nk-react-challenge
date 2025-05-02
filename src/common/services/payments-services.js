import { PaymentData } from "../data/payments-data";

export const GetAllPayments = () => {
    return new Promise((resolve, reject) => {
        resolve(
            PaymentData
        );
        reject('Error');
    })
}