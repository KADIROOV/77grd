import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="lg:h-[170px] bg-white text-black md:py-12 py-8 px-[30px] md:px-[50px] lg:px-[86px] rounded-t-[30px]">
        <div className="flex justify-between items-center">
          <h3 className="font-['Poppins'] font-medium md:text-[30px] text-[18px] lg:text-[50px]">
            77GRADE MARKETING AGENCY
          </h3>

          <div>
            <div className="flex items-center lg:gap-[70px] gap-[19px]">
              <a
                href="https://www.instagram.com/sarvar.devmrks"
                className="lg:text-[70px] md:text-[58px] text-[30px]  text-black"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me/@grade77agency"
                className="lg:text-[70px] md:text-[58px] text-[30px]  text-black"
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
