import { useEffect } from "react";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    // custom cursor yaratamiz
    const cursor = document.createElement("div");
    cursor.id = "cursor-dot";
    document.body.appendChild(cursor);

    // sichqonchani kuzatish
    const move = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      // cursor tagidagi elementni topish
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;

        // oq rangga yaqin bo'lsa → cursor qora
        if (bg.includes("255, 255, 255")) {
          cursor.style.background = "black";
        } else {
          cursor.style.background = "white";
        }
      }
    };

    window.addEventListener("mousemove", move);

    return () => {
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
