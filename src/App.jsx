import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <img
        src="/images/bg_shadow.svg"
        className="absolute right-0 md:top-[648px] top-[937px]  z-0"
        alt=""
      />
      <img
        src="/images/bg_shadow2.svg"
        className="absolute left-0 top-[2417px] hidden md:block  z-0"
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
