import { useEffect } from "react";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    // Custom cursor setup
    const cursor = document.createElement("div");
    cursor.id = "cursor-dot";
    Object.assign(cursor.style, {
      position: "fixed",
      width: "18px", // Kichik dot uchun o'lcham
      height: "18px",
      background: "white", // Boshlang'ich rang (oq, chunki fon qora)
      borderRadius: "50%",
      pointerEvents: "none", // Sichqoncha ta'sirini bloklamaslik uchun
      zIndex: "9999",
      transition: "background 0.1s ease", // Rang o'zgarishini smooth qilish
      mixBlendMode: "difference", // Opsiyonal: Fon bilan kontrast uchun (qora/oq avto)
    });
    document.body.appendChild(cursor);

    let rafId; // requestAnimationFrame uchun

    // Rangni parse qilish va white-ish ekanligini tekshirish
    const isLightBackground = (bgColor) => {
      if (
        !bgColor ||
        bgColor === "transparent" ||
        bgColor === "rgba(0, 0, 0, 0)"
      ) {
        return false; // Shaffof yoki qora deb hisoblaymiz
      }

      // RGB formatini parse qilish (hex yoki named ranglarni ham qo'llab-quvvatlash uchun)
      let r, g, b;
      if (bgColor.startsWith("rgb")) {
        const matches = bgColor.match(/\d+/g);
        if (matches) [r, g, b] = matches.map(Number);
      } else if (bgColor.startsWith("#")) {
        // Hex to RGB (oddiy, to'liq hex uchun kengaytirsa bo'ladi)
        const hex = bgColor.replace("#", "");
        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);
      } else {
        // Named ranglar uchun (masalan, "white" → true)
        return bgColor.toLowerCase().includes("white");
      }

      // Luminance hisoblash (0-255 orasida)
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance > 200; // 200+ bo'lsa "light" (oq-ish) deb hisoblaymiz
    };

    // Throttled mousemove handler (requestAnimationFrame bilan)
    const move = (e) => {
      if (rafId) return; // Oldingi frame'ni bekor qilish

      rafId = requestAnimationFrame(() => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        // Element va uning fonini topish
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el) {
          const bg = window.getComputedStyle(el).backgroundColor;
          cursor.style.background = isLightBackground(bg) ? "black" : "white";
        }

        rafId = null;
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      cursor.remove();
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div className="bg-black text-white relative min-h-screen">
      <img
        src="/images/bg_shadow.svg"
        className="absolute right-0 md:top-[648px] top-[937px] z-0"
        alt=""
      />
      <img
        src="/images/bg_shadow2.svg"
        className="absolute left-0 top-[2417px] hidden md:block z-0"
        alt=""
      />

      <div className="relative z-10">
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}
