import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { CopyIcon, CheckIcon, FacebookIcon, WhatsAppIcon, TelegramIcon, ShareIcon, GiftIcon } from './IconComponents';

const ShareSystem: React.FC = () => {
  const [referralLink, setReferralLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    // Check for Web Share API support on component mount
    if (navigator.share) {
      setCanShare(true);
    }
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      // Construct the base URL from the current window location
      const baseUrl = `${window.location.protocol}//${window.location.host}`;
      setReferralLink(`${baseUrl}/?ref=${user.uid}`);
    }
  }, []);

  if (!referralLink) {
    return null; // Don't render if the user is not logged in or link isn't generated yet
  }

  const shareText = "Join this awesome SMM Panel and get started with your social media marketing!";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };
  
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Share & Earn on SMM Panel',
          text: shareText,
          url: referralLink,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // This is a fallback, but the button should ideally not be rendered if navigator.share is not available.
      alert('Web Share API is not supported in your browser.');
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Share & Earn</h2>
      <p className="text-gray-600 mb-4">
        Share your referral link with friends. When they sign up and add funds, you'll receive a bonus!
      </p>
      
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4">
        <input
          type="text"
          value={referralLink}
          readOnly
          className="w-full flex-grow bg-gray-100 border border-gray-300 text-gray-700 text-sm rounded-lg focus:outline-none p-3 font-mono"
        />
        <button
          onClick={handleCopy}
          className="w-full sm:w-auto px-4 py-3 bg-gray-500 text-white text-sm font-medium rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 flex items-center justify-center transition-all duration-200"
        >
          {copied ? (
            <>
              <CheckIcon className="h-5 w-5 mr-2" />
              Copied!
            </>
          ) : (
            <>
              <CopyIcon className="h-5 w-5 mr-2" />
              Copy Link
            </>
          )}
        </button>
      </div>
      
      {/* Conditional rendering for share options */}
      {canShare ? (
        <button
          onClick={handleNativeShare}
          className="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 transition-transform transform hover:scale-105 flex items-center justify-center"
        >
          <ShareIcon className="w-5 h-5 mr-3" />
          Share Referral Link
        </button>
      ) : (
        <div className="mt-4 flex items-center justify-center sm:justify-start space-x-3">
          <p className="text-sm font-medium text-gray-600">Share on:</p>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110" aria-label="Share on Facebook">
            <FacebookIcon className="w-8 h-8"/>
          </a>
           <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + referralLink)}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 transition-transform transform hover:scale-110" aria-label="Share on WhatsApp">
            <WhatsAppIcon className="w-8 h-8"/>
          </a>
           <a href={`https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-transform transform hover:scale-110" aria-label="Share on Telegram">
            <TelegramIcon className="w-8 h-8"/>
          </a>
        </div>
      )}

      <div className="mt-6 p-4 bg-green-50 border-2 border-dashed border-green-400 rounded-lg text-center flex flex-col items-center gap-2">
          <GiftIcon className="w-8 h-8 text-green-600" />
          <p className="text-green-800 font-medium text-sm">
              আপনার বন্ধুকে আপনার ব্যক্তিগত শেয়ার লিংক/কোড দিয়ে রেজিস্টার করান; রেজিস্ট্রেশন সফল হলে আপনাকে ৳২ এবং রেফার করা বন্ধুকে ৳2 হবে — তৎক্ষণাত ওয়ালেটে যোগ হবে।
          </p>
      </div>
    </div>
  );
};

export default ShareSystem;