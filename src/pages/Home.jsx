import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  console.log(text);

  const formatPhone = (number) => {
    // faqat raqamlarni olamiz
    let digits = number.replace(/\D/g, "");

    // 13 ta belgidan oshmasin (+998991234567)
    if (digits.length > 12) digits = digits.slice(0, 12);

    // formatlash
    let result = "+";
    if (digits.length > 0) result += digits.slice(0, 3); // 998
    if (digits.length > 3) result += "-" + digits.slice(3, 5); // 99
    if (digits.length > 5) result += "-" + digits.slice(5, 8); // 596
    if (digits.length > 8) result += "-" + digits.slice(8, 10); // 65
    if (digits.length > 10) result += "-" + digits.slice(10, 12); // 64

    return result;
  };

  const handleChange = (e) => {
    setNumber(formatPhone(e.target.value));
  };
  return (
    <div className="max-w-[1580px] mx-auto transition-all ease duration-800">
      <div className="md:mt-[215px] mt-[207px] flex lg:justify-center items-start px-2">
        <div className="hero-1">
          <p className=" lg:max-w-[1054px] max-w-[731px] md:leading-[80px] xl:leading-[100px] leading-[40px] xl:text-[90px] md:text-[80px] text-[40px] lg:text-start text-center">
            Biz bilan birga biznesingizni yangi bosqichga olib chiqing!
          </p>
          <button className="cursor-pointer lg:w-[290px] w-[191px]  h-[60px] rounded-[20px] hover:border-[#808080]  border-[1px] border-white font-normal md:text-[25px] text-[17px] tracking-[-2px] flex justify-center items-center mt-[131px] ">
            Bog'lanish
          </button>
        </div>
        <p className="lg:flex hidden font-['Poppins']  font-medium xl:text-[200px] text-[150px] transform rotate-[7deg] text-white text-shadow-down">
          77grd
        </p>
      </div>

      <div
        id="services"
        className="md:mt-[321px] mt-[234px] max-w-full mx-auto px-4"
      >
        <h2 className="font-['Poppins'] font-medium md:text-[70px] text-[30px] md:tracking-[-4px] tracking-[-2px]  text-white text-center">
          Xizmatlarimiz :
        </h2>
        <div className="md:t-[163px] mt-[47px] grid grid-cols-1 lg:grid-cols-3 gap-[50px]">
          <div className="flex flex-col justify-between rounded-[40px] px-[20px] py-[30px] bg-white shadow-lg">
            <div>
              <h4 className="font-['Poppins'] font-medium text-[40px] text-black tracking-[-2px] text-center">
                Marketing
              </h4>
              <p className="max-w-[90%] mx-auto font-['Poppins'] font-normal text-[20px] text-[#424242] mt-6 mb-8 text-center">
                Biznesingizni ijtimoiy tarmoqlarda ommalashtirish, sotuv va
                obunachilar oqimini ko‘paytirish.
              </p>
            </div>
            <img
              src="/images/card1_img.png"
              alt="marketing image"
              className="mx-auto max-h-[220px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-between rounded-[40px] px-[20px] py-[30px] bg-white shadow-lg">
            <div>
              <h4 className="font-['Poppins'] font-medium text-[40px] text-black tracking-[-2px] text-center">
                Website
              </h4>
              <p className="max-w-[90%] mx-auto font-['Poppins'] font-normal text-[20px] text-[#424242] mt-6 mb-8 text-center">
                Kompaniyangiz uchun zamonaviy va qulay web-site yaratish,
                mijozlar bilan aloqa va savdolarni onlayn rivojlantirish.
              </p>
            </div>
            <img
              src="/images/card2_img.png"
              alt="website image"
              className="mx-auto max-h-[220px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-between rounded-[40px] px-[20px] py-[30px] bg-white shadow-lg">
            <div>
              <h4 className="font-['Poppins'] font-medium text-[40px] text-black tracking-[-2px] text-center">
                Shaxsiy brend
              </h4>
              <p className="max-w-[90%] mx-auto font-['Poppins'] font-normal text-[20px] text-[#424242] mt-6 mb-8 text-center">
                Tadbirkor yoki mutaxassis sifatida onlayn imidjingizni
                shakllantirish, kontent va reklama orqali ko‘proq auditoriyaga
                yetib borish.
              </p>
            </div>
            <img
              src="/images/card3_img.png"
              alt="personal brand image"
              className="mx-auto max-h-[220px] object-contain"
            />
          </div>
        </div>

        <div className="mt-[163px] grid grid-cols-1 md:grid-cols-3 gap-[50px]">
          <div className="flex flex-col justify-between rounded-[40px] px-[20px] py-[30px] bg-white shadow-lg">
            <div>
              <h4 className="font-['Poppins'] font-medium text-[40px] text-black tracking-[-2px] text-center">
                Brending
              </h4>
              <p className="max-w-[90%] mx-auto font-['Poppins'] font-normal text-[20px] text-[#424242] mt-6 mb-8 text-center">
                Logotip, firma uslubi va marketing materiallari orqali brend
                imidjini shakllantirish, mustahkamlash hamda uni auditoriya
                xotirasida esda qolarli qilish.
              </p>
            </div>
            <img
              src="/images/card4_img.png"
              alt="marketing image"
              className="mx-auto max-h-[220px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-between rounded-[40px] px-[20px] py-[30px] bg-white shadow-lg">
            <div>
              <h4 className="font-['Poppins'] font-medium text-[40px] text-black tracking-[-2px] text-center">
                CRM-bot
              </h4>
              <p className="max-w-[90%] mx-auto font-['Poppins'] font-normal text-[20px] text-[#424242] mt-6 mb-8 text-center">
                Mijozlar bilan ishlashni avtomatlashtirish, buyurtmalarni
                boshqarish va sotuvlarni yengillashtirish vositasi.
              </p>
            </div>
            <img
              src="/images/card5_img.png"
              alt="website image"
              className="mx-auto max-h-[220px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-between rounded-[40px] px-[20px] py-[30px] bg-white shadow-lg">
            <div>
              <h4 className="font-['Poppins'] font-medium text-[40px] text-black tracking-[-2px] text-center">
                Special Taklif
              </h4>
              <p className="max-w-[90%] mx-auto font-['Poppins'] font-normal text-[20px] text-[#424242] mt-6 mb-8 text-center">
                Biznesingizni ijtimoiy tarmoqlarda ommalashtirish, mijozlar
                oqimini ko‘paytirish, zamonaviy veb-sayt yaratish va kuchli
                brend imidjini shakllantirish.
              </p>
            </div>
            <img
              src="/images/card6_img.png"
              alt="personal brand image"
              className="mx-auto max-h-[220px] object-contain"
            />
          </div>
        </div>
      </div>

      <div id="contact" className="px-2">
        <h1 className="font-['Poppins'] font-normal lg:text-[80px] md:text-[60px] text-[35px] leading-[-7px] lg:tracking-[-7px] tracking-[-1px]  md:tracking-[-6px] md:text-right text-left md:mt-[213px] mt-[76px] mb-[131px] mx-2">
          Xizmatlarimiz va narxlar haqida ko‘proq ma’lumot olmoqchimisiz ?
        </h1>
        <div className="max-w-[1580px] flex lg:flex-row flex-col lg:justify-around justify-center items-center  lg:text-left text-center rounded-[50px]  bg-white mx-auto text-black lg:mb-[441px] md:mb-[303px] mb-[151px]">
          <h2 className="max-w-[601px] font-['Poppins'] font-normal md:text-[90px] text-[30px] md:leading-[80px] leading-[34px] tracking-[-3px] mt-[42px]">
            Unda biz bilan bog’laning !
          </h2>
          <div className="flex-col flex lg:items-start items:center justify-center gap-[12px] md:gap-[26px]">
            <input
              type="tel"
              value={number}
              onChange={handleChange}
              className=" rounded-[14px] px-4 py-2 lg:w-[360px] md:w-[317px] w-[218px] outline-none border-[1px] border-black text-[#333333] mt-[55px] font-['Poppins'] font-light text-[15px]  md:text-[25px]"
              placeholder="+998-99-999-99-99"
            />
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className=" rounded-[14px] px-4 py-2 lg:w-[360px] md:w-[317px] w-[218px] outline-none border-[1px] border-black text-[#333333] font-['Poppins'] font-light text-[15px]  md:text-[25px]"
              placeholder="Ismingiz"
            />
            <button
              className="cursor-pointer rounded-[14px] px-4 py-2 lg:w-[360px] md:w-[317px] w-[218px] outline-none border-[1px] border-black text-[#333333] mb-[55px] font-['Poppins'] font-light text-[15px]  md:text-[30px]"
              placeholder="Ismingiz"
            >
              Ariza qoldirish
            </button>
          </div>
        </div>
      </div>

      <div id="whyWe" className="md:mx-4">
        <div className="max-w-[1380px] lg:px-0 md:px-0 px-[45px] flex flex-col">
          <h1 className="font-['Poppins'] font-normal lg:text-[200px] md:text-[150px] text-[50px] lg:tracking-[-7px] tracking-[-3px]  text-left lg:mb-[158px] mb-[40px]">
            Nega Biz?
          </h1>
          <h1 className="font-['Poppins'] font-normal lg:text-[200px] md:text-[150px] text-[50px]  lg:tracking-[-7px] tracking-[-3px]  text-right lg:mb-[131px] mb-[80px]">
            Chunki:
          </h1>
        </div>
        <div className="flex flex-col gap-[66px]">
          <div className="max-w-[1580] flex lg:justify-start  justify-center  items-start">
            <div className="lg:max-w-[747px]   flex justify-center items-center  rounded-[30px] bg-white text-black py-2 px-4 gap-4">
              <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[150px] leading-[150px] tracking-[-8px]">
                1
              </span>
              <p className="max-w-[534px] font-['Open_Sans'] font-normal md:text-[30px] text-[12px] lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
                Bizning ishimiz nafaqat chiroyli ko‘rinadi, balki real natija
                ham beradi. Haftalik va oylik hisobotlar orqali siz loyihaning
                qayerga ketayotganini aniq ko‘rasiz.
              </p>
            </div>
          </div>

          <div className="max-w-[1580px] flex lg:justify-end  justify-center  items-end">
            <div className="lg:max-w-[664px] flex justify-center items-center rounded-[30px] bg-white text-black py-2 px-4 gap-4">
              <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[150px] leading-[150px] tracking-[-8px]">
                2
              </span>
              <p className="max-w-[511px] font-['Open_Sans'] font-normal md:text-[30px] text-[12px] lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
                Bizning kontent va dizayn bo‘yicha kreativ yechimlar bazamiz
                doimiy yangilanib boradi va mijozning talablarini qondiradi
              </p>
            </div>
          </div>

          <div className="max-w-[1580px] flex lg:justify-start  justify-center  items-start">
            <div className="max-w-[684px]   flex justify-center items-center rounded-[30px] bg-white text-black py-2 px-4 gap-4">
              <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[150px] leading-[150px] tracking-[-8px]">
                3
              </span>
              <p className="max-w-[476px] font-['Open_Sans'] font-normal md:text-[30px] text-[12px] lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
                Bizda marketing , dizayn, kontent va boshqaruv bo‘yicha
                tajribali mutaxassislar bor, har biri vazifasini professional
                bajaradi.
              </p>
            </div>
          </div>

          <div className="max-w-[1580px] flex lg:justify-end  justify-center  items-end">
            <div className="max-w-[650px]   flex justify-center items-center rounded-[30px] bg-white text-black py-2 px-4 gap-4">
              <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[150px] leading-[150px] tracking-[-8px]">
                4
              </span>
              <p className="max-w-[476px] font-['Open_Sans'] font-normal md:text-[30px] text-[12px] lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
                Biz vaqtingizni qadrlaymiz. Shu sababli ishlar belgilangan
                muddatda topshiriladi. Muddatlar biz uchun majburiyat, siz uchun
                esa kafolatdir.
              </p>
            </div>
          </div>

          <div className="max-w-[1580px] flex lg:justify-start  justify-center  items-start">
            <div className="max-w-[650px]   flex justify-center items-center rounded-[30px] bg-white text-black py-2 px-4 gap-4">
              <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[150px] leading-[150px] tracking-[-8px]">
                5
              </span>
              <p className="max-w-[411px] font-['Open_Sans'] font-normal md:text-[30px] text-[12px] lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
                Biz jamoamizni doimiy o‘qitib va rivojlantirib boramiz. Bu
                sizning loyihangizga yangi bilimlar, trendlar va
                texnologiyalarni olib kirish imkonini beradi.
              </p>
            </div>
          </div>

          <div className="max-w-[1580px] flex lg:justify-end  justify-center  items-end">
            <div className="max-w-[650px]   flex justify-center items-center rounded-[30px] bg-white text-black py-2 px-4 gap-4">
              <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[150px] leading-[150px] tracking-[-8px]">
                6
              </span>
              <p className="max-w-[411px] font-['Open_Sans'] font-normal md:text-[30px] text-[12px] lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
                Biz siz bilan uzoq muddatli hamkorlik o‘rnatishga intilamiz va
                biznesingizning rivojiga sherik bo‘lamiz.
              </p>
            </div>
          </div>

          <div className="max-w-[1580px] flex lg:justify-center  justify-center  items-center">
            <div className="max-w-[1096px]   flex justify-center items-center rounded-[30px] bg-white text-black py-2 px-4 gap-4">
              <span className="w-[173px] flex justify-center items-center font-['Poppins'] font-normal text-[150px] leading-[150px] tracking-[-8px]">
                7
              </span>
              <p className="max-w-[828px] font-['Open_Sans'] font-normal md:text-[30px] text-[12px] lg:leading-[35px] lg:tracking-[-2px] flex justify-center items-center">
                Hamkorlik davomida nafaqat loyiha, balki sizning biznesingiz va
                shaxsiy rivojlanishingiz ham parallel ravishda o‘sadi. Biz
                natijaga yo‘naltirilgan strategiya va ijodiy yechimlar orqali
                har bir qadamda siz bilan birga rivojlanamiz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
