import React, { useState } from "react";
import faqs from "./FAq.json";

// const f =
// {
//     "question": "What payment methods do you accept?",
//     "answer": "We accept credit/debit cards, UPI, net banking, and wallets like Paytm, PhonePe, and Google Pay."
// },

function Faq() {
    const [selectedFaq,setSelectedFaq] = useState<number>(0)
  return (
    <div className="w-2/5 flex flex-col gap-2">
      {faqs.map((faq) => (
        <div
          className="flex flex-col gap-12 border-b-3 border-gray-300 py-4"
          key={faq.id}
        >
          <h3 className="font-semibold text-xl">
            {faq.question} <span></span>
          </h3>
          <p
                  className={`text-lg 
                ${selectedFaq === faq.id ? "block" : "hidden"
            } `}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Faq;
