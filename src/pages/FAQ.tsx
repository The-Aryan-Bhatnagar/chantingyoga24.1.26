import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "Do I need experience to join a class?",
          a: "No prior experience is necessary! We offer classes for all levels, including complete beginners. Our teachers provide modifications and guidance to ensure everyone can participate safely and comfortably.",
        },
        {
          q: "What should I wear to class?",
          a: "Wear comfortable, stretchy clothing that allows you to move freely. Avoid clothes that are too loose as they may shift during certain poses. Yoga is typically practiced barefoot.",
        },
        {
          q: "What should I bring?",
          a: "We provide yoga mats and props, but you're welcome to bring your own mat if you prefer. Bring a water bottle and a small towel. Avoid eating a heavy meal within 2 hours of class.",
        },
        {
          q: "How early should I arrive?",
          a: "Please arrive 10-15 minutes before class starts. This gives you time to settle in, set up your mat, and transition into a peaceful mindset for practice.",
        },
      ],
    },
    {
      category: "Classes & Programs",
      questions: [
        {
          q: "What types of classes do you offer?",
          a: "We offer a variety of classes including Hatha, Vinyasa, Restorative, Meditation, Pranayama, and Chanting/Kirtan sessions. We also have specialized programs for seniors, therapeutic needs, and teacher training.",
        },
        {
          q: "Do you offer online classes?",
          a: "Yes! We offer live online classes as well as recorded sessions that you can access anytime. Our online classes maintain the same quality and personal attention as our in-person sessions.",
        },
        {
          q: "How long are the classes?",
          a: "Most of our classes are 60-75 minutes. Meditation and pranayama sessions are typically 30-45 minutes. Workshops and special events vary in length.",
        },
        {
          q: "Can I drop in for a single class?",
          a: "Absolutely! We offer drop-in options as well as class packages and memberships for regular practitioners.",
        },
      ],
    },
    {
      category: "Teacher Training",
      questions: [
        {
          q: "What are the requirements for teacher training?",
          a: "For our 200-hour training, we recommend at least 6 months of regular yoga practice. No prior teaching experience is required. A genuine interest in deepening your practice and sharing yoga is essential.",
        },
        {
          q: "Is your teacher training certified?",
          a: "Yes, our 200-hour and 300-hour programs are registered with Yoga Alliance. Upon completion, you'll be eligible to register as a Registered Yoga Teacher (RYT).",
        },
        {
          q: "Do you offer payment plans?",
          a: "Yes, we offer flexible payment plans for all our training programs. Contact us to discuss options that work for your situation.",
        },
      ],
    },
    {
      category: "Health & Safety",
      questions: [
        {
          q: "Can I practice yoga with injuries or health conditions?",
          a: "Many conditions can be accommodated with modifications. Please inform your teacher before class about any injuries or health concerns. For specific medical conditions, we recommend consulting your healthcare provider first.",
        },
        {
          q: "Is yoga safe during pregnancy?",
          a: "Yoga can be beneficial during pregnancy when practiced appropriately. We offer prenatal yoga classes specifically designed for expectant mothers. Always consult your healthcare provider before starting any exercise program during pregnancy.",
        },
        {
          q: "What COVID-19 safety measures do you have?",
          a: "We follow all local health guidelines and maintain enhanced cleaning protocols. Class sizes may be limited to ensure adequate spacing. Please check our current policies before attending.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Find answers to common questions about our classes and programs
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12 animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.category}</h2>
              <Card>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem key={faqIndex} value={`item-${catIndex}-${faqIndex}`}>
                        <AccordionTrigger className="text-left">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            We're here to help! Reach out to us directly and we'll be happy to assist
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
