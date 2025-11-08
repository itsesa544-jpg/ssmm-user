import React, { useState } from 'react';
import { EmailIcon, LockIcon, CheckIcon } from '../components/IconComponents';
import { auth, database } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref, push, set, serverTimestamp } from 'firebase/database';

interface LoginPageProps {
  onSwitchToSignup: () => void;
  signupSuccess: boolean;
  clearSignupSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onSwitchToSignup, signupSuccess, clearSignupSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (signupSuccess) {
      clearSignupSuccess();
    }
    setter(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (signupSuccess) {
      clearSignupSuccess();
    }
    setError('');
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Log login event to database
      const user = userCredential.user;
      const loginRef = ref(database, 'logins');
      const newLoginRef = push(loginRef);
      await set(newLoginRef, {
        uid: user.uid,
        email: user.email,
        timestamp: serverTimestamp()
      });
      // Auth state listener in AppContainer will handle redirect
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
         setError('Invalid email or password. Please try again.');
      } else {
         setError('An error occurred during login. Please try again.');
      }
      console.error("Login Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">Login</h2>
          <p className="mt-2 text-gray-600">Please sign in to continue</p>
        </div>

        {signupSuccess && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4" role="alert">
            <div className="flex">
              <div className="py-1"><CheckIcon className="w-6 h-6 mr-4"/></div>
              <div>
                <p className="font-bold">Success!</p>
                <p className="text-sm">Your account has been created. Please log in.</p>
              </div>
            </div>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <EmailIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="email"
              placeholder="Email address"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={handleInputChange(setEmail)}
              required
              disabled={loading}
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={handleInputChange(setPassword)}
              required
              disabled={loading}
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center -mt-2">{error}</p>}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 font-bold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105 disabled:bg-green-400 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
         <div className="text-center text-gray-600">
          <p>
            Don't have an account?{' '}
            <button onClick={onSwitchToSignup} className="font-medium text-green-600 hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;