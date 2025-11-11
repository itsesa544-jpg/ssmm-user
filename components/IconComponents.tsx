import React from 'react';

// Used in Header
export const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Used in Header
export const DeviceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
    </svg>
);

// Used in Sidebar
export const AddOrderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="12" y1="18" x2="12" y2="12"></line>
        <line x1="9" y1="15" x2="15" y2="15"></line>
    </svg>
);

// Used in Sidebar
export const OrdersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
        <polyline points="13 2 13 9 20 9"></polyline>
    </svg>
);

// Used in Sidebar
export const AddFundsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <line x1="12" y1="1" x2="12" y2="23"></line>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
);

// Used in Sidebar
export const HistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 4v6h6"></path>
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>
    </svg>
);

// Used in Sidebar and Dashboard
export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

// Used in Sidebar
export const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

// Used in Sidebar
export const PendingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);

// Used in Sidebar
export const CompletedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11.08V12a10 10 0 