import { FiMessageSquare } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Help",
};
export default function HelpContact() {
    return (
      <div className="flex flex-col items-center py-12 h-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Help & Contact</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[80px]">
  
          <div className="flex flex-col items-center">
            <div className="bg-red-100 p-4 rounded-full">
            <IoCallOutline size={46} />
            </div>
            <p className="mt-4 text-lg font-semibold">Call Us At</p>
            <p className="text-red-600 text-xs">1800-266-0123</p>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="bg-red-100 p-4 rounded-full">
             <FiMessageSquare size={46} />
            </div>
            <p className="mt-4 text-lg font-semibold">Write to Us</p>
            <Link href='mailto:care@trulyroselle.com' className="text-red-600 text-xs">care@trulyroselle.com</Link>
          </div>
        </div>
  
        <p className="mt-8 text-gray-600 max-w-lg text-center">
          The toll-free number is only applicable for domestic orders within India. For international customers or deliveries, please reach out through WhatsApp, live chat, or email.
        </p>
      </div>
    );
  }
  