"use client";

import { useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import { FaqAccordion } from "./faq-accordion";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [phoneNumber2, setPhoneNumber2] = useState("");
  const [clientName2, setClientName2] = useState("");
  const [clientComment, setClientComment] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phoneNumber,
          phoneNumber2,
          clientName,
          clientName2,
          clientComment,
        }),
      });

      if (res.ok) {
        setShowModal(true);
        // modalni ochish
      } else {
        setShowModal(true);
        setPhoneNumber("");
        setPhoneNumber2("");
        setClientName("");
        setClientName2("");
        setClientComment("");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  const sectionRefs = {
    hero: useRef(null),
    services: useRef(null),
    contact: useRef(null),
    whyWe: useRef(null),
    faq: useRef(null),
    footer: useRef(null),
  };

  useEffect(() => {
    // Komponent yuklanganda animatsiyalarni boshlash
    setIsVisible(true);

    // Scroll animatsiyalari uchun Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Barcha sectionlarni kuzatish
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const formatPhoneNumber = (value) => {
    // Faqat raqamlarni olamiz
    let digits = value.replace(/\D/g, "");

    // 12 ta raqamdan oshmasin (+998991234567)
    if (digits.length > 12) digits = digits.slice(0, 12);

    // Formatlash
    let formatted = "+";
    if (digits.length > 0) formatted += digits.slice(0, 3); // 998
    if (digits.length > 3) formatted += "-" + digits.slice(3, 5); // 99
    if (digits.length > 5) formatted += "-" + digits.slice(5, 8); // 596
    if (digits.length > 8) formatted += "-" + digits.slice(8, 10); // 65
    if (digits.length > 10) formatted += "-" + digits.slice(10, 12); // 64

    return formatted;
  };

  const handlePhoneChange1 = (e) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  // Yangi: Ikkinchi section (fikr bildirish) uchun alohida handler
  const handlePhoneChange2 = (e) => {
    setPhoneNumber2(formatPhoneNumber(e.target.value));
  };

  // Why choose us item component - animatsiya qo'shilgan
  const WhyChooseUsItem = ({ number, description, delay }) => (
    <div className={`max-w-[1480px] mx-auto`} style={{ animationDelay: delay }}>
      <div className="max-w-[1480px] flex justify-center items-center rounded-[20px] bg-white text-black py-2 pr-20 gap-4">
        <span className="w-[491px] flex justify-center items-center font-['Poppins'] font-normal text-[80px] md:text-[120px] lg:text-[150px] tracking-[-8px]">
          {number}
        </span>
        <p className="max-w-[898px] font-['Open_Sans'] font-normal text-xs md:text-xl lg:text-[40px] lg:leading-[38px] lg:tracking-[-2px]">
          {description}
        </p>
      </div>
    </div>
  );
  // Why choose us data
  const whyChooseUsItems = [
    {
      number: 1,
      description:
        "Bizning ishimiz nafaqat chiroyli ko'rinadi, balki real natija ham beradi. Haftalik va oylik hisobotlar orqali siz loyihaning qayerga ketayotganini aniq ko'rasiz.",
      alignment: "left",
      delay: "0.4s",
    },
    {
      number: 2,
      description:
        "Bizning kontent va dizayn bo'yicha kreativ yechimlar bazamiz doimiy yangilanib boradi va mijozning talablarini qondiradi",
      alignment: "right",
      delay: "0.8s",
    },
    {
      number: 3,
      description:
        "Bizda marketing, dizayn, kontent va boshqaruv bo'yicha tajribali mutaxassislar bor, har biri vazifasini professional bajaradi.",
      alignment: "left",
      delay: "1.2s",
    },
    {
      number: 4,
      description:
        "Biz vaqtingizni qadrlaymiz. Shu sababli ishlar belgilangan muddatda topshiriladi. Muddatlar biz uchun majburiyat, siz uchun esa kafolatdir.",
      alignment: "right",
      delay: "1.6s",
    },
    {
      number: 5,
      description:
        "Biz jamoamizni doimiy o'qitib va rivojlantirib boramiz. Bu sizning loyihangizga yangi bilimlar, trendlar va texnologiyalarni olib kirish imkonini beradi.",
      alignment: "left",
      delay: "2.0s",
    },
    {
      number: 6,
      description:
        "Biz siz bilan uzoq muddatli hamkorlik o‘rnatishga intilamiz va biznesingizning rivojiga sherik bo‘lamiz. Har bir loyiha biz uchun yangi imkoniyat, siz uchun esa ishonchli natijadir.",
      alignment: "right",
      delay: "2.4s",
    },
    {
      number: 7,
      description:
        " Hamkorlik davomida nafaqat loyiha, balki biznesingiz ham o‘sadi. Biz natijaga yo‘naltirilgan strategiya va ijodiy yechimlar bilan har qadamda siz bilan birgamiz.",
      alignment: "right",
      delay: "2.8s",
    },
  ];

  return (
    <div className="pt-2 transition-all ease duration-800 overflow-x-hidden px-12">
      {/* Hero Section */}
      <div
        ref={sectionRefs.hero}
        className="mt-[320px] md:mt-[300px] lg:mt-[320px] items-left lg:px-0 px-2 mx-0 opacity-0 overflow-x-hidden"
      >
        <div id="home" className="hero-1 max-w-[1680px] mx-auto">
          <p className="font-[Poppins] font-normal text-[38px] md:text-5xl lg:text-[50px] xl:text-[70px] 2xl:text-[110px] leading-[60px] md:leading-[65px] lg:leading-[70px] xl:leading-[85px] 2xl:leading-[115px]  tracking-[-2px] md:tracking-[-4px] lg:tracking-[-7px] mb-[86px] md:mb-[131px]">
            Biznesingizni yangi cho‘qqilarga <br /> olib chiqadigan{" "}
            <em className="text-[#77E095]">xizmatlar.</em>
          </p>
          <div className="flex justify-between items-center">
            <button className="konsultat-btn cursor-pointer w-[191px] md:w-[350px] md:h-[80px] h-[40px] md:rounded-[15px] rounded-[10px] bg-[#77E095] text-black font-normal text-[17px] md:text-[30px] md:tracking-[-1px] flex justify-center items-center  mx-8 md:mx-0 transition-all duration-200">
              Konsultatsiya olish
            </button>
            <p className="font-[Montserrat] font-normal text-[35px] leading-[40px] tracking-[-2px] text-right">
              Raqobatda ajralib turish uchun zamonaviy <br /> marketing
              vositalari va yechimlar.
            </p>
          </div>
        </div>

        {/* Animatsiyali tekst qismi – eng pastda, button va p dan keyin */}
        <div className="marquee-container mt-[100px] md:mt-[170px] relative overflow-hidden h-12 md:h-16 w-[1940px] mx-auto">
          <div className="marquee-wrapper flex whitespace-nowrap animate-marquee will-change-transform">
            <span className="font-['Poppins'] font-light  mr-4 text-[30px] md:text-xl lg:text-2xl  text-white tracking-[-2px] inline-block">
              Biznesingizni o‘stiramiz. Brendingizni kuchaytiramiz. Sotuvni
              ko‘paytiramiz. 77Grade — natijaga yo‘naltirilgan marketing
              agentligi. Biznesingizni yangi
            </span>
            {/* Duplicate for seamless loop */}
            <span className="font-['Poppins'] font-light  text-[30px] md:text-xl lg:text-2xl  text-white tracking-[-1px] inline-block">
              Biznesingizni o‘stiramiz. Brendingizni kuchaytiramiz. Sotuvni
              ko‘paytiramiz. 77Grade — natijaga yo‘naltirilgan marketing
              agentligi. Biznesingizni yangiz
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1680px] mx-auto pt-2 transition-all ease duration-800">
        {/* Recommends section*/}
        <section className="mt-[166px] mb-[70px]">
          <h1 className="font-['Poppins'] font-normal text-[90px] leading-[90px] tracking-[-5px] mb-[138px]">
            Agar biznesingizni sotuvini oshirish yoki brend darajasiga olib
            chiqmoqchi bol’sangiz bu <span className="text-[#77E095]">5</span>
            -ta narsani qiling :
          </h1>

          <div className="flex  flex-col gap-[44px]">
            <div className="rounded-[30px] border border-white flex flex-col md:flex-row overflow-hidden max-w-[1539px]">
              {/* Chap taraf */}
              <div className="flex items-center justify-center md:w-64 border-b md:border-b-0 md:border-r border-white py-4 md:py-0">
                <span className="text-5xl md:text-[120px] font-normal font-['Poppins'] ">
                  1
                </span>
              </div>

              {/* O‘ng taraf */}
              <div className="flex flex-col w-full">
                {/* Sarlavha */}
                <div className="border-b border-white pl-[34px] py-8">
                  <h2 className="text-xl md:text-[50px] font-normal font-['Poppins'] ">
                    Auditoriyani chuqur o‘rganing.
                  </h2>
                </div>

                {/* Matn */}
                <div className="font-['Poppins'] pl-[34px] pr-[44px] py-10  md:text-[40px] leading-[50px] tracking-[-2px]">
                  <p>
                    Siz kimga sotayapsiz — shuni aniq biling. Mijozning yoshi,
                    qiziqishi, muammosi va istagini tushungan biznes har doim
                    oldinda bo‘ladi, chunki u har bir taklifni aniq ehtiyojga
                    yo‘naltiradi.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] border border-white flex flex-col md:flex-row overflow-hidden max-w-[1539px]">
              {/* Chap taraf */}
              <div className="flex items-center justify-center md:w-64 border-b md:border-b-0 md:border-r border-white py-4 md:py-0">
                <span className="text-5xl md:text-[120px] font-normal font-['Poppins'] ">
                  2
                </span>
              </div>

              {/* O‘ng taraf */}
              <div className="flex flex-col w-full">
                {/* Sarlavha */}
                <div className="border-b border-white pl-[34px] py-8">
                  <h2 className="text-xl md:text-[50px] font-normal font-['Poppins'] ">
                    Brending qiling
                  </h2>
                </div>

                {/* Matn */}
                <div className="font-['Poppins'] pl-[34px] pr-[44px] py-10  md:text-[40px] leading-[50px] tracking-[-2px]">
                  <p>
                    Ranglar, dizayn, logotip, til — barchasi bir yo‘nalishda
                    bo‘lishi kerak. Mijoz sizni ko‘rgan zahoti “ha, bu o‘sha
                    brend” deb tanisin. Har bir detal sizning qadriyatlaringizni
                    ifodalasin va brendingizni esda qolarli, ishonchli hamda
                    professional tarzda namoyon etsin.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] border border-white flex flex-col md:flex-row overflow-hidden max-w-[1539px]">
              {/* Chap taraf */}
              <div className="flex items-center justify-center md:w-64 border-b md:border-b-0 md:border-r border-white py-4 md:py-0">
                <span className="text-5xl md:text-[120px] font-normal font-['Poppins'] ">
                  3
                </span>
              </div>

              {/* O‘ng taraf */}
              <div className="flex flex-col w-full">
                {/* Sarlavha */}
                <div className="border-b border-white pl-[34px] py-8">
                  <h2 className="text-xl md:text-[50px] font-normal font-['Poppins'] ">
                    Kontent orqali ishonch yarating.
                  </h2>
                </div>

                {/* Matn */}
                <div className="font-['Poppins'] pl-[34px] pr-[44px] py-10  md:text-[40px] leading-[50px] tracking-[-2px]">
                  <p>
                    Faqat reklama emas, foydali, ilhomlantiruvchi va ishonchli
                    kontent bering. Postlar, videolar, storislar — hammasi
                    sizning qadriyatingizni ko‘rsatsin. Har bir kontent
                    auditoriya bilan aloqa o‘rnatsin, ishonch uyg‘otsin va
                    brendingizni haqiqiy hamda foydali qilib ko‘rsatsin.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] border border-white flex flex-col md:flex-row overflow-hidden max-w-[1539px]">
              {/* Chap taraf */}
              <div className="flex items-center justify-center md:w-64 border-b md:border-b-0 md:border-r border-white py-4 md:py-0">
                <span className="text-5xl md:text-[120px] font-normal font-['Poppins'] ">
                  4
                </span>
              </div>

              {/* O‘ng taraf */}
              <div className="flex flex-col w-full">
                {/* Sarlavha */}
                <div className="border-b border-white pl-[34px] py-8">
                  <h2 className="text-xl md:text-[50px] font-normal font-['Poppins'] ">
                    Axborot oqimida ajralib turing.
                  </h2>
                </div>

                {/* Matn */}
                <div className="font-['Poppins'] pl-[34px] pr-[44px] py-10  md:text-[40px] leading-[50px] tracking-[-2px]">
                  <p>
                    Bugun odamlar yuzlab brendlarni ko‘radi, ammo faqat hissiyot
                    uyg‘otganini eslab qoladi. Shu sabab, marketing
                    yondashuvingiz hissiy, kreativ va ta’sirli bo‘lishi kerak.
                    Har bir g‘oya qalbga yetib borsin, har bir vizual esa
                    brendingizni esda qolarli qilsin.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[30px] border border-white flex flex-col md:flex-row overflow-hidden max-w-[1539px]">
              {/* Chap taraf */}
              <div className="flex items-center justify-center md:w-64 border-b md:border-b-0 md:border-r border-white py-4 md:py-0">
                <span className="text-5xl md:text-[120px] font-normal font-['Poppins'] ">
                  5
                </span>
              </div>

              {/* O‘ng taraf */}
              <div className="flex flex-col w-full">
                {/* Sarlavha */}
                <div className="border-b border-white pl-[34px] py-8">
                  <h2 className="text-xl md:text-[50px] font-normal font-['Poppins'] ">
                    Natijani o‘lchang va takomillashtiring.
                  </h2>
                </div>

                {/* Matn */}
                <div className="font-['Poppins'] pl-[34px] pr-[44px] py-10  md:text-[40px] leading-[50px] tracking-[-2px]">
                  <p>
                    Qaysi narsa ishlayapti, qaysi biri yo‘q — shuni tahlil
                    qiling. Strategiyani doimiy yangilab, yangi yondashuvlar
                    bilan o‘sishga erishing. Har bir natijadan xulosa chiqaring,
                    ma’lumotlarga asoslaning va qarorlarni aniq dalillar bilan
                    bering — shunda rivojlanish tizimli bo‘ladi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* bog'lanish  section */}
        <section>
          <h1 className="font-[Poppins] font-normal text-[70px] leading-[70px] tracking-[-5px] mb-[70px]">
            Biznesingizni har tomonlama kuchaytirishni istasangiz biz bilan
            bog'laning !
          </h1>
          <div className="contact-div max-w-[1280px]  font-[Poppins] bg-white rounded-[20px] p-10">
            <p className="font-normal text-[40px] leading-[45px] tracking-[-3px] text-right text-black">
              Birgalikda biznesingiz uchun aniq strategiya ishlab chiqamiz,
              brendingizni mustahkamlaymiz va sotuvni natijaga yo‘naltiramiz.
            </p>
            <button
              type="submit"
              className="konsultat-btn cursor-pointer rounded-[14px] tracking-[-2px] px-4 py-2 w-[218px] md:w-[317px] lg:w-[360px] outline-none text-[#000000] md:mb-[55px] font-['Poppins'] font-normal text-[15px] md:text-[25px] lg:text-[30px]  bg-[#77E095]"
            >
              Bog'lanish
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={sectionRefs.contact} id="contact" className="opacity-0">
          <h1 className="max-w-[1680px] px-10 font-['Poppins'] font-normal text-[35px] md:text-[45px] lg:text-[60px] xl:text-[150px] leading-tight lg:tracking-[-4px] tracking-[-1px] md:tracking-[-3px] md:text-right text-left mt-[76px] md:mt-[213px] mb-[58px] md:mb-[131px] mx-[0px] md:mx-0">
            Bizga savolingiz yoki <br /> taklifingiz bormi ?
          </h1>

          <div className="max-w-[1580px] flex lg:flex-row flex-col lg:justify-around justify-center items-center lg:text-left md:text-center rounded-[30px] bg-white mx-14 md:mx-34 lg:mx-0 xl:mx-12 md:px-10 px-[42px] md:py-0 py-[40px] text-black mb-[151px] md:mb-[303px] lg:mb-[441px] transition-all duration-500 hover:shadow-2xl">
            <h2 className="max-w-[601px] font-['Poppins'] font-normal text-[30px] md:text-[60px] lg:text-[80px] xl:text-[90px] leading-[34px] md:leading-[70px] lg:leading-[80px] tracking-[-3px] lg:mt-0 md:mt-[42px]">
              Unda biz bilan bog'laning !
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col lg:items-start items-center justify-center gap-3 md:gap-[26px]"
            >
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange1}
                className="rounded-[14px] px-4 py-2 w-[218px] md:w-[317px] lg:w-[360px] outline-none border border-black text-[#333333] md:mt-[55px] mt-[27px] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px]"
                placeholder="+998-99-999-99-99"
              />
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="rounded-[14px] px-4 py-2 w-[218px] md:w-[317px] lg:w-[360px] outline-none border border-black text-[#333333] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px]"
                placeholder="Ismingiz"
              />
              <button
                type="submit"
                className="konsultat-btn cursor-pointer rounded-[14px] px-4 py-2 w-[218px] md:w-[317px] lg:w-[360px] outline-none text-[#000000] md:mb-[55px] font-['Poppins'] font-light text-[15px] md:text-[25px] lg:text-[30px]  bg-[#77E095]"
              >
                Jo'natish
              </button>
            </form>
          </div>
        </section>

        {showModal && (
          <div
            onClick={() => setShowModal(false)} // tashqariga bosganda yopiladi
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <div
              onClick={(e) => e.stopPropagation()} // ichiga bosganda yopilmasin
              className="bg-white rounded-[30px] text-black max-w-[615px] px-6 py-14 relative text-center shadow-lg"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-0 right-6 font-light text-[70px]"
              >
                ×
              </button>

              <p className="font-['Poppins'] text-xl md:text-[30px] font-normal mx-15 my-10">
                Arizangiz jo‘natildi tez orada siz bilan bog‘lanamiz!
              </p>
            </div>
          </div>
        )}

        {/* Why Choose Us Section */}
        <section
          ref={sectionRefs.whyWe}
          id="whyWe"
          className="md:mx-4 opacity-0"
        >
          <div className="max-w-[1380px] mx-auto lg:px-0 md:px-0 px-[45px] flex flex-col">
            <h1 className="font-['Poppins'] font-normal text-[60px] md:text-[120px] lg:text-[150px] xl:text-[200px] lg:tracking-[-7px] tracking-[-3px] text-left mb-[35px] lg:mb-[145px]">
              Nega Biz ?
            </h1>
            <h1 className="font-['Poppins'] font-normal text-[60px] md:text-[120px] lg:text-[150px] xl:text-[200px] lg:tracking-[-7px] tracking-[-3px] leading-10 md:leading-18 lg:leading-32 text-right mb-[70px] lg:mb-[156px]">
              Chunki :
            </h1>
          </div>

          <div className="flex flex-col gap-[66px]">
            {whyChooseUsItems.map((item, index) => (
              <WhyChooseUsItem key={index} {...item} />
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section
          ref={sectionRefs.faq}
          id="faq"
          className="mt-[65px] md:mt-[250px] px-7 md:px-8 opacity-0"
        >
          <div className="max-w-[1280px] mx-auto">
            <h1 className="font-['Poppins'] font-normal text-[50px] md:text-[90px] lg:text-[128px] xl:text-[200px] lg:tracking-[-7px] tracking-[-3px] leading-11 md:leading-20 lg:leading-[175px] text-center mb-[60px] md:mb-[100px] lg:mb-[158px]">
              Savollarga <br /> Javoblar :
            </h1>

            <div className="flex flex-col gap-4 md:gap-6">
              <FaqAccordion />
            </div>
          </div>
        </section>
        <section>
          <ContactForm
            phoneNumber={phoneNumber2}
            handlePhoneChange={handlePhoneChange2}
            clientName={clientName2}
            handleSubmit={handleSubmit}
            setClientName={setClientName2}
            setClientComment={setClientComment}
            clientComment={clientComment}
          />
        </section>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(7deg);
          }
          50% {
            transform: translateY(-10px) rotate(7deg);
          }
          100% {
            transform: translateY(0px) rotate(7deg);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .text-shadow-down {
          text-shadow: 90px 30px 100px #a9a9a9;
        }

        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
