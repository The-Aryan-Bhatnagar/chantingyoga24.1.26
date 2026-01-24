import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, X } from "lucide-react";

const FactsMyths = () => {
  const mythsAndFacts = [
    {
      myth: "You need to be flexible to do yoga",
      fact: "Flexibility is a result of yoga, not a prerequisite. Yoga meets you where you are and helps you improve over time.",
    },
    {
      myth: "Yoga is only for women",
      fact: "Yoga was historically practiced primarily by men. Today, it benefits everyone regardless of gender.",
    },
    {
      myth: "Yoga is just stretching",
      fact: "Yoga encompasses physical postures, breathing techniques, meditation, and philosophy. It's a complete system for holistic well-being.",
    },
    {
      myth: "You must be young to practice yoga",
      fact: "Yoga can be adapted for all ages. Many practitioners begin later in life and experience tremendous benefits.",
    },
    {
      myth: "Yoga is a religion",
      fact: "Yoga is a spiritual practice, not a religion. It can complement any faith tradition or be practiced secularly.",
    },
    {
      myth: "You need expensive gear to practice",
      fact: "All you really need is comfortable clothing and a willingness to practice. A mat is helpful but not essential.",
    },
    {
      myth: "Yoga results come quickly",
      fact: "Yoga is a lifelong practice. Benefits accumulate over time with consistent, patient practice.",
    },
    {
      myth: "Advanced yoga means difficult poses",
      fact: "Advanced practice is about awareness, breath control, and inner stillness—not acrobatic poses.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Facts & Myths
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Separating yoga truths from common misconceptions
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many misconceptions about yoga prevent people from experiencing its benefits. 
                Let's explore some common myths and uncover the truth about this ancient practice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Myths and Facts */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            {mythsAndFacts.map((item, index) => (
              <Card key={index} className="animate-fade-in overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="bg-destructive/10 p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-destructive/20 rounded-full shrink-0">
                        <X className="h-4 w-4 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Myth</h3>
                        <p className="text-muted-foreground">{item.myth}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/20 rounded-full shrink-0">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Fact</h3>
                        <p className="text-muted-foreground">{item.fact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Experience Yoga for Yourself?
          </h2>
          <p className="text-muted-foreground mb-8">
            The best way to understand yoga is through practice. Join us for a class!
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default FactsMyths;
