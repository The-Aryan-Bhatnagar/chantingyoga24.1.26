import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Shield, Users, Scale, Eye, Sparkles } from "lucide-react";

const Ethics = () => {
  const principles = [
    {
      icon: Heart,
      title: "Ahimsa (Non-Violence)",
      description: "Practice compassion and non-harm in thoughts, words, and actions towards all living beings, including yourself.",
    },
    {
      icon: Shield,
      title: "Satya (Truthfulness)",
      description: "Commit to honesty and integrity, speaking truth with kindness and consideration for others.",
    },
    {
      icon: Scale,
      title: "Asteya (Non-Stealing)",
      description: "Respect what belongs to others and cultivate contentment with what you have.",
    },
    {
      icon: Sparkles,
      title: "Brahmacharya (Moderation)",
      description: "Practice moderation and wise use of energy in all aspects of life.",
    },
    {
      icon: Eye,
      title: "Aparigraha (Non-Attachment)",
      description: "Let go of excessive attachment to material possessions and outcomes.",
    },
    {
      icon: Users,
      title: "Community Respect",
      description: "Honor the shared space of practice and treat fellow practitioners with dignity.",
    },
  ];

  const teacherEthics = [
    "Maintain appropriate boundaries with students",
    "Provide a safe and inclusive environment",
    "Continue personal practice and education",
    "Acknowledge the limits of one's knowledge",
    "Respect the traditions and lineages of yoga",
    "Act with integrity in all professional dealings",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Yoga Ethics
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            The moral principles that guide our practice and community
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Yoga is much more than physical postures. At its core, yoga is an ethical 
                path guided by the Yamas (ethical restraints) and Niyamas (observances). 
                These ancient principles provide a framework for living a meaningful, 
                harmonious life and form the foundation of authentic yoga practice.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Yamas */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            The Yamas: Ethical Guidelines
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teacher Ethics */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Teaching Ethics
          </h2>
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-6">
                At Chanting Yoga, our teachers are committed to the highest ethical standards:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {teacherEthics.map((ethic, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <span className="text-foreground">{ethic}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Learn More About Yoga Philosophy
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore our courses to deepen your understanding of yoga's ethical foundations
          </p>
          <Button asChild size="lg">
            <Link to="/courses">View Courses</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Ethics;
