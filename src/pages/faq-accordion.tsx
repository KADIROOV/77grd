"use client";

import { useState } from "react";

const XIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-black transition-transform duration-300 md:h-10 md:w-10"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-8 w-8 text-black transition-transform duration-300 md:h-10 md:w-10"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Shaxsiy brend savdo va ishonchga qanday ta'sir qiladi ?",
    answer:
      "Odamlar mahsulot yoki xizmatni ko'pincha kampaniya emas, balki uning ortidagi shaxsga ishonib sotib olishadi. Agar sizning shaxsiy brendingiz kuchli bo'lsa — mijozlar sizga ko'proq ishonadi, shu ishonch esa savdo o'sishiga olib keladi.",
  },
  {
    id: 2,
    question: "Tadbirkor uchun shaxsiy brend rivojlantirish nima uchun zarur ?",
    answer:
      "Shaxsiy brend rivojlantirish tadbirkorga o'z sohasida ekspert sifatida tanilishga, ishonch va obro' qozonishga yordam beradi. Bu esa yangi mijozlar, hamkorlar va imkoniyatlar jalb qilishni osonlashtiradi.",
  },
  {
    id: 3,
    question: "Veb-sayt jitimojy tarmoqlardan qaysi jihatlarda ustun ?",
    answer:
      "Veb-sayt sizning professional onlayn mavjudligingizni ta'minlaydi va to'liq nazorat ostida bo'ladi. Ijtimoiy tarmoqlar esa algoritmlar va platformalar qoidalariga bog'liq.",
  },
];

export function FaqAccordion() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleItem = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      {faqData.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-[2rem] bg-[#f5f5f0] transition-all duration-300 ease-in-out"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-start justify-between gap-4 p-8 text-left transition-all duration-300 md:p-10 lg:p-12"
              aria-expanded={isOpen}
            >
              <h3 className="text-2xl font-light leading-tight text-black md:text-3xl lg:text-4xl">
                {item.question}
              </h3>
              <div className="flex-shrink-0 pt-1">
                {isOpen ? <XIcon /> : <PlusIcon />}
              </div>
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-8 pb-8 md:px-10 md:pb-10 lg:px-12 lg:pb-12">
                  <p className="text-lg leading-relaxed text-black/80 md:text-xl lg:text-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
