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

  // Service card component - animatsiya qo'shilgan
  const ServiceCard = ({
    id,
    title,
    description,
    imageSrc,
    altText,
    delay,
  }) => (
    <div
      className={`md:max-w-[520px] mx-auto md:rounded-[80px] rounded-[30px] md:mx-0 bg-white shadow-lg transform transition-all duration-400 hover:-translate-y-3 opacity-0 ${
        isVisible ? "animate-fade-in-up" : ""
      }`}
      style={{ animationDelay: delay }}
    >
      <div className="pt-10 flex flex-col items-center px-[30px]">
        <h4 className="font-['Poppins'] font-medium text-2xl md:text-[60px] lg:text-[60px] text-black md:tracking-[-5px] text-center">
          {title}
        </h4>
        {id === 1 ? (
          <p className=" mt-8 md:mb-[80px] mb-[10px] font-['Poppins'] font-normal text-sm sm:text-xl lg:text-[25px] text-[#424242] text-left">
            {description}
          </p>
        ) : (
          <p className="w-[98%] mt-8 md:mb-[30px] mb-[10px] font-['Poppins'] font-normal text-sm sm:text-xl lg:text-[25px] text-[#424242] text-left">
            {description}
          </p>
        )}
      </div>

      {id === 4 ? (
        <img src={imageSrc || "/placeholder.svg"} alt={altText} className="" />
      ) : id == 5 ? (
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={altText}
          className="md:w-[300px]  lg:w-[349px] w-[220px] mx-auto mt-8 md:mt-20"
        />
      ) : id === 6 ? (
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={altText}
          className="md:w-[280px]  lg:w-[300px] w-[200px] mx-auto mt-8 md:mt-12 mb-10"
        />
      ) : (
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={altText}
          className="md:w-[300px]  lg:w-[349px] w-[230px] mt-12 md:mt-4 mx-auto"
        />
      )}
    </div>
  );

  // Why choose us item component - animatsiya qo'shilgan
  const WhyChooseUsItem = ({
    number,
    description,
    alignment = "left",
    delay,
  }) => (
    <div
      className={`max-w-[1580px] flex ${
        alignment === "right" ? "lg:justify-end" : "lg:justify-start"
      } justify-center items-${
        alignment === "right" ? "end" : "start"
      } opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`}
      style={{ animationDelay: delay }}
    >
      <div className="lg:max-w-[747px] max-w-[684px] flex justify-center items-center rounded-[20px] bg-white text-black mx-8 md:mx-0 py-2 px-4 gap-4">
        <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[80px] md:text-[120px] lg:text-[150px] tracking-[-8px]">
          {number}
        </span>
        <p className="max-w-[534px] font-['Open_Sans'] font-normal text-xs md:text-xl lg:text-3xl lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
          {description}
        </p>
      </div>
    </div>
  );

  // Services data
  const services = [
    {
      id: 1,
      title: "Marketing",
      description:
        "Biznesingizni ijtimoiy tarmoqlarda ommalashtirish, sotuv va obunachilar oqimini ko'paytirish.",
      imageSrc: "/images/card1_img.png",
      altText: "marketing image",
      delay: "0.1s",
    },
    {
      id: 2,
      title: "Website",
      description:
        "Kompaniyangiz uchun zamonaviy va qulay web-site yaratish, mijozlar bilan aloqa va savdolarni onlayn rivojlantirish.",
      imageSrc: "/images/card2_img.png",
      altText: "website image",
      delay: "0.2s",
    },
    {
      id: 3,
      title: "Shaxsiy brend",
      description:
        "Tadbirkor yoki mutaxassis sifatida onlayn imidjingizni shakllantirish, kontent va reklama orqali ko'proq auditoriyaga yetib borish.",
      imageSrc: "/images/card3_img.png",
      altText: "personal brand image",
      delay: "0.3s",
    },
    {
      id: 4,
      title: "Brending",
      description:
        "Logotip, firma uslubi va marketing materiallari orqali brend imidjini shakllantirish, mustahkamlash hamda uni auditoriya xotirasida esda qolarli qilish.",
      imageSrc: "/images/card4_img.png",
      altText: "brending image",
      delay: "0.4s",
    },
    {
      id: 5,
      title: "Telegram-bot",
      description:
        "Mijozlar bilan ishlashni avtomatlashtirish, buyurtmalarni boshqarish va sotuvlarni yengillashtirish vositasi.",
      imageSrc: "/images/card5_img.png",
      altText: "telegram bot image",
      delay: "0.5s",
    },
    {
      id: 6,
      title: "Special Taklif",
      description:
        "Biznesingizni ijtimoiy tarmoqlarda ommalashtirish, mijozlar oqimini ko'paytirish, zamonaviy veb-sayt yaratish va kuchli brend imidjini shakllantirish.",
      imageSrc: "/images/card6_img.png",
      altText: "special offer image",
      delay: "0.6s",
    },
  ];

  // Why choose us data
  const whyChooseUsItems = [
    {
      number: 1,
      description:
        "Bizning ishimiz nafaqat chiroyli ko'rinadi, balki real natija ham beradi. Haftalik va oylik hisobotlar orqali siz loyihaning qayerga ketayotganini aniq ko'rasiz.",
      alignment: "left",
      delay: "0.1s",
    },
    {
      number: 2,
      description:
        "Bizning kontent va dizayn bo'yicha kreativ yechimlar bazamiz doimiy yangilanib boradi va mijozning talablarini qondiradi",
      alignment: "right",
      delay: "0.2s",
    },
    {
      number: 3,
      description:
        "Bizda marketing, dizayn, kontent va boshqaruv bo'yicha tajribali mutaxassislar bor, har biri vazifasini professional bajaradi.",
      alignment: "left",
      delay: "0.3s",
    },
    {
      number: 4,
      description:
        "Biz vaqtingizni qadrlaymiz. Shu sababli ishlar belgilangan muddatda topshiriladi. Muddatlar biz uchun majburiyat, siz uchun esa kafolatdir.",
      alignment: "right",
      delay: "0.4s",
    },
    {
      number: 5,
      description:
        "Biz jamoamizni doimiy o'qitib va rivojlantirib boramiz. Bu sizning loyihangizga yangi bilimlar, trendlar va texnologiyalarni olib kirish imkonini beradi.",
      alignment: "left",
      delay: "0.5s",
    },
    {
      number: 6,
      description:
        "Biz siz bilan uzoq muddatli hamkorlik o'rnatishga intilamiz va biznesingizning rivojiga sherik bo'lamiz.",
      alignment: "right",
      delay: "0.6s",
    },
  ];

  return (
    <div className="max-w-[1680px] mx-auto p-2 transition-all ease duration-800">
      {/* Hero Section */}
      <div
        ref={sectionRefs.hero}
        className="mt-[310px] md:mt-[305px] lg:mt-[300px] flex lg:justify-center items-left px-2 sm:mx-6 mx-0 opacity-0"
      >
        <div className="hero-1">
          <p className="lg:max-w-[1054px] text-[38px] md:text-5xl lg:text-[50px] sm:mr-20 xl:text-[70px] 2xl:text-[90px] leading-[50px] md:leading-[60px] lg:leading-[60px] xl:leading-[80px] 2xl:leading-[100px] mx-[30px] md:mx-0 text-left">
            Biz bilan birga biznesingizni yangi bosqichga olib chiqing !
          </p>
          <button className="cursor-pointer w-[191px] md:w-[290px] md:h-[60px] h-[40px] md:rounded-[20px] rounded-[14px] hover:bg-white hover:text-black border border-white font-normal text-[17px] md:text-[25px] md:tracking-[-2px] flex justify-center items-center mt-[86px] md:mt-[131px] mx-8 md:mx-0 transition-all duration-200">
            Bog'lanish
          </button>
        </div>
        <p className="md:flex hidden font-['Poppins'] font-medium xl:text-[200px] lg:text-[130px] text-[110px] transform rotate-[7deg] text-white text-shadow-down mb-20">
          77grd
        </p>
      </div>

      {/* Services Section */}
      <section
        ref={sectionRefs.services}
        id="services"
        className="mt-[234px] md:mt-[321px] mx-[30px] opacity-0"
      >
        <h2 className="font-['Poppins'] font-medium text-[30px] md:text-[50px] lg:text-[70px] md:tracking-[-4px] tracking-[-2px] text-white text-center">
          Xizmatlarimiz :
        </h2>

        {/* First row of services */}
        <div className="mt-[47px] md:mt-[163px] justify-items-center grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[30px] md:gap-[22px] lg:gap-[40px]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={sectionRefs.contact} id="contact" className="opacity-0">
        <h1 className="max-w-[1680px] px-10 font-['Poppins'] font-normal text-[35px] md:text-[45px] lg:text-[60px] xl:text-[80px] leading-tight lg:tracking-[-4px] tracking-[-1px] md:tracking-[-3px] md:text-right text-left mt-[76px] md:mt-[213px] mb-[58px] md:mb-[131px] mx-[0px] md:mx-0">
          Xizmatlarimiz va narxlar haqida <br /> ko'proq ma'lumot olmoqchimisiz
          ?
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
              className="cursor-pointer rounded-[14px] px-4 py-2 w-[218px] md:w-[317px] lg:w-[360px] outline-none border border-black text-[#333333] md:mb-[55px] font-['Poppins'] font-light text-[15px] md:text-[25px] lg:text-[30px] transition-all duration-200 hover:bg-black hover:text-white"
            >
              Ariza qoldirish
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
      <section ref={sectionRefs.whyWe} id="whyWe" className="md:mx-4 opacity-0">
        <div className="max-w-[1380px] lg:px-0 md:px-0 px-[45px] flex flex-col mb-20">
          <h1 className="font-['Poppins'] font-normal text-[60px] md:text-[120px] lg:text-[150px] xl:text-[200px] lg:tracking-[-7px] tracking-[-3px] text-left mb-[35px] lg:mb-[145px]">
            Nega Biz ?
          </h1>
          <h1 className="font-['Poppins'] font-normal text-[60px] md:text-[120px] lg:text-[150px] xl:text-[200px] lg:tracking-[-7px] tracking-[-3px] leading-10 md:leading-18 lg:leading-32 text-right mb-[70px] lg:mb-[0px]">
            Chunki :
          </h1>
        </div>

        <div className="flex flex-col gap-[66px]">
          {whyChooseUsItems.map((item, index) => (
            <WhyChooseUsItem key={index} {...item} />
          ))}

          {/* Special centered item */}
          <div
            className="max-w-[1580px] flex justify-center items-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <div className="max-w-[1096px] flex justify-center items-center rounded-[20px] bg-white text-black mx-8 md:mx-0 py-2 px-4 gap-4">
              <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[80px] md:text-[120px] lg:text-[150px] tracking-[-8px]">
                7
              </span>
              <p className="max-w-[828px] font-['Open_Sans'] font-normal text-xs md:text-xl lg:text-3xl lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
                Hamkorlik davomida nafaqat loyiha, balki sizning biznesingiz va
                shaxsiy rivojlanishingiz ham parallel ravishda o'sadi. Biz
                natijaga yo'naltirilgan strategiya va ijodiy yechimlar orqali
                har bir qadamda siz bilan birga rivojlanamiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        ref={sectionRefs.faq}
        id="faq"
        className="mt-[65px] md:mt-[250px] px-7 md:px-8 opacity-0"
      >
        <div className="max-w-[1280px] mx-auto">
          <h1 className="font-['Poppins'] font-normal text-[50px] md:text-[90px] lg:text-[128px] xl:text-[156px] lg:tracking-[-7px] tracking-[-3px] leading-11 md:leading-20 lg:leading-34 text-left mb-[60px] md:mb-[100px] lg:mb-[158px]">
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .text-shadow-down {
          text-shadow: 90px 30px 100px #a9a9a9;
        }
      `}</style>
    </div>
  );
}
