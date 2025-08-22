import { Card, CardContent } from "@/components/ui/card";
import { Clock, CreditCard, ShieldCheck, Smartphone } from "lucide-react";

export default function ServiceHighlights() {
  const highlights = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
      title: "Safe & Secure",
      description:
        "All rides are monitored with advanced safety features for peace of mind.",
    },
    {
      icon: <Clock className="w-10 h-10 text-indigo-600" />,
      title: "On-Time Guarantee",
      description:
        "Punctual drivers ensure you never miss an appointment or meeting.",
    },
    {
      icon: <CreditCard className="w-10 h-10 text-indigo-600" />,
      title: "Easy Payments",
      description:
        "Multiple payment options including cashless & secure transactions.",
    },
    {
      icon: <Smartphone className="w-10 h-10 text-indigo-600" />,
      title: "User Friendly App",
      description:
        "Simple and intuitive app interface for booking your rides instantly.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Service Highlights
        </h2>
        <p className="mb-12 max-w-2xl mx-auto">
          Discover the features that make our service reliable, convenient, and
          user-friendly.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="shadow-md rounded-2xl hover:shadow-xl transition"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
