import { PaymentMethod } from "./PaymentMethod";

export type PaymentInfo = {
    default_currency: string,
    currencies: Record<string, Array<PaymentMethod>>,
}