import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Pause, Volume2, Clock } from "lucide-react";
import { useState, useRef } from "react";

const Audios = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const audioSessions = [
    {
      title: "Morning Meditation",
      description: "Start your day with clarity and intention",
      duration: "10 min",
      category: "Meditation",
      src: "/audio/meditation.mp3",
    },
    {
      title: "Deep Relaxation",
      description: "Guided relaxation for stress relief",
      duration: "15 min",
      category: "Relaxation",
      src: "/audio/stress.mp3",
    },
    {
      title: "Sleep Yoga Nidra",
      description: "Drift into peaceful sleep with guided relaxation",
      duration: "20 min",
      category: "Sleep",
      src: "/audio/sleep.mp3",
    },
    {
      title: "Om Chanting",
      description: "Connect with the primordial sound of the universe",
      duration: "10 min",
      category: "Chanting",
      src: "/audio/chanting.mp3",
    },
    {
      title: "Pranayama Practice",
      description: "Guided breathing exercises for energy and calm",
      duration: "12 min",
      category: "Pranayama",
      src: "/audio/anxiety-depression.mp3",
    },
    {
      title: "Healing Mantras",
      description: "Sacred mantras for healing and transformation",
      duration: "15 min",
      category: "Chanting",
      src: "/audio/backache.mp3",
    },
  ];

  const handlePlayPause = (index: number) => {
    const audio = audioRefs.current[index];
    
    if (playingIndex === index) {
      audio?.pause();
      setPlayingIndex(null);
    } else {
      // Pause any currently playing audio
      if (playingIndex !== null) {
        audioRefs.current[playingIndex]?.pause();
      }
      audio?.play();
      setPlayingIndex(index);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
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
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audioSessions.map((session, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {session.category}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {session.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl mt-3">{session.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {session.description}
                  </CardDescription>
                  <audio
                    ref={(el) => (audioRefs.current[index] = el)}
                    src={session.src}
                    onEnded={() => setPlayingIndex(null)}
                  />
                  <Button
                    onClick={() => handlePlayPause(index)}
                    className="w-full"
                    variant={playingIndex === index ? "secondary" : "default"}
                  >
                    {playingIndex === index ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Play
                      </>
                    )}
                  </Button>
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
