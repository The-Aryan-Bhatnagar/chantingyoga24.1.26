import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, Clock, ArrowLeft } from "lucide-react";

const Videos = () => {
  const videoCategories = [
    {
      title: "Beginner Yoga",
      videos: [
        { title: "Introduction to Yoga", duration: "20 min", level: "Beginner" },
        { title: "Basic Sun Salutation", duration: "15 min", level: "Beginner" },
        { title: "Foundational Poses", duration: "25 min", level: "Beginner" },
      ],
    },
    {
      title: "Meditation & Pranayama",
      videos: [
        { title: "Guided Morning Meditation", duration: "10 min", level: "All Levels" },
        { title: "Breath Awareness Practice", duration: "12 min", level: "All Levels" },
        { title: "Evening Relaxation", duration: "15 min", level: "All Levels" },
      ],
    },
    {
      title: "Intermediate Practice",
      videos: [
        { title: "Vinyasa Flow", duration: "30 min", level: "Intermediate" },
        { title: "Core Strengthening", duration: "20 min", level: "Intermediate" },
        { title: "Hip Opening Sequence", duration: "25 min", level: "Intermediate" },
      ],
    },
    {
      title: "Chanting & Mantras",
      videos: [
        { title: "Om Chanting Tutorial", duration: "10 min", level: "All Levels" },
        { title: "Gayatri Mantra Practice", duration: "15 min", level: "All Levels" },
        { title: "Healing Sound Bath", duration: "20 min", level: "All Levels" },
      ],
    },
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
            Video Library
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Practice along with our guided video sessions
          </p>
        </div>
      </section>

      {/* Video Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {videoCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {category.videos.map((video, vidIndex) => (
                  <Card 
                    key={vidIndex} 
                    className="animate-fade-in hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-video bg-secondary/50 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                      <div className="p-4 bg-primary/80 rounded-full group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary-foreground" />
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{video.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {video.duration}
                        </div>
                        <span className="px-2 py-0.5 bg-secondary rounded text-xs">
                          {video.level}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Access Our Complete Video Library
          </h2>
          <p className="text-muted-foreground mb-8">
            Become a member for unlimited access to all our video content
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Become a Member</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Videos;
