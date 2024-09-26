'use client';
import { useState } from 'react';
import { FiPlus, FiX } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqData: FAQItem[] = [
    {
      question: "Where can I watch?",
      answer: "Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla.",
    },
    {
      question: "Tempus magna risus interdum ultricies sed urna?",
      answer: "Orci dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor.",
    },
    {
      question: "Augue in nibh urna volutpat mattis?",
      answer: "Elit adipiscing proin quis est consectetur felis ultricies nisi quis malesuada.",
    },
    {
      question: "Eu egestas sed sed posuere ultrices?",
      answer: "Potenti natoque amet amet tincidunt ultricies et. Nam rhoncus sit nullam.",
    },
    {
      question: "Elementum facilisi aliquam nisi orci vulputate?",
      answer: "Nam condimentum nunc sit amet laoreet consectetur.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h1 className="text-3xl text-center font-bold text-pink-500">FAQs</h1>
      <div className="space-y-4 mt-10">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <div
              className="flex justify-between items-center cursor-pointer py-4"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-lg font-medium">{faq.question}</h2>
              {openIndex === index ? (
                <FiX size={20} className="text-gray-500" />
              ) : (
                <FiPlus size={20} className="text-gray-500" />
              )}
            </div>

            {openIndex === index && (
              <div className="pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
