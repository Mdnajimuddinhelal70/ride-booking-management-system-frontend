import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Goal, Rocket, Star } from "lucide-react";

export default function AboutUsPage() {
  const team = [
    { name: "Najim Uddin", role: "Founder & CEO", img: "/profile.avif" },
    { name: "Sarah Khan", role: "CTO", img: "/profile.avif" },
    { name: "John Doe", role: "Operations Manager", img: "/profile.avif" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero / Intro */}
      <section className="relative isolate overflow-hidden bg-amber-300">
        <div className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-3 text-indigo-700">
              About Us
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Connecting People & Places
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              We build safe, reliable, and affordable ride solutions powered by
              modern technology and a caring team.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-indigo-700 hover:bg-white/90"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Goal className="h-5 w-5" /> Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              To make transportation safe, affordable, and accessible for
              everyone—bridging distances with technology and trust.
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Rocket className="h-5 w-5" /> Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Become the region’s most trusted ride platform, empowering riders
              & drivers through innovation and fair opportunities.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Background / Story */}
      <section className="container mx-auto px-4 pb-8">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Our Story</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            <p>
              Founded in 2023, we started with a simple idea: solve everyday
              commuting challenges with a delightful, dependable experience.
              Today, we serve thousands of riders and drivers, focusing on
              safety, fairness, and convenience.
            </p>
            <Separator className="my-6" />
            <div className="grid gap-6 sm:grid-cols-3">
              <Stat label="Rides Completed" value="250K+" />
              <Stat label="Cities Covered" value="20+" />
              <Stat
                label="Avg. Rating"
                value={
                  <span className="inline-flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    4.8
                  </span>
                }
              />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Team Profiles */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-3">
            Our Team
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet the People Behind the Wheels
          </h2>
          <p className="mt-3 text-muted-foreground">
            A small team with a big mission to move communities forward.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {team.map((m, i) => (
            <Card key={i} className="rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6 text-center space-y-4">
                <Avatar className="mx-auto h-20 w-20">
                  <AvatarImage src={m.img} alt={m.name} />
                  <AvatarFallback>
                    {m.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{m.name}</p>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Passionate about building a safer, smarter mobility network
                  for all.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="container mx-auto px-4 pb-20">
        <Card className="rounded-3xl border-dashed">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">
              Want to partner or join the team?
            </h3>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              We’re always looking for great people and collaborators. Let’s
              build the future of mobility together.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <Button size="lg">Work With Us</Button>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <Card className="rounded-2xl">
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold">{value}</div>
        <div className="mt-1 text-sm text-muted-foreground">{label}</div>
      </CardContent>
    </Card>
  );
}
