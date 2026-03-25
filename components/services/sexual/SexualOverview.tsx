"use client";

import { motion } from "framer-motion";

const womenSymptoms = ["Low or absent libido", "Vaginal dryness and discomfort during sex", "Difficulty achieving orgasm", "Decreased arousal or sensation", "Pain during intercourse", "Emotional disconnection from intimacy"];
const womenTx = ["Testosterone optimization (low-dose)", "Estrogen and progesterone BHRT", "Vaginal estrogen therapy", "Addressing underlying anxiety or mood imbalances"];
const menSymptoms = ["Low sex drive or absent libido", "Erectile dysfunction (ED)", "Reduced sensation or difficulty with orgasm", "Low confidence and relationship strain", "Testosterone deficiency (Low T)", "Performance anxiety"];
const menTx = ["Testosterone Replacement Therapy (TRT)", "PDE-5 inhibitor therapy (when appropriate)", "Hormone optimization for energy and confidence", "Addressing metabolic contributors to ED"];

function Column({ title, symptoms, treatments, light = false }: { title: string; symptoms: string[]; treatments: string[]; light?: boolean }) {
  return (
    <div className={`rounded-2xl p-8 ${light ? "bg-forest text-warm-white" : "bg-mist"}`}>
      <h3 className={`text-xl font-bold mb-6 ${light ? "text-warm-white" : "text-forest"}`} style={{ fontFamily: "var(--font-display)" }}>{title}</h3>
      <div className="mb-6">
        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${light ? "text-gold/70" : "text-gold"}`} style={{ fontFamily: "var(--font-sans)" }}>Common Concerns</p>
        <ul className="space-y-2">
          {symptoms.map(s => (
            <li key={s} className={`flex items-start gap-2.5 text-sm ${light ? "text-warm-white/70" : "text-charcoal/70"}`} style={{ fontFamily: "var(--font-sans)" }}>
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${light ? "text-gold/70" : "text-gold"}`} style={{ fontFamily: "var(--font-sans)" }}>Treatment Options</p>
        <ul className="space-y-2">
          {treatments.map(t => (
            <li key={t} className={`flex items-start gap-2.5 text-sm ${light ? "text-warm-white/70" : "text-charcoal/70"}`} style={{ fontFamily: "var(--font-sans)" }}>
              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SexualOverview() {
  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3" style={{ fontFamily: "var(--font-sans)" }}>Personalized Care</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Treatment for Men &amp; Women
          </h2>
          <p className="text-charcoal/60 max-w-xl mx-auto" style={{ fontFamily: "var(--font-sans)" }}>
            Sexual health concerns nearly always have a physiological component — often hormonal.
            Identifying and correcting that imbalance is usually the most effective first step.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Column title="For Women" symptoms={womenSymptoms} treatments={womenTx} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Column title="For Men" symptoms={menSymptoms} treatments={menTx} light />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 bg-gold/10 border border-gold/20 rounded-2xl p-6 text-center"
        >
          <p className="text-sm text-charcoal/70 leading-relaxed" style={{ fontFamily: "var(--font-sans)" }}>
            <strong className="text-charcoal">All consultations are strictly confidential.</strong>{" "}
            Your privacy is our priority. We never share your information without your explicit consent,
            and our team approaches every conversation with professionalism and care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
