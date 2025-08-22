import CallToAction from "@/components/modules/Homepage/CallToAction";
import HeroBanner from "@/components/modules/Homepage/HeroBanner";
import HowItWorks from "@/components/modules/Homepage/HowItWorks";
import ServiceHighlights from "@/components/modules/Homepage/ServiceHighlights";
import Testimonials from "@/components/modules/Homepage/Testimonials";

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      <HowItWorks />
      <ServiceHighlights />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Homepage;
