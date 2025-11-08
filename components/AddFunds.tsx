import React, { useState } from 'react';
import { BikashIcon, NagadIcon, BinanceIcon, BybitIcon, QrCodeIcon, CopyIcon, CheckIcon, PasteIcon } from './IconComponents';

type PaymentMethod = 'bKash' | 'Nagad' | 'Binance' | 'Bybit';

interface PaymentCardProps {
  method: PaymentMethod;
  icon: React.ReactNode;
  account: string;
  name: string;
  type: 'Personal' | 'Agent' | 'Merchant' | 'TRC20 Address';
  note?: string;
}

const PaymentCard: React.FC<PaymentCardProps> = ({ method, icon, account, name, type, note }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border rounded-lg p-4 flex flex-col items-center text-center bg-gray-50">
      <div className="w-12 h-12 mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800">{method}</h3>
      <p className="text-sm text-gray-500 mb-3">{name} ({type})</p>
      <div className="w-32 h-32 bg-gray-200 my-2 flex items-center justify-center">
        <QrCodeIcon className="w-20 h-20 text-gray-400" />
      </div>
      <div className="relative w-full my-2">
        <input type="text" value={account} readOnly className="w-full bg-white border text-center rounded-md p-2 pr-10 text-sm font-mono"/>
        <button onClick={handleCopy} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-green-600">
          {copied ? <CheckIcon className="w-5 h-5 text-green-600" /> : <CopyIcon className="w-5 h-5" />}
        </button>
      </div>
      {note && <p className="text-xs text-red-600 mt-2">{note}</p>}
    </div>
  );
};

const AddFunds: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Methods</h2>
        <p className="text-gray-600 mb-6">Send money to any of the following accounts and submit the transaction details below.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PaymentCard method="bKash" icon={<BikashIcon />} account="01700000000" name="John Doe" type="Personal" note="Send money is not available."/>
          <PaymentCard method="Nagad" icon={<NagadIcon />} account="01800000000" name="Jane Smith" type="Personal" note="Only Cash-in is allowed."/>
          <PaymentCard method="Binance" icon={<BinanceIcon />} account="0x123...890" name="USDT" type="TRC20 Address" />
          <PaymentCard method="Bybit" icon={<BybitIcon />} account="bybit_user_123" name="USDT" type="TRC20 Address" />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit Payment Details</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Amount (BDT)</label>
            <input 
              type="number" 
              id="amount" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3" 
              placeholder="e.g., 500"
              required
            />
          </div>
          <div>
            <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-2">Transaction ID</label>
             <div className="relative">
                <input 
                  type="text" 
                  id="transactionId" 
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3 pr-12" 
                  placeholder="Enter the TrxID from the payment message"
                  required
                />
                 <button type="button" onClick={async () => setTransactionId(await navigator.clipboard.readText())} className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-green-600">
                    <PasteIcon className="w-5 h-5"/>
                </button>
             </div>
          </div>
           <div>
            <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 transition-transform transform hover:scale-105">
                Submit Payment
            </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AddFunds;