"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Mennyire fájdalmas a kezelés?",
    answer:
      "A Lovja héjak felhelyezése szinte teljesen fájdalommentes, gyakran csak helyi érzéstelenítést igényel.",
  },
  { 
    question: "Mennyi ideig tart, míg elkészül a mosolyom?",
    answer:
      "Általában 1 hét alatt elkészülnek a Lovja prémium héjak, a konzultációtól a végleges felhelyezésig.",
  },
  {
    question: "Mennyire tartósak a Lovja héjak?",
    answer:
      "A speciális török technológiának köszönhetően a Lovja héjak 10–15 évig is stabilak maradnak megfelelő ápolás mellett.",
  },
  {
    question: "Meg fogják-e változtatni a fogaim természetes alakját?",
    answer:
      "A Lovja héjak ultravékonyak, így minimális csiszolással illeszthetők, a fogak természetességét megőrizve.",
  },
  {
    question: "Mennyire természetes a mosolyom a Lovja-val?",
    answer:
      "A speciális mikrotextúra és egyedi színezés miatt a mosoly teljesen természetes, ragyogó és harmonikus lesz.",
  },
  {
    question: "Lehet-e egyszerre több fogra is felhelyezni a héjat?",
    answer:
      "Igen, akár a teljes mosolyt is átalakíthatjuk egyetlen kezelés során, teljesen személyre szabottan.",
  },
  {
    question: "Mit tegyek, ha van régi koronám vagy héjam?",
    answer:
      "A meglévő fogászati munkák eltávolíthatók vagy integrálhatók – a Lovja csapata minden esetben személyre szabott megoldást kínál.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-8 text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-center mb-14"
        >
          <span className="text-white">Még mindig bizonytalan?</span>
          <br />
          <span className="text-4xl md:text-4xl font-extrabold text-shadow-md text-shadow-black/40">
            Gyakran Ismételt Kérdések
          </span>
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl faq-shadow overflow-hidden bg-black/25"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center text-left px-6 py-4 focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-semibold text-white text-shadow-md text-shadow-black/25">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-white text-base font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
