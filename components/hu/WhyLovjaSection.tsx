"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyLovjaSection() {
  return (
    <section className="relative bg-[#000816] text-white py-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      {/* Background accent image or gradient */}
      <div className="absolute inset-0 opacity-10 bg-[url('/uploads/lovjabg1.png')] bg-cover bg-center"></div>

      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        >
          WHy <span className="text-yellow-400">elengedhetetlen</span> a Lovja?
        </motion.h2>

        {/* Grid: 1 column <1024px, 2 columns ≥1024px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ✅ WHY YOU NEED LOVJA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              Miért van szüksége a Lovjára?
            </h3>
            <ul className="space-y-3 text-base text-white/90 leading-relaxed">
              {/* Desktop: 4 sentences */}
              <li className="hidden lg:block">
                ✅ Mert az online térben ma a figyelemért folyik a harc — és a Lovja segít Önnek nyerni.
              </li>
              <li className="hidden lg:block">
                ✅ Mert a páciensek 80%-a az interneten dönt, mielőtt bármit foglalna.
              </li>
              <li className="hidden lg:block">
                ✅ Mert egy modern, adatvezérelt marketingrendszer nélkül a konkurencia viszi el a lehetőségeket.
              </li>
              <li className="hidden lg:block">
                ✅ Mert a Lovja rendszere nem csak hirdet – <span className="font-semibold text-white">automatikusan konvertál</span>.
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ✅ Mert az online térben ma a figyelemért folyik a harc — és a Lovja segít Önnek nyerni.
              </li>
              <li className="block lg:hidden">
                ✅ Mert a páciensek 80%-a az interneten dönt, mielőtt bármit foglalna.
              </li>
            </ul>
          </motion.div>

          {/* ⚠️ WHAT HAPPENS IF YOU DON’T */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-red-900/20 border border-red-600/30 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              Mi történik, ha nem lép időben?
            </h3>
            <ul className="space-y-3 text-base text-white/90 leading-relaxed">
              {/* Desktop: 4 sentences */}
              <li className="hidden lg:block">
                ⚠️ A versenytársai hirdetései előzik meg az Önéit, így a páciensek őket választják.
              </li>
              <li className="hidden lg:block">
                ⚠️ A hónapról hónapra növekvő hirdetési költségek mellett <span className="font-semibold text-white">csökkenő eredményekkel</span> kell számolnia.
              </li>
              <li className="hidden lg:block">
                ⚠️ A klinika online jelenléte elavultnak hat, és a bizalomvesztés azonnali.
              </li>
              <li className="hidden lg:block">
                ⚠️ Minden egyes elmaradt érdeklődő egy elveszített lehetőség — <span className="font-semibold text-yellow-400">amelyet valaki más nyer meg.</span>
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ⚠️ A versenytársai hirdetései előzik meg az Önéit, így a páciensek őket választják.
              </li>
              <li className="block lg:hidden">
                ⚠️ A hónapról hónapra növekvő hirdetési költségek mellett <span className="font-semibold text-white">csökkenő eredményekkel</span> kell számolnia.
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA  */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Ne várja meg, míg a konkurencia átveszi a pácienseit.  
            <span className="block text-yellow-400 font-bold mt-1">
              Tegye meg most az első lépést a Lovjával.
            </span>
          </p>
          <a
            href="#quiz"
            className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors btn-shadow"
          >
            Kérem az ingyenes konzultációt →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
