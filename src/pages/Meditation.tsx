import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Heart, Wind, Sparkles, Clock, Users } from "lucide-react";

const Meditation = () => {
  const meditationTypes = [
    {
      icon: Brain,
      title: "Mindfulness Meditation",
      description: "Focus on the present moment, observing thoughts without judgment.",
    },
    {
      icon: Heart,
      title: "Loving-Kindness Meditation",
      description: "Cultivate compassion and love for yourself and others.",
    },
    {
      icon: Wind,
      title: "Breath Awareness",
      description: "Center your attention on the natural rhythm of breathing.",
    },
    {
      icon: Sparkles,
      title: "Transcendental Meditation",
      description: "Use mantras to transcend ordinary thinking and reach deep relaxation.",
    },
  ];

  const benefits = [
    "Reduces stress and anxiety",
    "Improves focus and concentration",
    "Enhances emotional well-being",
    "Promotes better sleep",
    "Increases self-awareness",
    "Supports overall mental health",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Meditation
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Discover inner peace and clarity through the ancient practice of meditation
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Meditation is a practice that has been cultivated for thousands of years across 
                various cultures and traditions. At Chanting Yoga, we integrate meditation with 
                sound healing and breath work to create a transformative experience that calms 
                the mind, opens the heart, and connects you to your deeper self.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Types of Meditation */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Types of Meditation We Teach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {meditationTypes.map((type, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <type.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{type.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {type.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Benefits of Regular Practice
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border animate-fade-in"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Begin Your Meditation Journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our guided meditation sessions and discover the peace within
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/audios">Listen to Audio Sessions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meditation;
