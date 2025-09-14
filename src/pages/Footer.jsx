import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="md:h-[170px] bg-white text-black py-12 px-[30px] md:px-[86px] rounded-t-[30px]">
        <div className="flex justify-between items-center">
          <h3 className="font-['Poppins'] font-medium text-[15px] lg:text-[50px]">
            77GRADE MARKETING AGENCY
          </h3>

          <div>
            <div className="flex items-center lg:gap-[70px] gap-[19px]">
              <a
                href="https://www.instagram.com/sarvar.devmrks"
                className="md:text-[70px] text-[30px]  text-black transition-all duration-200 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me/@grade77agency"
                className="md:text-[70px] text-[30px]  text-black transition-all duration-200 transform hover:scale-110"
              >
                <FaTelegram />
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
