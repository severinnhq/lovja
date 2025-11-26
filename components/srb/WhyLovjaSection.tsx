"use client";

import { motion } from "framer-motion";


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
          Zašto je Lovja<span className="text-yellow-400">neizostavna</span>?
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
              Lovja
            </h3>
            <ul className="space-y-3 text-base text-white/90 leading-relaxed">
              {/* Desktop: 4 sentences */}
              <li className="hidden lg:block">
                ✅ Bez brušenja ili sa minimalnom intervencijom – vaši zubi ostaju potpuno očuvani.
              </li>
              <li className="hidden lg:block">
                ✅ Prirodniji sjaj i dugotrajnija belina zahvaljujući specijalnoj mikrostrukturi.
              </li>
              <li className="hidden lg:block">
                ✅ Savršena preciznost od 0,01 mm – bez praznina i tamnih ivica.
              </li>
              <li className="hidden lg:block">
                ✅ Duži vek trajanja – manje podložno pucanju i krzanju.
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ✅ Bez brušenja ili sa minimalnom intervencijom – vaši zubi ostaju potpuno očuvani.
              </li>
              <li className="block lg:hidden">
                ✅ Prirodniji sjaj i dugotrajnija belina zahvaljujući specijalnoj mikrostrukturi.
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
            Tradicionalne viniri
            </h3>
            <ul className="space-y-3 text-base text-white/90 leading-relaxed">
              {/* Desktop: 4 sentences */}
              <li className="hidden lg:block">
                ⚠️ Često zahtevaju značajno brušenje, što dovodi do trajnog gubitka zubne strukture.
              </li>
              <li className="hidden lg:block">
                ⚠️ Mogu se vremenom prebojiti i izgledati veštački.
              </li>
              <li className="hidden lg:block">
                ⚠️ Neprecizno naleganje može izazvati mikro-pukotine i probleme sa desnima.
              </li>
              <li className="hidden lg:block">
                ⚠️ Kraći vek trajanja, česte zamene ili popravke.
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ⚠️ Često zahtevaju značajno brušenje, što dovodi do trajnog gubitka zubne strukture.
              </li>
              <li className="block lg:hidden">
                ⚠️ Mogu se vremenom prebojiti i izgledati veštački.
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
        Ne zadovoljavajte se prosečnim osmehom. 
  <span className="block text-yellow-400 font-bold mt-1">
  Napravite prvi korak uz Lovja premium viniri.
  </span>
</p>
<a
  href="#quiz"
  className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors btn-shadow"
>
Zatražite besplatni dizajn osmeha →
</a>

        </motion.div>
      </div>
    </section>
  );
}
