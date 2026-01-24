import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, Wind, Smile, Moon, Heart, Activity } from "lucide-react";

const StressBuster = () => {
  const techniques = [
    {
      icon: Wind,
      title: "Deep Breathing",
      description: "Simple yet powerful breathing exercises to activate the parasympathetic nervous system and calm the stress response.",
      steps: [
        "Sit comfortably with spine straight",
        "Inhale slowly for 4 counts",
        "Hold for 4 counts",
        "Exhale slowly for 6 counts",
        "Repeat 5-10 times",
      ],
    },
    {
      icon: Brain,
      title: "5-Minute Meditation",
      description: "A quick mindfulness practice to reset your mental state and reduce anxiety.",
      steps: [
        "Close your eyes gently",
        "Focus on your breath",
        "Notice thoughts without judgment",
        "Return attention to breath",
        "Open eyes slowly after 5 minutes",
      ],
    },
    {
      icon: Activity,
      title: "Gentle Stretching",
      description: "Release physical tension stored in the body with these simple stretches.",
      steps: [
        "Neck rolls in both directions",
        "Shoulder shrugs and releases",
        "Gentle side bends",
        "Forward fold (standing or seated)",
        "Cat-cow stretches",
      ],
    },
  ];

  const dailyTips = [
    { icon: Moon, title: "Prioritize Sleep", tip: "Aim for 7-8 hours of quality sleep each night" },
    { icon: Heart, title: "Practice Gratitude", tip: "Write down 3 things you're grateful for daily" },
    { icon: Smile, title: "Take Breaks", tip: "Step away from work every 90 minutes" },
    { icon: Wind, title: "Breathe Consciously", tip: "Take 3 deep breaths before responding to stress" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Stress Buster
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Simple, effective techniques to manage stress and find calm
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stress is a natural part of life, but chronic stress can harm our health and 
                well-being. Yoga offers powerful tools to manage stress effectively. Here are 
                some simple techniques you can use anytime, anywhere to find relief and restore 
                balance.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Techniques */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Quick Stress Relief Techniques
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {techniques.map((technique, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <technique.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{technique.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {technique.description}
                  </CardDescription>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">How to Practice:</h4>
                    <ol className="space-y-1">
                      {technique.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="font-medium text-primary">{i + 1}.</span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Tips */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Daily Stress Prevention Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dailyTips.map((item, index) => (
              <Card key={index} className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.tip}</p>
                    </div>
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
            Need More Support?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our stress management workshops and learn comprehensive techniques for lasting calm
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Learn More</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StressBuster;
