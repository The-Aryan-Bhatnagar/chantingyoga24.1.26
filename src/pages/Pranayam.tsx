import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wind, Sun, Moon, Zap, Heart, Shield } from "lucide-react";

const Pranayam = () => {
  const techniques = [
    {
      icon: Wind,
      title: "Anulom Vilom",
      description: "Alternate nostril breathing to balance the left and right hemispheres of the brain.",
      benefits: "Calms the mind, reduces stress, improves focus",
    },
    {
      icon: Sun,
      title: "Surya Bhedana",
      description: "Right nostril breathing to activate the solar energy in the body.",
      benefits: "Increases vitality, improves digestion, energizes",
    },
    {
      icon: Moon,
      title: "Chandra Bhedana",
      description: "Left nostril breathing to activate the lunar energy for cooling effects.",
      benefits: "Reduces heat, calms emotions, aids sleep",
    },
    {
      icon: Zap,
      title: "Kapalbhati",
      description: "Rapid exhalation technique to cleanse the respiratory system.",
      benefits: "Detoxifies, strengthens core, increases oxygen",
    },
    {
      icon: Heart,
      title: "Bhramari",
      description: "Humming bee breath to calm the nervous system.",
      benefits: "Reduces anxiety, improves concentration, soothes headaches",
    },
    {
      icon: Shield,
      title: "Ujjayi",
      description: "Ocean breath with gentle constriction of the throat.",
      benefits: "Builds heat, enhances focus, regulates blood pressure",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Pranayam
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Master the ancient science of breath control for vitality and inner peace
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Pranayam, derived from the Sanskrit words "prana" (life force) and "ayama" 
                (extension), is the yogic practice of breath control. It is considered the 
                fourth limb of yoga and serves as a bridge between the physical and mental 
                aspects of practice.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through systematic breathing techniques, pranayam helps regulate the flow of 
                vital energy throughout the body, purifying the nadis (energy channels) and 
                preparing the mind for deeper meditation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Pranayam Techniques
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <technique.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{technique.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-base">
                    {technique.description}
                  </CardDescription>
                  <div className="pt-2 border-t border-border">
                    <span className="text-sm font-medium text-primary">Benefits: </span>
                    <span className="text-sm text-muted-foreground">{technique.benefits}</span>
                  </div>
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
            Learn Pranayam with Expert Guidance
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our pranayam sessions and transform your breath into a tool for healing
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Join a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Pranayam;
