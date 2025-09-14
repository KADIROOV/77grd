export default function ContactForm({
  phoneNumber,
  handlePhoneChange,
  clientName,
  handleSubmit,
  setClientName,
}) {
  return (
    <div className="max-w-[1280px] flex flex-col lg:flex-row justify-between items-center rounded-[50px] mx-10 md:mx-auto md:mt-[142px] mt-[78px] text-black mb-20">
      <div className="w-full">
        <h2 className="font-['Poppins'] font-normal text-[30px] lg:text-[150px] text-white text-center lg:text-left leading-[160px]  lg:tracking-[-3px] md:mb-[57px] lg:mb-0">
          Taklifingiz bormi?
        </h2>
      </div>

      <div className="max-w-[403px]   rounded-[15px] md:rounded-[30px] bg-white md:px-14 px-[19px] py-[21px] md:py-0 text-black transition-all duration-500 hover:shadow-2xl">
        <div className="flex flex-col items-center justify-center gap-[25px] md:gap-[26px]">
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            className="rounded-[14px] px-4 py-2 w-[240px] md:w-[311px] outline-none border border-black text-[#333333] md:mt-[55px] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px] transition-all duration-300 focus:scale-105 focus:shadow-md"
            placeholder="+998-99-999-99-99"
          />
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="rounded-[14px] px-4 py-2 w-[240px] md:w-[311px] outline-none border border-black text-[#333333] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px] transition-all duration-300 focus:scale-105 focus:shadow-md"
            placeholder="Ismingiz"
          />
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="rounded-[14px] px-4 py-2 w-[240px] md:w-[311px] outline-none border border-black text-[#333333] font-['Poppins'] font-light text-[15px] md:text-[20px] lg:text-[25px] transition-all duration-300 focus:scale-105 focus:shadow-md"
            placeholder="Qisqacha izoh"
          />
          <button
            onClick={handleSubmit}
            className="cursor-pointer rounded-[14px] px-4 py-2 w-[240px] md:w-[311px]  outline-none border border-black text-[#333333] md:mb-[55px] font-['Poppins'] font-light text-[15px] md:text-[25px] lg:text-[30px] hover:bg-gray-50 transition-all duration-300 hover:scale-105"
          >
            Jo'natish
          </button>
        </div>
      </div>
    </div>
  );
}
