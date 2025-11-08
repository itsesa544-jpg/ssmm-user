// Fix: Define and export interfaces for Category and Service.
export interface Category {
  name: string;
}

export interface Service {
  id: number;
  name: string;
  details: string[];
  rate: number;
  min: number;
  max: number;
  category: string;
  refill?: boolean;
}

export type PaymentStatus = 'Pending' | 'Completed' | 'Cancelled';

export interface Payment {
  id: string;
  date: string;
  amount: number;
  currency: 'BDT' | 'USD';
  method: 'bKash' | 'Nagad' | 'Binance' | 'Bybit';
  transactionId: string;
  status: PaymentStatus;
}
