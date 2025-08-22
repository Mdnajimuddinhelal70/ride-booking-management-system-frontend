import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Frequent Rider",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "This app made my daily commute so much easier! Drivers are always polite and punctual.",
      rating: 5,
    },
    {
      name: "Michael Lee",
      role: "Business Traveler",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "I can rely on this service whenever I travel for meetings. Super convenient and reliable.",
      rating: 4,
    },
    {
      name: "Ayesha Khan",
      role: "Student",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "Affordable, safe, and user-friendly. I recommend it to all my friends!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Our Customers Say
        </h2>
        <p className="mb-12 max-w-2xl mx-auto">
          Thousands of users trust our platform for their daily rides. Here’s
          what some of them have to say:
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <Card
              key={index}
              className="shadow-md rounded-2xl hover:shadow-xl transition"
            >
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback>{t.name.charAt(0)}</AvatarFallback>
                </Avatar>

                <h3 className="text-lg font-semibold">{t.name}</h3>
                <p className="text-sm ">{t.role}</p>

                <p className="text-sm">“{t.review}”</p>

                <div className="flex justify-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
