import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Brain, Bone, Wind, Shield, Sparkles } from "lucide-react";

const IllnessYoga = () => {
  const conditions = [
    {
      icon: Heart,
      condition: "Cardiovascular Conditions",
      description: "Gentle yoga, pranayama, and meditation can help manage blood pressure, reduce stress on the heart, and support recovery.",
      practices: "Restorative yoga, gentle pranayama, meditation",
    },
    {
      icon: Brain,
      condition: "Anxiety & Depression",
      description: "Mind-body practices help regulate the nervous system, reduce cortisol, and promote emotional balance.",
      practices: "Pranayama, meditation, gentle asanas",
    },
    {
      icon: Bone,
      condition: "Back Pain & Arthritis",
      description: "Therapeutic yoga can improve flexibility, strengthen supporting muscles, and reduce chronic pain.",
      practices: "Gentle stretching, cat-cow, supported poses",
    },
    {
      icon: Wind,
      condition: "Respiratory Conditions",
      description: "Breathing practices strengthen lung capacity and improve respiratory function.",
      practices: "Pranayama, gentle chest openers",
    },
    {
      icon: Shield,
      condition: "Diabetes Management",
      description: "Regular practice can help improve insulin sensitivity and support blood sugar management.",
      practices: "Active asanas, twists, inversions",
    },
    {
      icon: Sparkles,
      condition: "Cancer Support",
      description: "Gentle yoga supports recovery, reduces treatment side effects, and promotes emotional healing.",
      practices: "Restorative yoga, meditation, gentle movement",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Yoga & Illness
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Therapeutic yoga practices to support healing and manage health conditions
          </p>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-accent bg-accent/10">
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">
                <strong>Important:</strong> The information provided here is for educational 
                purposes only and should not replace medical advice. Always consult with your 
                healthcare provider before starting any new exercise program, especially if 
                you have a health condition.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Yoga therapy is an emerging field that applies yogic principles and practices 
                to support healing and manage chronic conditions. When practiced mindfully and 
                with appropriate modifications, yoga can be a powerful complement to 
                conventional medical treatment, helping to improve quality of life and 
                support the body's natural healing processes.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Yoga for Specific Conditions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {conditions.map((item, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{item.condition}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                  <div className="pt-2 border-t border-border">
                    <span className="text-sm font-medium text-primary">Recommended: </span>
                    <span className="text-sm text-muted-foreground">{item.practices}</span>
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
            Personalized Therapeutic Guidance
          </h2>
          <p className="text-muted-foreground mb-8">
            Work with our experienced instructors to develop a practice tailored to your needs
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default IllnessYoga;
