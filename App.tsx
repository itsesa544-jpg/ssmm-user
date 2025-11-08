import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NewOrder from './components/Dashboard'; // Renamed Dashboard to NewOrder conceptually
import AddFunds from './components/AddFunds';
import PaymentHistory from './components/PaymentHistory';
import { Payment } from './types';
import { INITIAL_PAYMENT_HISTORY } from './constants';

interface AppProps {
  onLogout: () => void;
}

const App: React.FC<AppProps> = ({ onLogout }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('New Order');
  const [paymentHistory] = useState<Payment[]>(INITIAL_PAYMENT_HISTORY);

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={onLogout}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            {activePage === 'New Order' && <NewOrder />}
            {activePage === 'Add Funds' && <AddFunds />}
            {activePage === 'Payment History' && <PaymentHistory history={paymentHistory} />}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;