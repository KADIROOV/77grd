import { FaqAccordion } from "./pages/faq-accordion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-4 md:p-8 lg:p-12">
      <div className="mx-auto max-w-5xl">
        <FaqAccordion />
      </div>
    </main>
  );
}
