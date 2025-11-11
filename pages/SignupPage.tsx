import React, { useState, useEffect } from 'react';
import { UserIcon, EmailIcon, LockIcon } from '../components/IconComponents';
import { auth, database } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { AppUser } from '../types';


interface SignupPageProps {
  onSwitchToLogin: () => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ onSwitchToLogin }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [referrerId, setReferrerId] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const refId = params.get('ref');
    if (refId) {
      setReferrerId(refId);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    if (!fullName || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update Firebase auth profile with display name
      await updateProfile(user, { displayName: fullName });

      // Prepare user data
      const userData: Omit<AppUser, 'balance'> & { balance: number; referredBy?: string } = {
        fullName: fullName,
        email: email,
        uid: user.uid,
        createdAt: new Date().toISOString(),
        role: 'user', // Assign default role
        balance: 0, // Initialize balance
      };

      // Add referrer ID if it exists
      if (referrerId) {
        userData.referredBy = referrerId;
      }
      
      // Save user info to Realtime Database
      await set(ref(database, 'users/' + user.uid), userData);

      await signOut(auth); // Sign out user immediately
      onSwitchToLogin(); // Redirect to login page

    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('This email address is already in use.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError('An error occurred during sign up. Please try again.');
      }
      console.error("Signup Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">Create Account</h2>
          <p className="mt-2 text-gray-600">Join our SMM Panel today!</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <EmailIcon className="w-5 h-5 text-gray-400" />
            </span>
            <input
              type="email"
              placeholder="Email address"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              placeholder="Confirm Password"
              className="w-full py-3 pl-10 pr-4 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>
        </form>
        <div className="text-center text-gray-600">
          <p>
            Already have an account?{' '}
            <button onClick={onSwitchToLogin} className="font-medium text-green-600 hover:underline">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;