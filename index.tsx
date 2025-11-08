import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

const AppContainer: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsLoginView(true); // Reset to login view on logout
  };

  const handleSignup = () => {
    // In a real app, this would likely log the user in automatically
    setIsAuthenticated(true); 
  };

  if (!isAuthenticated) {
    if (isLoginView) {
      return <LoginPage onLogin={handleLogin} onSwitchToSignup={() => setIsLoginView(false)} />;
    }
    return <SignupPage onSignup={handleSignup} onSwitchToLogin={() => setIsLoginView(true)} />;
  }

  return <App onLogout={handleLogout} />;
};


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>
);