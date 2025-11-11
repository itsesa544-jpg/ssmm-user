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
import UserStats from './components/UserStats';
import ShareSystem from './components/ShareSystem';
import { WhatsAppIcon, CopyIcon, CheckIcon } from './components/IconComponents';

// --- Footer Component ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-center py-3 border-t text-sm text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} Share It System. All Rights Reserved.
      </p>
    </footer>
  );
};

// --- WhatsApp Contact Component ---
const WHATSAPP_NUMBER = '01792157184';
const WHATSAPP_LINK = `https://wa.me/8801792157184`;

const WhatsAppContact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WHATSAPP_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <WhatsAppIcon className="h-10 w-10 mr-4 text-green-600" />
          <div>
            <h3 className="font-bold text-gray-800">Need Help? Contact us on WhatsApp</h3>
            <p className="text-gray-600 text-lg font-mono tracking-wider">{WHATSAPP_NUMBER}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105">
                Chat Now
            </a>
            <button onClick={handleCopy} className="px-4 py-2 bg-gray-200 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 flex items-center">
                {copied ? (
                    <>
                        <CheckIcon className="h-5 w-5 mr-2 text-green-600" />
                        Copied
                    </>
                ) : (
                    <>
                        <CopyIcon className="h-5 w-5 mr-2" />
                        Copy
                    </>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};
// --- End WhatsApp Contact Component ---

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
        return (
          <div className="space-y-6">
            <WhatsAppContact />
            <UserStats />
            <NewOrder />
            <ShareSystem />
          </div>
        );
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
        return (
          <div className="space-y-6">
            <WhatsAppContact />
            <UserStats />
            <NewOrder />
            <ShareSystem />
          </div>
        );
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
        <Footer />
      </div>
    </div>
  );
};

export default App;