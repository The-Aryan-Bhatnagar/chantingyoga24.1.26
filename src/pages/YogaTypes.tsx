import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const YogaTypes = () => {
  const yogaTypes = [
    {
      name: "Hatha Yoga",
      description: "The foundation of all yoga styles, focusing on physical postures (asanas) and breath control (pranayama). Perfect for beginners.",
      benefits: ["Builds strength", "Improves flexibility", "Reduces stress"],
      level: "Beginner",
    },
    {
      name: "Vinyasa Yoga",
      description: "Dynamic, flowing sequences that link breath with movement. Creates a moving meditation experience.",
      benefits: ["Cardiovascular health", "Body awareness", "Mental focus"],
      level: "All Levels",
    },
    {
      name: "Ashtanga Yoga",
      description: "A rigorous, athletic style following a specific sequence of postures. Builds heat and detoxifies the body.",
      benefits: ["Builds stamina", "Increases discipline", "Deep purification"],
      level: "Intermediate-Advanced",
    },
    {
      name: "Kundalini Yoga",
      description: "Combines postures, breathwork, chanting, and meditation to awaken the dormant spiritual energy.",
      benefits: ["Spiritual awakening", "Nervous system balance", "Emotional healing"],
      level: "All Levels",
    },
    {
      name: "Yin Yoga",
      description: "Slow-paced practice holding passive poses for extended periods to target deep connective tissues.",
      benefits: ["Increases flexibility", "Calms the mind", "Balances energy"],
      level: "All Levels",
    },
    {
      name: "Restorative Yoga",
      description: "Deeply relaxing practice using props to support the body in gentle poses for extended periods.",
      benefits: ["Deep relaxation", "Stress relief", "Nervous system reset"],
      level: "Beginner",
    },
    {
      name: "Iyengar Yoga",
      description: "Precision-focused practice emphasizing proper alignment with the use of props.",
      benefits: ["Improves alignment", "Builds strength", "Therapeutic benefits"],
      level: "All Levels",
    },
    {
      name: "Bikram Yoga",
      description: "A sequence of 26 postures practiced in a heated room to promote sweating and flexibility.",
      benefits: ["Detoxification", "Weight loss", "Increased flexibility"],
      level: "Intermediate",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Types of Yoga
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Explore the diverse paths of yoga and find the practice that resonates with you
          </p>
        </div>
      </section>

      {/* Yoga Types Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {yogaTypes.map((yoga, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{yoga.name}</CardTitle>
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {yoga.level}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {yoga.description}
                  </CardDescription>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {yoga.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
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
            Not Sure Which Style Is Right for You?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us for a personalized recommendation based on your goals and experience level
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Guidance</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default YogaTypes;
