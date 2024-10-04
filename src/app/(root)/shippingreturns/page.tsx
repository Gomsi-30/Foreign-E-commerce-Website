import { Metadata } from 'next';
import Link from 'next/link'
export const metadata: Metadata = {
  title: "Shipping & Returns",
};

export default function ShippingReturns() {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Shipping & Returns</h1>

  
      <p className="mt-6 text-gray-700 font-medium">
       Shipping :
      </p>
      <ul className="list-disc ml-8 mt-3 space-y-4 text-gray-600">
        <li>
        Shipping Time: Orders are usually processed and shipped within 48 hours. Please note personalised items will take longer to process. If your order has both personalised and non-personalised items, the order will be split, and the non-personalised items will be delivered beforehand.
        </li>
        <li>
        Shipping Charges: We offer free shipping on all orders over Rs. 449. Please note that we do not offer free shipping on international orders and returns.
        </li>
        <li>
        Tracking: You will receive tracking details over WhatsApp, email and SMS, once the order is shipped.
        </li>
        <li>
        In case you&apos;re ordering other items along with personalised or Gold jewellery, your order might arrive in parts
        </li>
      </ul>




      
      <p className="mt-9 text-gray-700 font-medium">
       Returns :
      </p>
      <ul className="list-disc ml-8 mt-3 space-y-4 text-gray-600">
        <li>
        Return Policy: We offer a 30-day return policy for all unused and unworn items, no questions asked. However, please note that the 30-day return does not apply to personalised jewellery, perfumes, candles, coins, utensils, and God idols other than in cases of defective/spurious products. TRULYROSELLE reserves the right to process refunds after checking the returned items. In case you have purchased a TRULYROSELLE product from anywhere other than the TRULYROSELLE Website, TRULYROSELLE App or TRULYROSELLE Exclusive Stores, the return policies of your source of purchase shall apply. Any shipping charges (if paid) at the time of placing the order are non refundable in case of returns
        </li>
        <li>
        In case of missing items in return orders, i.e., where the customer claims to have returned multiple products but actual pickup doesn&apos;t include all said items, the company has a right to deduct an amount up to the full MRP of the missing product from the refund amount. This shall extend to promotional products, including but not limited to free gifts and silver coins.
        </li>
        <li>
        Refund Policy: In case you have requested the return of any of your products, the refund of the same shall be initiated once we receive the product back in our warehouse.
        </li>
        <li>
        Return Process: You can initiate a return request from our website or app. Alternatively, you can reach out to our Customer Support team, and they&apos;ll guide you through the process. Once you have booked the return request, we request you to be available for the reverse pick-up, and we request you to answer calls from the delivery partner. In the absence of your availability or inability to answer the calls, the delivery partner may, at their discretion, cancel the reverse pick-up. In all such cases, the process will have to be re-initiated again, and the overall timeline will increase.
        </li>
        <li>
        Further, please note that while most pin codes are forward and reverse serviceable, in rare cases, some pin codes may only be forward serviceable and not reverse serviceable. In all such cases, we may request you to return the product via an alternate courier service, such as India Post and reimburse all reasonable shipping costs (up to Rs 70) incurred by you for processing such returns.
        </li>
        <li>
        In case the charges exceed Rs. 70, all charges (return shipping, duties, taxes, fees, etc.) in excess of Rs. 70 will be adjusted against the customer&apos;s refund. In case of non-serviceable pin codes, the customer is responsible for returning the jewellery to our warehouse and will receive Rs.70 towards shipping charges with their refund.
        </li>
        <li>
        In the unlikely event that you receive an empty parcel or a missing product, we would request you to reach out to our customer support team for assistance within 48 hours of the package being delivered. We will be requiring a 360-degree unpacking video of the parcel for us to process the request further. Please note that insufficient evidence or visible signs of tampering with the packet may result in your claim not being honoured. In all such cases, the brand reserves the right to take the final decision.
        </li>
        <li>
        For more detailed TnCs, please refer to our Terms of Service page: <Link href='https://trulyroselle.netlify.app/terms' className='text-blue-500'>https://trulyroselle.netlify.app/terms</Link>
        </li>
      </ul>

    </div>
  );
}