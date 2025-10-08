import { useState } from "react";

const PlusIcon = (
  { className = "" } // Prop qo'shdik: className default bo'sh
) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`h-8 w-8 text-black transition-transform duration-300 md:h-10 md:w-10 ${className}`} // Eski class'larga yangisini qo'shdik
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const faqData = [
  {
    question: "Shaxsiy brend savdo va ishonchga qanday ta'sir qiladi ?",
    answer:
      "Odamlar mahsulot yoki xizmatni ko'pincha kampaniya emas, balki uning ortidagi shaxsga ishonib sotib olishadi. Agar sizning shaxsiy brendingiz kuchli bo'lsa — mijozlar sizga ko'proq ishonadi, shu ishonch esa savdo o'sishiga olib keladi.",
    delay: "0.1s",
  },
  {
    question: "Tadbirkor uchun shaxsiy brend rivojlantirish nima uchun zarur ?",
    answer:
      "Shaxsiy brend — bu tadbirkorning yuzidir. U orqali siz mijoz va hamkorlarda ishonch uyg‘otasiz, raqobatchilardan ajralib turasiz va o‘z sohangizda ekspert sifatida tanilasiz. Kuchli brend esa sizga barqaror obro‘ va cheksiz imkoniyatlar eshigini ochadi.",
    delay: "0.2s",
  },
  {
    question: "Veb-sayt ijtimoiy tarmoqlardan qaysi jihatlarda ustun ?",
    answer:
      "Veb-sayt biznesingiz uchun 24/7 ishlaydi: mijozlar kunu-tun ma’lumot olishi, buyurtma berishi yoki bog‘lanishi mumkin. Shu bilan birga, professional sayt kompaniyaning obro‘sini oshiradi va uni ijtimoiy tarmoqlardan ko‘ra ishonchliroq ko‘rsatadi.",
    delay: "0.3s",
  },
  {
    question: "Marketing SMM o'zi kerakmi va nimaga ?",
    answer:
      "Marketing va SMM biznes uchun zarur, chunki ular mahsulot va xizmatlarni to‘g‘ri auditoriyaga yetkazadi, brendni tanitadi, mijozlarni jalb qiladi, savdoni oshiradi va kompaniyaning obro‘sini mustahkamlaydi.",
    delay: "0.4s",
  },
  {
    question: "Qaysi xizmatni maslahat beramiz ?",
    answer:
      "Biz sizga special taklifni tavsiya qilamiz, chunki u biznesingizni har tomonlama rivojlantiradi: obro‘ni mustahkamlaydi , savdoni oshiradi va yangi mijozlarni jalb qilishda yordam beradi. Shu orqali siz qisqa muddatda natija ko‘rib , uzoq muddatli barqaror o‘sishga erishasiz.",
    delay: "0.5s",
  },
];

export function FaqAccordion() {
  const [openId, setOpenId] = useState(null);

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="lg:space-y-[55px] md:space-y-[50px] space-y-[15px]">
      {faqData.map((item, index) => {
        const isOpen = openId === index;

        return (
          <div
            key={index}
            className="overflow-hidden md:rounded-[25px] rounded-[18px] bg-[#f5f5f0] transition-all duration-300 ease-in-out sm:p-2 p-0"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-start justify-between gap-4 p-4 text-left transition-all duration-300 md:py-4 md:px-6 lg:p-6"
              aria-expanded={isOpen}
            >
              <h3 className="font-[Poppins]  text-[18px] font-normal md:tracking-[-3px] tracking-tight leading-tight text-black md:text-[32px] lg:text-[40px] lg:pt-0 md:pt-[4px] pt-2">
                {item.question}
              </h3>
              <div className="flex-shrink-0 pt-1 transition-transform duration-250 ease-out">
                {" "}
                {/* transition-all → transition-transform qilib, duration'ni 300ga oshirdim */}
                <PlusIcon className={isOpen ? "rotate-45" : "rotate-0"} />{" "}
                {/* Conditional rotate class! */}
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
                <div className="px-4 pb-8 md:px-8 md:pb-10 lg:px-10 lg:pb-12">
                  <p className="font-[Poppins] sm:text-lg text-[14px] leading-relaxed tracking-tight  text-black/80 md:text-[20px] lg:text-2xl">
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
