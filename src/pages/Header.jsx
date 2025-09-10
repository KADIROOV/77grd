import { useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      id="home"
      className="max-w-[1920px] mx-auto flex items-center justify-around pt-[43px] px-2"
    >
      <a href="#home">
        <img
          src="/images/logo_image.svg"
          alt="77 Logo image"
          className="w-[61px] h-[78px]"
        />
      </a>
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
      <div className=" hidden md:flex bg-black w-[127px] h-[40px] p-[1.5px] relative border-[1px] border-white justify-center items-center rounded-2xl">
        <select
          name="lang"
          id="languages"
          className="appearance-none w-full text-center bg-black rounded-2xl"
        >
          <option value="uz">UZ</option>
          <option value="ru">RU</option>
          <option value="en">EN</option>
        </select>
        <IoIosArrowDown className="absolute right-[30px] top-2.5 w-[17px] h-[17px]" />
      </div>
      <button
        className="md:hidden  transition-all duration-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoMdClose className="w-7 h-7" />
        ) : (
          <RxHamburgerMenu className="w-7 h-7" />
        )}
      </button>

      <div
        className={`fixed top-26 right-0 text-black flex flex-col items-center justify-center gap-4 py-2 h-72 w-full rounded-xl text-xl bg-white shadow-lg transform transition-transform duration-300 ease md:hidden
  ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <a href="#services">Xizmatlar</a>
        <a href="#whyWe">Nega biz ?</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Bog'lanish</a>

        <div className="flex bg-black w-[127px] h-[40px] p-[1.5px] relative border-[1px] border-white justify-center items-center rounded-2xl">
          <select
            name="lang"
            id="languages"
            className="appearance-none w-full text-center bg-black rounded-2xl"
          >
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>
          <IoIosArrowDown className="absolute right-[28px] text-white top-2.5 w-[17px] h-[17px]" />
        </div>
      </div>
    </div>
  );
}
