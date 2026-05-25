import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BurgerAnatomy from "@/components/BurgerAnatomy";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import Locations from "@/components/Locations";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-char-900" style={{ overflowX: "clip" }}>
      <Navbar />
      <Hero />
      <Marquee />
      <BurgerAnatomy />
      <Story />
      <Menu />
      <Locations />
      <OrderCTA />
      <Footer />
    </main>
  );
}
