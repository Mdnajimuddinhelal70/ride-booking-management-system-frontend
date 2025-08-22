import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <section
      className="relative bg-gradient-to-r
     from-indigo-500 via-purple-500 to-pink-500 text-white py-24"
    >
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Our Platform 🚀
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Book rides, manage your account, and explore new features with ease.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-200"
          >
            Get Started
          </Button>
          <Button size="lg" className="border-white hover:bg-white/20">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
