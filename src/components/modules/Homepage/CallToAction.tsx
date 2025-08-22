import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to start your journey?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
          Sign up today and enjoy safe, reliable, and affordable rides at your
          fingertips.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            size="lg"
            className="bg-white text-indigo-600 hover:bg-gray-200"
          >
            Get Started
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/20"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
