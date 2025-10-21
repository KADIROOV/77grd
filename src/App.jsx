import { useEffect } from "react";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    // Zamonaviy usul: hover va fine pointer (sichqoncha) borligini tekshirish
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const hasMouse = mediaQuery.matches;

    // Agar matchMedia qo'llab-quvvatlanmasa (eski brauzerlar), desktop deb hisoblaymiz
    if (!window.matchMedia) {
      // Eski brauzerlarda oddiygina mouse deb hisoblaymiz
      const hasMouseFallback = "ontouchstart" in window ? false : true;
      if (!hasMouseFallback) return;
    } else if (!hasMouse) return; // Mouse bo'lmasa, cursor yaratmaslik

    // Custom cursor setup
    const cursor = document.createElement("div");
    cursor.id = "cursor-dot";
    Object.assign(cursor.style, {
      position: "fixed",
      width: "18px", // Kichik dot uchun o'lcham
      height: "18px",
      background: "white", // Boshlang'ich rang (oq, chunki fon qora deb hisoblaymiz)
      borderRadius: "50%",
      pointerEvents: "none", // Sichqoncha ta'sirini bloklamaslik uchun
      zIndex: "999",
      transition: "background 0.3s ease", // Rang o'zgarishini smooth qilish
      // mixBlendMode ni olib tashladik, chunki u ranglarni buzib yuborayotgan edi (masalan, pushti rang)
    });
    document.body.appendChild(cursor);

    let rafId; // requestAnimationFrame uchun

    // Effektiv fon rangini olish (shaffof bo'lsa, ota elementgacha ko'tarilish)
    const getEffectiveBackgroundColor = (el) => {
      let current = el;
      while (current && current !== document.documentElement) {
        const bg = window.getComputedStyle(current).backgroundColor;
        if (bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
          return bg;
        }
        current = current.parentElement;
      }
      // Hujjatning asosiy fonini olish (body yoki html)
      return (
        window.getComputedStyle(document.body).backgroundColor || "rgb(0, 0, 0)"
      );
    };

    // Rangni parse qilish va light/dark ekanligini tekshirish (faqat oq/qora, boshqa rang yo'q)
    const isLightBackground = (bgColor) => {
      // Computed style har doim rgba formatida bo'ladi, shuning uchun oddiy parse
      const matches = bgColor.match(/(\d+)/g);
      if (!matches || matches.length < 3) {
        return false; // Noma'lum bo'lsa, qorong'u deb hisoblaymiz
      }
      const [r, g, b] = matches.slice(0, 3).map(Number);
      // Luminance hisoblash (YIQ formula bo'yicha)
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance > 128; // 128+ bo'lsa light (oq-ish), cursor qora bo'ladi
    };

    // Throttled mousemove handler (requestAnimationFrame bilan)
    const move = (e) => {
      if (rafId) return; // Oldingi frame'ni bekor qilish

      rafId = requestAnimationFrame(() => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

        // Element va uning effektiv fonini topish
        const el = document.elementFromPoint(e.clientX, e.clientY);
        if (el) {
          const bg = getEffectiveBackgroundColor(el);
          // Faqat oq yoki qora: light bo'lsa qora, dark bo'lsa oq
          cursor.style.background = isLightBackground(bg) ? "black" : "white";
        }

        rafId = null;
      });
    };

    window.addEventListener("mousemove", move);

    // Media query o'zgarishini kuzatish (masalan, touch qurilmada mouse ulanganda)
    const handleChange = (e) => {
      if (!e.matches) {
        // Agar mouse yo'qolgan bo'lsa, cursor ni olib tashlash
        cursor.remove();
        window.removeEventListener("mousemove", move);
      } else {
        // Qayta ishga tushirish
        document.body.appendChild(cursor);
        window.addEventListener("mousemove", move);
      }
    };
    if (window.matchMedia) {
      mediaQuery.addEventListener("change", handleChange);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      cursor.remove();
      window.removeEventListener("mousemove", move);
      if (window.matchMedia) {
        mediaQuery.removeEventListener("change", handleChange);
      }
    };
  }, []);

  return (
    <div className="bg-black text-white relative">
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    </div>
  );
}
