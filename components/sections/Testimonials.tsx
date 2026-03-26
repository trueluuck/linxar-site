// components/sections/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    content: "A LINXAR revolucionou como cadastramos produtos. O que levava 15 minutos hoje leva menos de 30 segundos.",
    author: "Ricardo P.",
    role: "CEO de Ecommerce Multicanal",
  },
  {
    content: "A precisão do leitor de barcode integrado com a IA é algo que nunca vi no mercado brasileiro.",
    author: "Juliana M.",
    role: "Gerente de Operações",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-transparent">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="shimmer-text text-[11px] font-black uppercase tracking-[0.4em] mb-8 inline-block">Social Proof</h2>
          <p className="text-4xl font-black tracking-tighter text-black sm:text-6xl leading-[1.1] text-balance">
            O que nossos parceiros estão dizendo
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mx-0 lg:max-w-none">
          {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col rounded-[40px] border border-black/[0.04] bg-white/40 p-12 backdrop-blur-xl glass-reflection shadow-soft hover:shadow-hover transition-all"
              >
                <blockquote className="flex-1 text-xl leading-relaxed text-black/70 font-medium italic">
                  “{t.content}”
                </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600 text-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-black">{t.author}</div>
                  <div className="text-xs text-black/40 uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
