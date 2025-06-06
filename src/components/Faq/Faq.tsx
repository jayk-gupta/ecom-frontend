import { useState } from "react";
import faqs from "./FAq.json";
import { BaselinePlus, SharpMinus } from "../Icons/Icons";
function Faq() {
  const [openFaqs, setSelectedFaqs] = useState<Set<number>>(new Set());
  const handleToggle = (id: number) => {
    // setSelectedFaq((prev) => (prev === id ? null : id));
    // prev is prev state of open faq ids
    setSelectedFaqs((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        // close if already open
        //  add delete has : has complexity O(1)
        newSet.delete(id);
      } else {
        // open if closed
        newSet.add(id);
      }
      return newSet;
    });
  };
  return (
    <div className="w-2/5 ">
      <h3 className="text-4xl text-center mb-12">FAQs</h3>
      <div className="flex flex-col gap-2 border border-gray-300 p-8 rounded-xl">
        {faqs.map((faq) => (
          <div
            className="flex flex-col gap-12 border-b-3 border-gray-300 py-4"
            key={faq.id}
          >
            <h3 className="font-semibold text-xl flex justify-between">
              {faq.question}
              <span className="relative borde flex">
                <button
                  className="relative cursor-pointer w-6 h-6"
                  onClick={() => handleToggle(faq.id)}
                >
                  {openFaqs.has(faq.id) ? (
                    <SharpMinus className="text-3xl " />
                  ) : (
                    <BaselinePlus className="text-3xl " />
                  )}
                </button>
              </span>
            </h3>
            {openFaqs.has(faq.id) && (
              <p className={`text-lg } `}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
