import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-[1580px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="font-['Poppins'] font-medium text-2xl md:text-3xl">
              77GRADE MARKETING AGENCY
            </h3>
            <p className="font-['Open_Sans'] font-normal text-sm md:text-base mt-2 text-gray-400">
              Biznesingizni yangi bosqichga olib chiqing
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-telegram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
            <div>
              <FaInstagram />
              <FaTelegram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
