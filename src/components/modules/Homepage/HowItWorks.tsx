import { Card, CardContent } from "@/components/ui/card";
import { Map, Rocket, ThumbsUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Map className="w-10 h-10 text-indigo-600" />,
      title: "Choose your ride",
      description:
        "Select pickup and drop location to find available drivers quickly.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-indigo-600" />,
      title: "Book instantly",
      description:
        "Confirm your booking in just one click with secure payment options.",
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-indigo-600" />,
      title: "Enjoy the ride",
      description:
        "Sit back and relax while your driver takes you to the destination.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
        <p className="mb-12 max-w-2xl mx-auto">
          Getting started is simple and quick. Just follow these steps and
          you’re on your way!
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="shadow-lg rounded-2xl hover:shadow-xl transition"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                {step.icon}
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
