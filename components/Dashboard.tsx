import React, { useState, useMemo, useEffect } from 'react';
import { CATEGORIES, SERVICES } from '../constants';
import { Service } from '../types';
import { ChevronDownIcon } from './IconComponents';

const NewOrderForm: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]?.name || '');
  const [servicesForCategory, setServicesForCategory] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [link, setLink] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [charge, setCharge] = useState(0.00);

  useEffect(() => {
    const filteredServices = SERVICES.filter(s => s.category === selectedCategory);
    setServicesForCategory(filteredServices);
    setSelectedService(null);
    setQuantity(0);
    setCharge(0);
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedService) {
        const initialQuantity = selectedService.min;
        setQuantity(initialQuantity);
        const newCharge = (selectedService.rate / 1000) * initialQuantity;
        setCharge(newCharge);
    }
  }, [selectedService]);


  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const service = servicesForCategory.find(s => s.id === parseInt(e.target.value)) || null;
    setSelectedService(service);
  };
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10) || 0;
    setQuantity(newQuantity);
    if (selectedService) {
        const newCharge = (selectedService.rate / 1000) * newQuantity;
        setCharge(newCharge);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (!selectedService || !link || !quantity) {
          alert('Please fill all the required fields.');
          return;
      }
      if (quantity < selectedService.min || quantity > selectedService.max) {
          alert(`Quantity must be between ${selectedService.min} and ${selectedService.max}.`);
          return;
      }
      alert(`Order placed successfully!\nService: ${selectedService.name}\nLink: ${link}\nQuantity: ${quantity}\nCharge: ৳${charge.toFixed(4)}`);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">New Order</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <div className="relative">
            <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="w-full appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3">
              {CATEGORIES.map(cat => <option key={cat.name} value={cat.name}>{cat.name}</option>)}
            </select>
            <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service</label>
          <div className="relative">
            <select id="service" value={selectedService?.id || ''} onChange={handleServiceChange} className="w-full appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3" disabled={!selectedCategory}>
              <option value="">Select a service</option>
              {servicesForCategory.map(service => (
                <option key={service.id} value={service.id}>
                  {service.name} - ৳{service.rate}/1000
                </option>
              ))}
            </select>
            <ChevronDownIcon className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"/>
          </div>
        </div>
        
        {selectedService && (
             <div className="p-4 bg-gray-50 rounded-lg border text-sm text-gray-600">
                <h4 className="font-semibold text-gray-800 mb-2">Service Details</h4>
                <p>{selectedService.details.join(' | ')}</p>
                <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                    <p><span className="font-medium">Min:</span> {selectedService.min}</p>
                    <p><span className="font-medium">Max:</span> {selectedService.max}</p>
                    <p><span className="font-medium">Rate:</span> ৳{selectedService.rate}/1k</p>
                    {selectedService.refill && <span className="text-green-600 font-semibold">Refill Available</span>}
                </div>
            </div>
        )}

        <div>
          <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">Link</label>
          <input type="text" id="link" value={link} onChange={e => setLink(e.target.value)} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3" placeholder="e.g., https://www.tiktok.com/@user/video/12345"/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <input type="number" id="quantity" value={quantity} onChange={handleQuantityChange} min={selectedService?.min} max={selectedService?.max} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3" placeholder="Enter quantity" />
            </div>
            <div>
                 <label htmlFor="charge" className="block text-sm font-medium text-gray-700 mb-2">Charge</label>
                 <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">৳</span>
                    <input type="text" id="charge" value={charge.toFixed(4)} readOnly className="w-full bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block p-3 pl-7 font-bold" />
                 </div>
            </div>
        </div>

        <div>
          <button type="submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 transition-transform transform hover:scale-105">
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewOrderForm;