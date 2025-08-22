import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const faqs = [
  {
    question: "How do I book a ride?",
    answer:
      "Simply sign up, set your pickup and drop-off locations, and confirm the ride.",
  },
  {
    question: "How are drivers verified?",
    answer:
      "All drivers go through background checks and must provide valid documents.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "You can pay via credit/debit card, mobile wallet, or cash depending on availability.",
  },
  {
    question: "Can I schedule rides in advance?",
    answer: "Yes, you can pre-book rides for specific dates and times.",
  },
  {
    question: "What if I need help during a ride?",
    answer:
      "You can use the in-app emergency button to contact support immediately.",
  },
];

export default function FAQ() {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-16 bg-muted/40">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Search Box */}
            <div className="mb-6">
              <Input
                placeholder="Search for a question..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Accordion List */}
            {filteredFaqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {filteredFaqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-center text-muted-foreground">
                No results found for your search.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
