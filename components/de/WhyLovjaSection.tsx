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
          Warum ist Lovja <span className="text-yellow-400">unverzichtbar</span>?
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
                ✅ Kein Abschleifen oder nur minimale Eingriffe – die Zähne bleiben intakt.
              </li>
              <li className="hidden lg:block">
                ✅ Natürlichere Strahlkraft und langanhaltende Weißheit dank spezieller Mikrostruktur.
              </li>
              <li className="hidden lg:block">
                ✅ Perfekte Passung von 0,01 mm – keine Lücken oder dunklen Ränder.
              </li>
              <li className="hidden lg:block">
                ✅ Längere Lebensdauer – weniger anfällig für Absplitterungen oder Risse.
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ✅ Kein Abschleifen oder nur minimale Eingriffe – die Zähne bleiben intakt.
              </li>
              <li className="block lg:hidden">
                ✅ Natürlichere Strahlkraft und langanhaltende Weißheit dank spezieller Mikrostruktur.
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
            Traditionelle Veneers
            </h3>
            <ul className="space-y-3 text-base text-white/90 leading-relaxed">
              {/* Desktop: 4 sentences */}
              <li className="hidden lg:block">
                ⚠️ Oft wird starkes Abschleifen benötigt, was zu dauerhaftem Zahnsubstanzverlust führt.
              </li>
              <li className="hidden lg:block">
                ⚠️ Mit der Zeit können sie sich verfärben und künstlich wirken.
              </li>
              <li className="hidden lg:block">
                ⚠️ Ungenaue Passung kann Mikro-Lücken und Zahnfleischprobleme verursachen.
              </li>
              <li className="hidden lg:block">
                ⚠️ Kürzere Lebensdauer, häufige Ersatz- oder Reparaturmaßnahmen erforderlich.
              </li>

              {/* Mobile & Tablet: first 2 sentences */}
              <li className="block lg:hidden">
                ⚠️ Oft wird starkes Abschleifen benötigt, was zu dauerhaftem Zahnsubstanzverlust führt.
              </li>
              <li className="block lg:hidden">
                ⚠️ Mit der Zeit können sie sich verfärben und künstlich wirken.
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
        Geben Sie sich nicht mit einem durchschnittlichen Lächeln zufrieden.
  <span className="block text-yellow-400 font-bold mt-1">
  Machen Sie den ersten Schritt mit Lovja Premium Veneers.
  </span>
</p>
<a
  href="#quiz"
  className="inline-block bg-yellow-400 text-black font-bold py-3 px-8 rounded-xl hover:bg-yellow-500 transition-colors btn-shadow"
>
Kostenlose Smile-Planung anfordern →
</a>

        </motion.div>
      </div>
    </section>
  );
}
