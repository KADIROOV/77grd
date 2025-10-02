"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const languages = [
  { code: "ru", label: "RU" },
  { code: "uz", label: "UZ" },
  { code: "en", label: "EN" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ru");

  // Tashqariga bosganda yopish uchun ref
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (code) => {
    setSelectedLang(code);
    setLangOpen(false);
  };

  return (
    <div
      id="home"
      className="max-w-[1680px] md:mx-auto mx-[35px] flex items-center justify-between pt-[43px] md:px-8"
    >
      {/* Logo */}
      <a href="#home">
        <img
          src="/images/logo_img.svg"
          alt="77 Logo image"
          className="lg:w-[98px] md:w-[76px] w-[70px]"
        />
      </a>

      {/* Desktop Navbar */}
      <nav className="md:flex hidden justify-center items-center lg:gap-[76px] gap-[37px] lg:text-[25px] text-[18px]">
        <a href="#services">Xizmatlar</a>
        <a href="#whyWe">Nega biz ?</a>
        <a href="#faq">FAQ</a>
        <a
          href="#contact"
          className="contact-a text-[16px] lg:text-[20px] lg:w-[153px] lg:h-[39px] w-[140px] h-[36px]"
        >
          Bog'lanish
        </a>
      </nav>

      {/* Desktop Language Selector (CLICK bilan ishlaydi) */}
      <div className="flex gap-4 items-center">
        <div
          ref={langRef}
          className="flex relative w-[127px] h-[40px] border border-white rounded-2xl bg-black items-center justify-center cursor-pointer"
          onClick={() => setLangOpen(!langOpen)}
        >
          <div className="text-white font-medium">
            {languages.find((l) => l.code === selectedLang)?.label}
          </div>
          <IoIosArrowDown
            className={`absolute right-[28px] text-white w-[17px] h-[17px] transition-transform duration-300 ${
              langOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          {langOpen && (
            <div className="absolute top-[45px] left-0 w-full bg-black border border-white rounded-2xl overflow-hidden z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full h-[40px] text-white font-medium hover:bg-white/10 transition-colors ${
                    selectedLang === lang.code ? "bg-white/5" : ""
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Burger */}
        <button
          className="md:hidden transition-all duration-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoMdClose className="w-[43px] h-[44px]" />
          ) : (
            <RxHamburgerMenu className="w-[43px] h-[44px]" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`w-[40%] mx-auto fixed top-14 right-0 text-black flex flex-col items-center z-50 justify-center gap-4 py-2 h-72 rounded-xl text-xl bg-white shadow-lg transform transition-transform duration-300 ease md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <button
            className="absolute right-2 top-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdClose className="w-7 h-7" />
          </button>
          <a href="#services">Xizmatlar</a>
          <a href="#whyWe">Nega biz ?</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Bog'lanish</a>

          {/* Mobile Language Selector */}
          {/* <div
          className="relative w-[127px] h-[40px] border border-white rounded-2xl bg-black items-center justify-center flex cursor-pointer"
          onClick={() => setLangOpen(!langOpen)}
        >
          <div className="text-white font-medium">
            {languages.find((l) => l.code === selectedLang)?.label}
          </div>
          <IoIosArrowDown
            className={`absolute right-[28px] text-white w-[17px] h-[17px] transition-transform duration-300 ${
              langOpen ? "rotate-180" : "rotate-0"
            }`}
          />
          {langOpen && (
            <div className="absolute top-[45px] left-0 w-full bg-black border border-white rounded-2xl overflow-hidden z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang.code)}
                  className={`w-full h-[40px] text-white font-medium hover:bg-white/10 transition-colors ${
                    selectedLang === lang.code ? "bg-white/5" : ""
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div> */}
        </div>
      </div>
    </div>
  );
}
