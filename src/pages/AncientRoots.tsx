import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, BookOpen, Scroll, Mountain, Star } from "lucide-react";

const AncientRoots = () => {
  const timeline = [
    {
      era: "Pre-Vedic Period (3000+ BCE)",
      description: "Archaeological evidence from the Indus Valley civilization shows figures in meditative postures, suggesting early yoga practices.",
    },
    {
      era: "Vedic Period (1500-500 BCE)",
      description: "The Vedas, ancient sacred texts, contain the earliest references to yoga, meditation, and spiritual practices.",
    },
    {
      era: "Pre-Classical Period (500 BCE - 200 CE)",
      description: "The Upanishads, Bhagavad Gita, and early Buddhist/Jain texts elaborate on yoga philosophy and practice.",
    },
    {
      era: "Classical Period (200 CE)",
      description: "Patanjali codifies yoga philosophy in the Yoga Sutras, establishing the eight-limbed path of yoga.",
    },
    {
      era: "Post-Classical Period (800-1700 CE)",
      description: "Development of Tantra and Hatha Yoga, with texts like the Hatha Yoga Pradipika describing physical practices.",
    },
    {
      era: "Modern Period (1800s-Present)",
      description: "Yoga spreads globally through teachers like Vivekananda, Krishnamacharya, and their students.",
    },
  ];

  const keyTexts = [
    { title: "The Vedas", description: "Ancient sacred texts containing early references to meditation and spiritual practices" },
    { title: "The Upanishads", description: "Philosophical texts exploring the nature of reality and the self" },
    { title: "The Bhagavad Gita", description: "Sacred dialogue teaching the paths of yoga within an epic narrative" },
    { title: "Yoga Sutras of Patanjali", description: "Systematic codification of yoga philosophy and the eight-limbed path" },
    { title: "Hatha Yoga Pradipika", description: "Medieval text describing physical postures, breathing, and purification" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Ancient Roots
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Discover the rich history and origins of yoga
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Yoga is one of humanity's oldest spiritual traditions, with roots stretching 
                back over 5,000 years to ancient India. What began as a contemplative practice 
                for spiritual liberation has evolved into a global phenomenon, yet its core 
                purpose remains the same: to unite body, mind, and spirit in the pursuit of 
                self-realization and inner peace.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Historical Timeline
          </h2>
          <div className="space-y-6">
            {timeline.map((period, index) => (
              <Card key={index} className="animate-fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{period.era}</h3>
                      <p className="text-muted-foreground">{period.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Texts */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Sacred Texts of Yoga
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyTexts.map((text, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Scroll className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{text.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {text.description}
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
            Deepen Your Understanding
          </h2>
          <p className="text-muted-foreground mb-8">
            Explore our philosophy courses and book recommendations to learn more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/courses">View Courses</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/books">Recommended Reading</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AncientRoots;
