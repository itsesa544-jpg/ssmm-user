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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);

// Used in Dashboard
export const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
);

// Used in AddFunds
export const BikashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24.16 33.28l4.49-16.14h-1.93l-1.39 6.27c-.24 1.1-.4 1.9-.4 1.9s-.14-.79-.37-1.89l-1.4-6.28h-1.92l4.5 16.14z" fill="#D82A7D" /><path d="M23.97 4.13c-11.02 0-20 8.98-20 20s8.98 20 20 20 20-8.98 20-20-8.98-20-20-20zm7.1 29.53h-1.96l.33-1.18c.24-.87.4-1.57.4-1.57s-.34.34-1.29 1.13c-.95.79-1.94 1.25-2.97 1.25-1.14 0-2.31-.59-2.31-1.86 0-1.14.73-1.63 2.14-2.28 1.41-.65 2.19-1.16 2.19-2.09 0-.96-.78-1.55-2-1.55-1.12 0-2.02.52-2.85 1.3l-.9-1.39c1.1-.96 2.51-1.57 3.93-1.57 2.22 0 3.73 1.25 3.73 3.32 0 1.94-1.14 2.76-2.7 3.5-1.29.6-1.78.97-1.78 1.57 0 .4.24.6.65.6.51 0 1.27-.47 2.3-1.47l1.37 1.34zm-14.8-5.32c-.34 1.2-.6 2.12-.6 2.12s-.22-.9-.51-2.12l-1.35-4.85h-1.73l3.41 12.18h1.96l3.4-12.18h-1.73l-1.45 4.85z" fill="#D82A7D" /></svg>
);

export const NagadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" fill="#F59E0B"/><path d="M128,48a80,80,0,1,0,80,80A80.09,80.09,0,0,0,128,48Zm-22,56.89,32,12.8-19.2,32-32-12.8Z" fill="#EF4444"/><path d="M136.21,114.3,103,100.89l-8.21,20.53,32,12.8,11.41-28.52Z" fill="#DC2626"/></svg>
);

export const BinanceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#FCD34D"/><path d="M12 14.828L14.828 12L12 9.172L9.172 12L12 14.828Z" fill="#111827"/><path d="M9.878 12L12 14.122L14.122 12L12 9.878L9.878 12Z" fill="#FBBF24"/><path d="M16.95 12L12 16.95L7.05 12L12 7.05L16.95 12Z" fill="#FBBF24"/><path d="M19.07 12L12 19.07L4.929 12L12 4.93L19.07 12Z" fill="#FBBF24" fillOpacity="0.5"/></svg>
);

export const BybitIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="#FBBF24"/><path d="M15.41 12.5H12.91V15H11.09V12.5H8.59V11.03L11.09 7H12.91L15.41 11.03V12.5ZM12.91 11.03H11.09L10.34 12.5H13.66L12.91 11.03Z" fill="#111827"/></svg>
);

export const QrCodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><line x1="14" y1="14" x2="14.01" y2="14"></line><line x1="17" y1="14" x2="17.01" y2="14"></line><line x1="14" y1="17" x2="14.01" y2="17"></line><line x1="17" y1="17" x2="17.01" y2="17"></line><line x1="20" y1="14" x2="20.01" y2="14"></line><line x1="20" y1="17" x2="20.01" y2="17"></line><line x1="14" y1="20" x2="14.01" y2="20"></line><line x1="17" y1="20" x2="17.01" y2="20"></line><line x1="20" y1="20" x2="20.01" y2="20"></line></svg>
);

export const CopyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
);

export const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export const PasteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
);

// Used in Login/Signup
export const UserIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
);

export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

export const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);

// Used in Sidebar
export const LogoutIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
);