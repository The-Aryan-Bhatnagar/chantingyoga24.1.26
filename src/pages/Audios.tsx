import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, ArrowLeft } from "lucide-react";

const Audios = () => {
  const audioSessions = [
    { title: "Anxiety & Depression Relief", description: "Calming chants for mental peace", src: "/audio/anxiety-depression.mp3" },
    { title: "Backache Relief", description: "Healing sounds for back pain", src: "/audio/backache.mp3" },
    { title: "Cancer Support", description: "Supportive meditation for healing", src: "/audio/cancer.mp3" },
    { title: "Chanting Practice", description: "Traditional yoga chanting", src: "/audio/chanting.mp3" },
    { title: "Headache Relief", description: "Soothing sounds for headaches", src: "/audio/headache.mp3" },
    { title: "Hypertension Management", description: "Calming meditation for blood pressure", src: "/audio/hypertension.mp3" },
    { title: "General Meditation", description: "Deep meditation practice", src: "/audio/meditation.mp3" },
    { title: "Obesity Management", description: "Motivational healing sounds", src: "/audio/obesity.mp3" },
    { title: "Sleep Enhancement", description: "Peaceful sounds for better sleep", src: "/audio/sleep.mp3" },
    { title: "Stress Relief", description: "Stress-busting meditation", src: "/audio/stress.mp3" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <Link
            to="/media"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Media
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Audio Sessions
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Guided meditations, mantras, and healing sounds for your practice
          </p>
        </div>
      </section>

      {/* Audio Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audioSessions.map((session, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Music className="w-5 h-5 text-primary" />
                    {session.title}
                  </CardTitle>
                  <CardDescription>{session.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <audio controls className="w-full">
                    <source src={session.src} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
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
            Want More Audio Content?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our community for access to our complete library of guided practices
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Join Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Audios;
