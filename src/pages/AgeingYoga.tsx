import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Bone, Brain, Eye, Shield, Smile } from "lucide-react";

const AgeingYoga = () => {
  const benefits = [
    {
      icon: Bone,
      title: "Joint Health & Flexibility",
      description: "Gentle movements maintain joint mobility, reduce stiffness, and preserve range of motion as we age.",
    },
    {
      icon: Heart,
      title: "Cardiovascular Health",
      description: "Regular practice supports heart health, improves circulation, and helps maintain healthy blood pressure.",
    },
    {
      icon: Brain,
      title: "Cognitive Function",
      description: "Meditation and breathing practices support brain health, memory, and mental clarity.",
    },
    {
      icon: Shield,
      title: "Balance & Stability",
      description: "Balance-focused poses reduce fall risk and improve coordination and body awareness.",
    },
    {
      icon: Eye,
      title: "Stress Reduction",
      description: "Relaxation techniques lower cortisol levels, promoting overall health and longevity.",
    },
    {
      icon: Smile,
      title: "Emotional Well-being",
      description: "Community practice and mindfulness support mental health and reduce feelings of isolation.",
    },
  ];

  const practices = [
    {
      name: "Chair Yoga",
      description: "Modified poses performed seated or using a chair for support. Ideal for those with mobility challenges.",
    },
    {
      name: "Gentle Hatha",
      description: "Slow-paced practice with longer holds and modifications for comfort and safety.",
    },
    {
      name: "Restorative Yoga",
      description: "Deeply relaxing practice using props to support the body in passive poses.",
    },
    {
      name: "Pranayama & Meditation",
      description: "Breathing exercises and meditation that can be practiced seated comfortably.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Yoga for Healthy Ageing
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Embrace graceful ageing with yoga practices designed for every stage of life
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Yoga is a practice for all ages, and its benefits become even more valuable as 
                we grow older. Modified yoga practices can help maintain physical function, 
                mental clarity, and emotional balance throughout the ageing process. With 
                appropriate modifications and mindful practice, yoga supports healthy, vibrant 
                ageing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Benefits of Yoga for Seniors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Practices */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Recommended Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{practice.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {practice.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Your Gentle Yoga Journey
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our senior-friendly classes designed with care and expertise
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Enquire About Classes</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AgeingYoga;
