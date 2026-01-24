import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Music, BookOpen, Users, Flame, Star } from "lucide-react";

const BhaktiYoga = () => {
  const practices = [
    {
      icon: Music,
      title: "Kirtan (Devotional Chanting)",
      description: "Group singing of mantras and sacred songs, creating a powerful collective spiritual experience.",
    },
    {
      icon: BookOpen,
      title: "Japa (Mantra Repetition)",
      description: "Private repetition of a sacred mantra, often using prayer beads (mala) for counting.",
    },
    {
      icon: Flame,
      title: "Puja (Ritual Worship)",
      description: "Ceremonial offerings to the divine, including flowers, incense, and prayers.",
    },
    {
      icon: Users,
      title: "Satsang (Spiritual Gathering)",
      description: "Coming together with like-minded seekers to discuss spiritual teachings and practice.",
    },
    {
      icon: Star,
      title: "Seva (Selfless Service)",
      description: "Offering service to others as an act of devotion and love for the divine.",
    },
    {
      icon: Heart,
      title: "Prayer & Surrender",
      description: "Opening the heart to the divine through sincere prayer and surrender of the ego.",
    },
  ];

  const stages = [
    { name: "Shravana", meaning: "Listening to stories and teachings about the divine" },
    { name: "Kirtana", meaning: "Chanting and singing the names and glories of the divine" },
    { name: "Smarana", meaning: "Constant remembrance of the divine" },
    { name: "Pada Sevana", meaning: "Service at the feet of the divine" },
    { name: "Archana", meaning: "Worship through ritual offerings" },
    { name: "Vandana", meaning: "Prostration and humble salutation" },
    { name: "Dasya", meaning: "Serving as a devoted servant" },
    { name: "Sakhya", meaning: "Cultivating divine friendship" },
    { name: "Atma Nivedana", meaning: "Complete self-surrender" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Bhakti Yoga
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            The path of love and devotion to the divine
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Bhakti Yoga is the yoga of devotion, the path of the heart. It is considered 
                by many to be the most direct and natural path to spiritual realization. Through 
                love, surrender, and devotion to the divine (in whatever form resonates with you), 
                the practitioner dissolves the ego and experiences union with the ultimate reality.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Chanting Yoga, we embrace the transformative power of devotional practices, 
                especially mantra chanting and kirtan, as gateways to inner peace and spiritual 
                awakening.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Practices */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Bhakti Practices
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practices.map((practice, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <practice.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{practice.title}</CardTitle>
                  </div>
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

      {/* Nine Stages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            The Nine Limbs of Bhakti
          </h2>
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <div className="space-y-4">
                {stages.map((stage, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-3 bg-secondary/30 rounded-lg"
                  >
                    <span className="w-8 h-8 flex items-center justify-center bg-primary text-primary-foreground rounded-full text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-foreground">{stage.name}</h3>
                      <p className="text-sm text-muted-foreground">{stage.meaning}</p>
                    </div>
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
            Experience Kirtan & Chanting
          </h2>
          <p className="text-muted-foreground mb-8">
            Join us for our devotional chanting sessions and open your heart
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Join a Session</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BhaktiYoga;
