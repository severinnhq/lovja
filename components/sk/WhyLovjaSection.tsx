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
          Prečo je Lovja <span className="text-yellow-400">nevyhnutná</span>?
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
                ✅ Bez brúsenia alebo s minimálnym zásahom – vaše zuby zostanú neporušené.
              </li>
              <li className="hidden lg:block">
                ✅ Prirodzenejší lesk a dlhodobejšia bielosť vďaka špeciálnej mikroštruktúre.
              </li>
              <li className="hidden lg:block">
                ✅ Perfektné prispôsobenie na 0,01 mm – žiadne medzery ani tmavé okraje.
              </li>
              <li className="hidden lg:block">
                ✅ Dlhšia životnosť – menej náchylné na praskanie či odštiepenie.
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ✅ Bez brúsenia alebo s minimálnym zásahom – vaše zuby zostanú neporušené.
              </li>
              <li className="block lg:hidden">
                ✅ Prirodzenejší lesk a dlhodobejšia bielosť vďaka špeciálnej mikroštruktúre.
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
            Tradičné fazety
            </h3>
            <ul className="space-y-3 text-base text-white/90 leading-relaxed">
              {/* Desktop: 4 sentences */}
              <li className="hidden lg:block">
                ⚠️ Často si vyžadujú výrazné brúsenie, čo vedie k trvalej strate zubnej hmoty.
              </li>
              <li className="hidden lg:block">
                ⚠️ Môžu sa časom zafarbiť a pôsobiť umelo.
              </li>
              <li className="hidden lg:block">
                ⚠️ Nepravidelné dosadnutie môže spôsobiť mikroštrbiny a problémy s ďasnami.
              </li>
              <li className="hidden lg:block">
                ⚠️ Kratšia životnosť, častá potreba výmeny alebo opravy.
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ⚠️ Často si vyžadujú výrazné brúsenie, čo vedie k trvalej strate zubnej hmoty.
              </li>
              <li className="block lg:hidden">
                ⚠️ Môžu sa časom zafarbiť a pôsobiť umelo.
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
        Neuspokojte sa s priemerným úsmevom.
  <span className="block text-yellow-400 font-bold mt-1">
  Urobte prvý krok s prémiovými fazetami Lovja.
  </span>
</p>
<a
  href="#quiz"
  className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors btn-shadow"
>
Vyžiadať bezplatný návrh úsmevu →
</a>

        </motion.div>
      </div>
    </section>
  );
}
