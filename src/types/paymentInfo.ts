import { PaymentMethod } from "./PaymentMethod";

export type PaymentInfo = {
    default_currency: string,
    currencies: Map<string, Array<PaymentMethod>>,
};