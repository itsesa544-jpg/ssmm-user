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

// Renamed from Payment to better reflect its purpose
export interface FundRequest {
  id: string; // Firebase key
  uid: string;
  userEmail: string;
  date: string; // ISO String
  amount: number;
  currency: 'BDT' | 'USD';
  method: 'bKash' | 'Nagad' | 'Binance' | 'Bybit';
  transactionId: string;
  status: PaymentStatus;
}

// New type for orders
export type OrderStatus = 'Pending' | 'In Progress' | 'Completed' | 'Cancelled' | 'Partial';

export interface Order {
  id: string; // Firebase key
  uid: string;
  userEmail: string;
  serviceId: number;
  serviceName: string;
  link: string;
  quantity: number;
  charge: number;
  createdAt: string; // ISO String
  status: OrderStatus;
}


// Added for Admin Panel functionality
export interface AppUser {
  uid: string;
  fullName: string;
  email: string;
  createdAt: string;
  role: 'user' | 'admin';
  balance?: number;
}

export interface LoginRecord {
  id: string;
  uid: string;
  email: string;
  timestamp: number;
}