import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import NewOrder from './components/Dashboard';
import AddFunds from './components/AddFunds';
import PaymentHistory from './components/PaymentHistory';
import OrderHistory from './components/OrderHistory';
import AdminDashboard from './components/AdminDashboard';
import { auth, database } from './firebase';
import { ref, onValue } from 'firebase/database';

interface AppProps {
  onLogout: () => void;
}

const App: React.FC<AppProps> = ({ onLogout }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('New Order');
  const [isAdmin, setIsAdmin] = useState(false);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const userRef = ref(database, `users/${user.uid}`);
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setIsAdmin(data?.role === 'admin');
      setBalance(data?.balance || 0);
    });

    return () => unsubscribe();
  }, []);

  // If user wants to see the admin dashboard, render the full-page AdminLayout
  if (activePage === 'Admin Dashboard') {
    return <AdminDashboard onSwitchToUser={() => setActivePage('New Order')} onLogout={onLogout} />;
  }


  const renderContent = () => {
    switch(activePage) {
      case 'New Order':
        return <NewOrder />;
      case 'Add Funds':
        return <AddFunds />;
      case 'Payment History':
        return <PaymentHistory />;
      case 'All Orders':
        return <OrderHistory pageTitle="All Orders" filterStatus="All" />;
      case 'Pending Orders':
        return <OrderHistory pageTitle="Pending Orders" filterStatus="Pending" />;
      case 'Completed Orders':
        return <OrderHistory pageTitle="Completed Orders" filterStatus="Completed" />;
      
      // Admin Pages - This case now only serves as an access denied message for non-admins
      // who might somehow navigate here. Admins are handled by the layout switch above.
      case 'Admin Dashboard':
        return (
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-red-600">Access Denied</h2>
                <p className="text-gray-600 mt-2">You do not have permission to view this page.</p>
                <button
                    onClick={() => setActivePage('New Order')}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                    Go to Dashboard
                </button>
            </div>
        );
      
      default:
        return <NewOrder />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setSidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
        onLogout={onLogout}
        isAdmin={isAdmin}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} balance={balance} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;