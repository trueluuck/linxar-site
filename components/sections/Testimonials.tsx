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
    <section className="py-24 bg-white">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-600">Depoimentos</h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl">
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
              className="flex flex-col rounded-3xl border border-black/5 bg-gray-50/50 p-10 backdrop-blur-md"
            >
              <blockquote className="flex-1 text-lg leading-relaxed text-black/80 font-medium">
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
