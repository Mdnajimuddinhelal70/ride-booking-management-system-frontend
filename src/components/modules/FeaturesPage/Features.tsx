import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, ShieldCheck, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      role: "Rider",
      icon: <Users className="h-6 w-6 text-primary" />,
      items: [
        "Easy ride booking",
        "Live tracking",
        "Multiple payment options",
        "Ride history & invoices",
      ],
    },
    {
      role: "Driver",
      icon: <Car className="h-6 w-6 text-primary" />,
      items: [
        "Accept/Reject rides",
        "Earnings dashboard",
        "Navigation & route optimization",
        "Rating & feedback system",
      ],
    },
    {
      role: "Admin",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      items: [
        "User management",
        "Ride monitoring",
        "Analytics & reports",
        "Payment settlements",
      ],
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Platform Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <Card key={idx} className="shadow-md">
              <CardHeader className="flex flex-col items-center text-center">
                {feature.icon}
                <CardTitle className="mt-2">{feature.role}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
