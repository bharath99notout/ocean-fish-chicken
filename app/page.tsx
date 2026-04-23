import Hero from "@/components/Hero";
import MenuPreview from "@/components/MenuPreview";
import WhyUs from "@/components/WhyUs";
import OrderSteps from "@/components/OrderSteps";
import StoresSection from "@/components/StoresSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <MenuPreview />
      <OrderSteps />
      <StoresSection />
    </>
  );
}
