import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QueEs from "@/components/QueEs";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative w-full">
      <Header />
      <Hero />
      <QueEs />
      <RegistrationSection />
      <Footer />
    </div>
  );
}
