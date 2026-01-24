import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Download, BookOpen, Scroll, Users, Lightbulb } from "lucide-react";

const Library = () => {
  const resources = [
    {
      icon: FileText,
      title: "Practice Guides",
      description: "Step-by-step guides for home practice, including pose sequences and breathing exercises.",
      count: "15+ Guides",
    },
    {
      icon: Scroll,
      title: "Ancient Texts",
      description: "Translations and commentaries on classical yoga texts like the Yoga Sutras and Upanishads.",
      count: "10+ Texts",
    },
    {
      icon: BookOpen,
      title: "Articles & Essays",
      description: "In-depth articles on yoga philosophy, wellness, and spiritual development.",
      count: "50+ Articles",
    },
    {
      icon: Users,
      title: "Teacher Resources",
      description: "Materials for yoga teachers including class plans, sequencing ideas, and teaching tips.",
      count: "20+ Resources",
    },
    {
      icon: Lightbulb,
      title: "Wellness Insights",
      description: "Practical advice on incorporating yogic principles into daily life.",
      count: "30+ Insights",
    },
    {
      icon: Download,
      title: "Downloadable PDFs",
      description: "Printable materials for reference during your practice.",
      count: "25+ PDFs",
    },
  ];

  const featuredTopics = [
    "Introduction to Meditation",
    "Understanding the Chakras",
    "History of Yoga",
    "Ayurveda Basics",
    "Yoga Philosophy 101",
    "Mantra & Chanting Guide",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Resource Library
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Explore our collection of yoga and wellness resources
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <resource.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                    </div>
                    <span className="text-sm text-primary font-medium">{resource.count}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {resource.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Featured Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredTopics.map((topic, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border animate-fade-in hover:border-primary transition-colors cursor-pointer"
              >
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach out to us and we'll help you find the resources you need
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Library;
