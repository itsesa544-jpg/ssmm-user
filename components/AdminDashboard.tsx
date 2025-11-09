import React, { useState } from 'react';
import AdminOverview from './AdminOverview';
import AdminFundRequests from './AdminFundRequests';
import AllUsers from './AllUsers';
import AdminAllOrders from './AdminAllOrders'; // Import the new component
import AdminPanel from './AdminPanel'; // Login history
import { 
  HistoryIcon,
  UsersGroupIcon, 
  DollarIcon, 
  ListIcon,
  LogoutIcon,
  ArrowLeftIcon,
  ShoppingCartIcon,
  ChevronRightIcon // Import Chevron icon for accordion
} from './IconComponents';

// --- AdminSidebar component is defined inside AdminDashboard.tsx to avoid creating new files ---

type AdminPage = 'Overview' | 'All Orders' | 'Fund Requests' | 'All Users' | 'Login History';

interface AdminSidebarProps {
  activePage: string;
  setActivePage: (page: AdminPage) => void;
  onLogout: () => void;
  onSwitchToUser: () => void;
}

const NavLink: React.FC<{icon: React.ReactNode, text: string, active: boolean, onClick: () => void}> = ({ icon, text, active, onClick }) => (
    <button onClick={onClick} className={`w-full flex items-center p-3 my-1 rounded-lg transition-colors duration-200 text-left ${
        active 
        ? 'bg-gray-700 text-white' 
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}>
        {icon}
        <span className="mx-4 font-medium">{text}</span>
    </button>
);

const SubNavLink: React.FC<{icon: React.ReactNode, text: string, active: boolean, onClick: () => void}> = ({ icon, text, active, onClick }) => (
    <button onClick={onClick} className={`w-full flex items-center py-2 px-3 rounded-lg transition-colors duration-200 text-left ${
        active
        ? 'bg-gray-700 text-white'
        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
    }`}>
        {icon}
        <span className="mx-3 font-medium text-sm">{text}</span>
    </button>
);


const AdminSidebar: React.FC<AdminSidebarProps> = ({ activePage, setActivePage, onLogout, onSwitchToUser }) => {
  const [isOrdersOpen, setOrdersOpen] = useState(false);
  const [isPaymentsOpen, setPaymentsOpen] = useState(false);
  const [isUsersOpen, setUsersOpen] = useState(false);

  return (
    <div className="bg-gray-900 text-white w-64 p-4 flex flex-col h-screen fixed">
      <h2 className="text-2xl font-bold text-white mb-6">Admin Panel</h2>
      <nav className="flex flex-col justify-between flex-grow">
        <div>
          <button onClick={onSwitchToUser} className="w-full flex items-center p-3 my-1 rounded-lg transition-colors duration-200 text-left text-green-400 hover:bg-green-900">
            <ArrowLeftIcon className="w-6 h-6"/>
            <span className="mx-4 font-medium">Back to User Panel</span>
          </button>
          <div className="border-t border-gray-700 my-4"></div>
          
          <NavLink icon={<ListIcon className="w-6 h-6"/>} text="Overview" active={activePage === 'Overview'} onClick={() => setActivePage('Overview')} />
          
          {/* Orders Accordion */}
          <div className="my-1">
            <button onClick={() => setOrdersOpen(!isOrdersOpen)} className="w-full flex items-center justify-between p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200 focus:outline-none">
                <div className="flex items-center">
                    <ShoppingCartIcon className="w-6 h-6"/>
                    <span className="mx-4 font-medium">Orders</span>
                </div>
                <ChevronRightIcon className={`w-5 h-5 transition-transform duration-200 ${isOrdersOpen ? 'rotate-90' : ''}`} />
            </button>
            {isOrdersOpen && (
                <div className="pl-6 mt-1 space-y-1">
                    <SubNavLink icon={<ShoppingCartIcon className="w-5 h-5"/>} text="All Orders" active={activePage === 'All Orders'} onClick={() => setActivePage('All Orders')} />
                </div>
            )}
          </div>
          
          {/* Payments Accordion */}
          <div className="my-1">
             <button onClick={() => setPaymentsOpen(!isPaymentsOpen)} className="w-full flex items-center justify-between p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200 focus:outline-none">
                <div className="flex items-center">
                    <DollarIcon className="w-6 h-6"/>
                    <span className="mx-4 font-medium">Payments</span>
                </div>
                <ChevronRightIcon className={`w-5 h-5 transition-transform duration-200 ${isPaymentsOpen ? 'rotate-90' : ''}`} />
            </button>
            {isPaymentsOpen && (
                <div className="pl-6 mt-1 space-y-1">
                    <SubNavLink icon={<DollarIcon className="w-5 h-5"/>} text="Fund Requests" active={activePage === 'Fund Requests'} onClick={() => setActivePage('Fund Requests')} />
                </div>
            )}
          </div>

          {/* Users Accordion */}
          <div className="my-1">
            <button onClick={() => setUsersOpen(!isUsersOpen)} className="w-full flex items-center justify-between p-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors duration-200 focus:outline-none">
                <div className="flex items-center">
                    <UsersGroupIcon className="w-6 h-6"/>
                    <span className="mx-4 font-medium">Users</span>
                </div>
                <ChevronRightIcon className={`w-5 h-5 transition-transform duration-200 ${isUsersOpen ? 'rotate-90' : ''}`} />
            </button>
            {isUsersOpen && (
                <div className="pl-6 mt-1 space-y-1">
                    <SubNavLink icon={<UsersGroupIcon className="w-5 h-5"/>} text="All Users" active={activePage === 'All Users'} onClick={() => setActivePage('All Users')} />
                    <SubNavLink icon={<HistoryIcon className="w-5 h-5"/>} text="Login History" active={activePage === 'Login History'} onClick={() => setActivePage('Login History')} />
                </div>
            )}
          </div>
        </div>
        <div>
          <button onClick={onLogout} className="w-full flex items-center p-3 my-1 rounded-lg transition-colors duration-200 text-left text-gray-400 hover:bg-red-800 hover:text-white">
            <LogoutIcon className="w-6 h-6"/>
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </nav>
    </div>
  );
};
// --- End of embedded AdminSidebar component ---


interface AdminLayoutProps {
  onLogout: () => void;
  onSwitchToUser: () => void;
}

// The file is AdminDashboard.tsx but it now acts as a full-page layout
const AdminLayout: React.FC<AdminLayoutProps> = ({ onLogout, onSwitchToUser }) => {
  const [activePage, setActivePage] = useState<AdminPage>('Overview');

  const renderContent = () => {
    switch (activePage) {
      case 'Overview': return <AdminOverview />;
      case 'All Orders': return <AdminAllOrders />;
      case 'Fund Requests': return <AdminFundRequests />;
      case 'All Users': return <AllUsers />;
      case 'Login History': return <AdminPanel />;
      default: return <AdminOverview />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onLogout={onLogout}
        onSwitchToUser={onSwitchToUser}
      />
      <div className="flex-1 ml-64">
        <main className="p-4 sm:p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{activePage}</h1>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;