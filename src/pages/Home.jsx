import { useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import { FiPlus } from "react-icons/fi";

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [clientName, setClientName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isFaqAnimating, setIsFaqAnimating] = useState(false);

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

  const handlePhoneChange = (e) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  const handleSubmit = () => {
    // Form submit logic bu yerga
    console.log("Phone:", phoneNumber, "Name:", clientName);
  };

  // FAQ toggle function - animatsiyasiz
  const toggleFaq = (index) => {
    if (isFaqAnimating) return;

    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Service card component - animatsiya qo'shilgan
  const ServiceCard = ({ title, description, imageSrc, altText, delay }) => (
    <div
      className={`flex flex-col justify-between rounded-[40px]  pt-7 mx-8 md:mx-0 bg-white shadow-lg transform transition-all duration-400 hover:-translate-y-3 opacity-0 ${
        isVisible ? "animate-fade-in-up" : ""
      }`}
      style={{ animationDelay: delay }}
    >
      <div>
        <h4 className="font-['Poppins'] font-medium text-2xl md:text-3xl lg:text-4xl text-black tracking-[-2px] text-center">
          {title}
        </h4>
        <p className="max-w-[90%] mx-auto font-['Poppins'] font-normal text-sm md:text-base lg:text-xl text-[#424242] mt-6 mb-6 md:mb-8 text-center">
          {description}
        </p>
      </div>
      <img
        src={imageSrc}
        alt={altText}
        className="max-w-[547px] mx-auto  max-h-[220px] object-contain"
      />
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

  // FAQ Item Component - animatsiyasiz
  const FaqItem = ({ question, answer, index }) => (
    <div>
      <div
        onClick={() => toggleFaq(index)}
        className={`md:rounded-[25px] rounded-[8px] relative  bg-white text-black overflow-hidden px-8 md:py-8 py-2  cursor-pointer hover:bg-gray-50 transition-colors duration-200 ${
          openFaqIndex === index ? "max-h-96" : "max-h-[43px]  md:max-h-[81px]"
        }`}
      >
        <div className="max-w-[211px] md:max-w-full mb-[31px]">
          <p className="font-['Poppins'] font-normal md:text-[35px] text-[15px] tracking-[-1px] md:leading-[40px] leading-[15px]  md:tracking-[-3px]">
            {question}
          </p>
          <span
            className="absolute right-4 md:top-6 top-3  text-2xl md:text-4xl ml-2 transition-transform duration-200"
            style={{
              transform: openFaqIndex === index ? "rotate(45deg)" : "rotate(0)",
            }}
          >
            <FiPlus />
          </span>
        </div>
        <div>
          <p
            className={`font-['Open_Sans'] font-light text-base md:text-lg lg:text-xl text-black tracking-[-1px]`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );

  // Services data
  const services = [
    {
      title: "Marketing",
      description:
        "Biznesingizni ijtimoiy tarmoqlarda ommalashtirish, sotuv va obunachilar oqimini ko'paytirish.",
      imageSrc: "/images/card1_img.png",
      altText: "marketing image",
      delay: "0.1s",
    },
    {
      title: "Website",
      description:
        "Kompaniyangiz uchun zamonaviy va qulay web-site yaratish, mijozlar bilan aloqa va savdolarni onlayn rivojlantirish.",
      imageSrc: "/images/card2_img.png",
      altText: "website image",
      delay: "0.2s",
    },
    {
      title: "Shaxsiy brend",
      description:
        "Tadbirkor yoki mutaxassis sifatida onlayn imidjingizni shakllantirish, kontent va reklama orqali ko'proq auditoriyaga yetib borish.",
      imageSrc: "/images/card3_img.png",
      altText: "personal brand image",
      delay: "0.3s",
    },
    {
      title: "Brending",
      description:
        "Logotip, firma uslubi va marketing materiallari orqali brend imidjini shakllantirish, mustahkamlash hamda uni auditoriya xotirasida esda qolarli qilish.",
      imageSrc: "/images/card4_img.png",
      altText: "brending image",
      delay: "0.4s",
    },
    {
      title: "Telegram bot",
      description:
        "Mijozlar bilan ishlashni avtomatlashtirish, buyurtmalarni boshqarish va sotuvlarni yengillashtirish vositasi.",
      imageSrc: "/images/card5_img.png",
      altText: "telegram bot image",
      delay: "0.5s",
    },
    {
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

  // FAQ ma'lumotlari
  const faqData = [
    {
      question: "Shaxsiy brend savdo va ishonchga qanday ta'sir qiladi?",
      answer:
        "Odamlar mahsulot yoki xizmatni ko'pincha kampaniya emas, balki uning ortidagi shaxsga ishonib sotib olishadi. Agar sizning shaxsiy brendingiz kuchli bo'lsa — mijozlar sizga ko'proq ishonadi, shu ishonch esa savdo o'sishiga olib keladi.",
      delay: "0.1s",
    },
    {
      question:
        "Tadbirkor uchun shaxsiy brend rivojlantirish nima uchun zarur?",
      answer:
        "Shaxsiy brend sizga raqobatdosh ustunlik beradi, mijozlar ishonchini oshiradi va sizni sohangizning yetakchi mutaxassisi sifatida ko'rsatadi. Bu esa yangi imkoniyatlar va hamkorliklar ochadi.",
      delay: "0.2s",
    },
    {
      question: "Veb-sayt ijtimoiy tarmoqlardan qaysi jihatlarda ustun?",
      answer:
        "Veb-sayt - bu sizning onlayn ofisingiz. U doimiy, ishonchli va barcha ma'lumotlaringizni bitta joyda jamlaydi. Ijtimoiy tarmoqlar algoritmlarga bog'liq, veb-sayt esa to'liq sizning nazoratingizda.",
      delay: "0.3s",
    },
    {
      question: "Marketing SMM o'zi kerakmi va nimaga?",
      answer:
        "SMM - bu zamonaviy marketingning muhim qismi. U auditoriya bilan to'g'ridan-to'g'ri aloqa o'rnatish, brendni insoniylashtirish va sotuvlarni oshirish imkoniyatini beradi. Lekin u boshqa marketing kanallari bilan integratsiyada eng yaxshi samara beradi.",
      delay: "0.4s",
    },
    {
      question: "Qaysi xizmatni maslahat beramiz?",
      answer:
        "Biz sizning biznesingizni tahlil qilamiz va ehtiyojlaringizga qarab eng samarali yechimni taklif etamiz. Ba'zi mijozlar uchun faqat SMM yetarli bo'lsa, boshqalari uchun kompleks yondashuv kerak bo'ladi.",
      delay: "0.5s",
    },
  ];

  return (
    <div className="max-w-[1580px] mx-auto transition-all ease duration-800">
      {/* Hero Section */}
      <div
        ref={sectionRefs.hero}
        className="mt-[207px] md:mt-[215px] flex lg:justify-center items-start px-2 opacity-0"
      >
        <div className="hero-1">
          <p className="lg:max-w-[1054px] text-3xl md:text-5xl lg:text-6xl xl:text-[90px] leading-[40px] md:leading-[60px] lg:leading-[80px] xl:leading-[100px] mx-8 md:mx-0 text-start">
            Biz bilan birga biznesingizni yangi bosqichga olib chiqing!
          </p>
          <button className="cursor-pointer w-[191px] lg:w-[290px] md:h-[60px] h-[40px] rounded-[10px] hover:bg-white hover:text-black border border-white font-normal text-[17px] md:text-[25px] md:tracking-[-2px] flex justify-center items-center mt-[86px] md:mt-[131px] mx-8 md:mx-0 transition-all duration-200 hover:scale-105">
            Bog'lanish
          </button>
        </div>
        <p className="lg:flex hidden font-['Poppins'] font-medium xl:text-[200px] text-[150px] transform rotate-[7deg] text-white text-shadow-down">
          77grd
        </p>
      </div>

      {/* Services Section */}
      <section
        ref={sectionRefs.services}
        id="services"
        className="mt-[234px] md:mt-[321px] max-w-full mx-auto px-4 opacity-0"
      >
        <h2 className="font-['Poppins'] font-medium text-3xl md:text-5xl lg:text-[70px] md:tracking-[-4px] tracking-[-2px] text-white text-center">
          Xizmatlarimiz :
        </h2>

        {/* First row of services */}
        <div className="mt-[47px] md:mt-[163px] grid grid-cols-1 lg:grid-cols-3 gap-[50px]">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Second row of services */}
        <div className="mt-[163px] grid grid-cols-1 md:grid-cols-3 gap-[50px]">
          {services.slice(3, 6).map((service, index) => (
            <ServiceCard key={index + 3} {...service} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={sectionRefs.contact}
        id="contact"
        className="px-2 opacity-0"
      >
        <h1 className="font-['Poppins'] font-normal text-[35px] md:text-[45px] lg:text-[60px] xl:text-[80px] leading-tight lg:tracking-[-7px] tracking-[-1px] md:tracking-[-6px] text-left mt-[76px] md:mt-[213px] mb-[58px] md:mb-[131px] mx-[53px] md:mx-2">
          Xizmatlarimiz va narxlar haqida ko'proq ma'lumot olmoqchimisiz ?
        </h1>

        <div className="max-w-[1580px] flex lg:flex-row flex-col lg:justify-around justify-center items-center lg:text-left md:text-center rounded-[30px] bg-white mx-14 md:mx-auto md:px-14 px-[42px] md:py-0 py-[40px] text-black mb-[151px] md:mb-[303px] lg:mb-[441px] transition-all duration-500 hover:shadow-2xl">
          <h2 className="max-w-[601px] font-['Poppins'] font-normal text-[30px] md:text-[60px] lg:text-[80px] xl:text-[90px] leading-[34px] md:leading-[70px] lg:leading-[80px] tracking-[-3px] md:mt-[42px]">
            Unda biz bilan bog'laning !
          </h2>

          <div className="flex flex-col lg:items-start items-center justify-center gap-3 md:gap-[26px]">
            <input
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneChange}
              className="rounded-[14px] px-4 py-2 w-[218px] md:w-[317px] lg:w-[360px] outline-none border border-black text-[#333333] md:mt-[55px] mt-[27px] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px] transition-all duration-300 focus:scale-105 focus:shadow-md"
              placeholder="+998-99-999-99-99"
            />
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              className="rounded-[14px] px-4 py-2 w-[218px] md:w-[317px] lg:w-[360px] outline-none border border-black text-[#333333] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px] transition-all duration-300 focus:scale-105 focus:shadow-md"
              placeholder="Ismingiz"
            />
            <button
              onClick={handleSubmit}
              className="cursor-pointer rounded-[14px] px-4 py-2 w-[218px] md:w-[317px] lg:w-[360px] outline-none border border-black text-[#333333] md:mb-[55px] font-['Poppins'] font-light text-[15px] md:text-[25px] lg:text-[30px] hover:bg-gray-50 transition-all duration-300 hover:scale-105"
            >
              Ariza qoldirish
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section ref={sectionRefs.whyWe} id="whyWe" className="md:mx-4 opacity-0">
        <div className="max-w-[1380px] lg:px-0 md:px-0 px-[45px] flex flex-col">
          <h1 className="font-['Poppins'] font-normal text-[60px] md:text-[120px] lg:text-[150px] xl:text-[200px] lg:tracking-[-7px] tracking-[-3px] text-left mb-[40px] lg:mb-[158px]">
            Nega Biz?
          </h1>
          <h1 className="font-['Poppins'] font-normal text-[60px] md:text-[120px] lg:text-[150px] xl:text-[200px] lg:tracking-[-7px] tracking-[-3px] text-right mb-[80px] lg:mb-[131px]">
            Chunki:
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
            <div className="max-w-[1096px] flex justify-center items-center rounded-[20px] bg-white text-black mx-8 md:mx-0 py-2 px-4 gap-4 transition-all duration-300 hover:scale-105">
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

      {/* FAQ Section - YANGI QO'SHILGAN */}
      <section
        ref={sectionRefs.faq}
        id="faq"
        className="mt-[65px] md:mt-[250px] px-4 md:px-8 opacity-0"
      >
        <div className="max-w-[1280px] mx-auto">
          <h1 className="font-['Poppins'] font-normal text-[40px] md:text-[80px] lg:text-[120px] xl:text-[150px] lg:tracking-[-7px] tracking-[-3px] leading-10 md:leading-18 lg:leading-32 text-left mb-[60px] md:mb-[100px]">
            Savollarga <br /> Javoblar :
          </h1>

          <div className="flex flex-col gap-[47px]">
            {faqData.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section - YANGI QO'SHILGAN */}
      <section>
        <ContactForm />
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
