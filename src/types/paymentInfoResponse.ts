import type { PaymentInfo } from './PaymentInfo';

export type PaymentInfoResponse = {
    success: boolean,
    data: PaymentInfo,
};