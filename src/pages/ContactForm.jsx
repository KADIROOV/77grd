export default function ContactForm({
  phoneNumber,
  handlePhoneChange,
  clientName,
  clientComment,
  handleSubmit,
  setClientName,
  setClientComment,
}) {
  return (
    <div className="max-w-[1280px] flex flex-col lg:flex-row items-center  justify-center rounded-[50px] lg:mx-6 md:mx-auto xl:mx-auto lg:mt-[347px] md:mt-[142px] mt-[78px] text-black lg:mb-[289px] md:mb-[315px] mb-[147px] ">
      <div className="">
        <h2 className="font-['Poppins'] font-normal text-[30px] sm:text-[60px] xl:text-[150px] lg:text-[120px] text-white text-center lg:text-left leading-[160px]  lg:tracking-[-14px] md:mb-[57px] lg:mb-0">
          Xizmatimiz kerakmi ?
        </h2>
      </div>

      <div className="max-w-[403px]   rounded-[15px] md:rounded-[30px] bg-white md:px-14 px-[29px] py-[21px] md:py-0 text-black">
        <div className="flex flex-col items-center justify-center gap-[25px] md:gap-[26px]">
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="rounded-[14px] px-4 py-2 w-[240px] md:w-[311px] outline-none border border-black text-[#333333] md:mt-[55px] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px] "
            placeholder="+998-99-999-99-99"
          />
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="rounded-[14px] px-4 py-2 w-[240px] md:w-[311px] outline-none border border-black text-[#333333] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px] "
            placeholder="Ismingiz"
          />
          <input
            type="text"
            value={clientComment}
            onChange={(e) => setClientComment(e.target.value)}
            className="rounded-[14px] px-4 py-2 w-[240px] md:w-[311px] outline-none border border-black text-[#333333] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px] "
            placeholder="Qisqacha izoh"
          />
          <button
            onClick={handleSubmit}
            className=" konsultat-btn cursor-pointer rounded-[14px] px-4 py-2 w-[240px] md:w-[311px]  outline-none  text-[#000000] md:mb-[55px] font-['Poppins'] font-light text-[15px] md:text-[25px] lg:text-[30px] bg-[#77E095] "
          >
            Jo'natish
          </button>
        </div>
      </div>
    </div>
  );
}
