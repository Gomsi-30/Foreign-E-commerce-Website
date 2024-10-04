'use client';

import { useState, useEffect } from 'react';
import ordersData from './orders.json';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Orders",
};
interface Order {
  product: string;
  orderId: number;
  paymentStatus: string;
  amount: number;
  address: string;
  orderDate: string; 
  status: string;
}

const OrdersPage: React.FC = () => {

  const [filter, setFilter] = useState<string>('7days');
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(ordersData as Order[]);

  useEffect(() => {
    const now = new Date();
    let filtered: Order[] = ordersData as Order[];

    if (filter === '7days') {
      const weekAgo = new Date(now);
      weekAgo.setDate(now.getDate() - 7);
      filtered = ordersData.filter((order: Order) => new Date(order.orderDate) >= weekAgo);
    } else if (filter === '1month') {
      const monthAgo = new Date(now);
      monthAgo.setMonth(now.getMonth() - 1);
      filtered = ordersData.filter((order: Order) => new Date(order.orderDate) >= monthAgo);
    }

    setFilteredOrders(filtered);
  }, [filter]);


    const formatDate = (dateString: string): string => {
      const date = new Date(dateString);
      return date.toISOString().split('T')[0]; 
    };


  return (
    <div className="container">
      {/* Title */}
      <div className="flex justify-between items-center mt-9">
        <h1 className="text-4xl font-bold text-gray-800">My Orders</h1>

        {/* Filter Dropdown */}
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-2 focus:ring-indigo-500"
        >
          <option value="7days">Last 7 Days</option>
          <option value="1month">Last 1 Month</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead>
            <tr className="bg-indigo-50">
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Product</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Order ID</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Payment Status</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Amount</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Address</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Order Date</th>
              <th className="py-3 px-6 text-left text-sm font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order: Order, index: number) => (
              <tr key={index} className="hover:bg-gray-100 transition-all duration-200">
                <td className="py-4 px-6 border-b text-gray-800">{order.product}</td>
                <td className="py-4 px-6 border-b text-gray-800">{order.orderId}</td>
                <td className="py-4 px-6 border-b text-gray-800">{order.paymentStatus}</td>
                <td className="py-4 px-6 border-b text-gray-800">${order.amount}</td>
                <td className="py-4 px-6 border-b text-gray-800">{order.address}</td>
                <td className="py-4 px-6 border-b text-gray-800">{formatDate(order.orderDate)}</td>
                <td className="py-4 px-6 border-b text-gray-800">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
