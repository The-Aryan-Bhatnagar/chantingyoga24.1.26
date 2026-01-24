import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wind, Heart, Briefcase, Sparkles, Music, Flower2 } from "lucide-react";
import yogaStudioImage from "@/assets/yoga-studio.jpg";
import natureZenImage from "@/assets/nature-zen.jpg";

const YogaWellness = () => {
  const practices = [
    {
      icon: <Wind className="h-8 w-8" />,
      title: "Breathing Techniques",
      description:
        "Master pranayama techniques to control vital energy, reduce stress, and enhance overall well-being",
      benefits: [
        "Improved lung capacity",
        "Reduced anxiety and stress",
        "Better oxygen circulation",
        "Enhanced mental clarity",
      ],
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Chanting Meditation",
      description:
        "Experience the vibrational healing power of sacred sounds and mantras for deep relaxation",
      benefits: [
        "Calms the nervous system",
        "Improves focus and concentration",
        "Releases emotional blockages",
        "Connects to inner peace",
      ],
    },
    {
      icon: <Flower2 className="h-8 w-8" />,
      title: "Yoga Asanas",
      description:
        "Practice traditional yoga postures to build strength, flexibility, and balance in body and mind",
      benefits: [
        "Increased flexibility",
        "Better posture and alignment",
        "Muscle strength and tone",
        "Joint health and mobility",
      ],
    },
  ];

  const sections = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Mind & Body Harmony",
      description:
        "Discover how chanting enhances emotional balance and creates deep connection between mind and body. Through consistent practice, you'll develop greater self-awareness, emotional resilience, and inner peace.",
      image: natureZenImage,
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Workplace Wellness",
      description:
        "Transform your work environment with corporate yoga programs designed to reduce stress, improve productivity, and create a healthier workplace culture. Our tailored programs fit seamlessly into busy schedules.",
      image: yogaStudioImage,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Yoga & Wellness
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Rebalance Your Energy Through Ancient Wisdom and Modern Practice
          </p>
        </div>
      </section>

      {/* Yoga Basics Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Yoga Basics</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Begin your journey with foundational practices that form the core of Chanting Yoga.
              These time-tested techniques provide the building blocks for physical health, mental
              clarity, and spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practices.map((practice, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 text-primary">{practice.icon}</div>
                  <CardTitle className="text-2xl">{practice.title}</CardTitle>
                  <CardDescription className="text-base">{practice.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {practice.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mind & Body and Workplace Sections */}
      {sections.map((section, index) => (
        <section
          key={index}
          className={`py-20 px-4 ${index % 2 === 0 ? "bg-gradient-to-br from-primary/5 to-accent/10" : ""}`}
        >
          <div className="container mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              <div
                className={`animate-fade-in ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className={`space-y-6 animate-fade-in ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="inline-flex p-3 bg-primary/10 rounded-lg text-primary">
                  {section.icon}
                </div>
                <h2 className="text-4xl font-bold text-foreground">{section.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
                <Button asChild size="lg">
                  <Link to="/services">Explore Programs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl animate-fade-in">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-4xl font-bold">
                Ready to Start Your Wellness Journey?
              </CardTitle>
              <CardDescription className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Join our classes and discover the transformative power of yoga and chanting
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link to="/services">View All Programs</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default YogaWellness;
