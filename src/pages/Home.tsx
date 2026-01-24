import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower2, Heart, Sparkles, Users, Brain, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-meditation.jpg";
import lotusImage from "@/assets/lotus-flower.jpg";

const Home = () => {
  const features = [
    {
      icon: <Flower2 className="h-8 w-8" />,
      title: "Explore Yoga Basics",
      description: "Learn fundamental breathing techniques and chanting meditation practices",
      link: "/yoga-wellness",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Workplace Wellness",
      description: "Transform your work environment with mindfulness and stress relief programs",
      link: "/services",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Join Our Programs",
      description: "Discover personalized healing plans and wellness retreats",
      link: "/services",
    },
  ];

  const benefits = [
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Physical Healing",
      description: "Improve flexibility, strength, and overall physical health",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Mental Clarity",
      description: "Enhance focus, reduce anxiety, and find inner peace",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Spiritual Growth",
      description: "Connect with your inner self through ancient practices",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden py-16 md:py-0 w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-[hsl(var(--overlay-teal))]/70" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 animate-fade-in-up w-full max-w-[90vw] sm:max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-lg leading-tight">
            Yoga for Health, Mind, and Balance
          </h1>
          <p className="text-sm sm:text-base md:text-2xl text-white mb-6 md:mb-8 max-w-full sm:max-w-3xl mx-auto drop-shadow leading-relaxed">
            Integrating ancient yoga wisdom with modern medical expertise for complete healing
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full max-w-full">
            <Button
              asChild
              className="bg-[hsl(var(--cta-yellow))] hover:bg-[hsl(var(--cta-yellow))]/90 text-foreground text-sm sm:text-base md:text-lg px-6 py-5 sm:px-8 sm:py-6 font-semibold w-full sm:w-auto"
            >
              <Link to="/contact">Book Consultation →</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white text-foreground hover:bg-white/90 border-0 text-sm sm:text-base md:text-lg px-6 py-5 sm:px-8 sm:py-6 font-semibold w-full sm:w-auto"
            >
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-b from-background to-secondary/30 w-full overflow-hidden">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 animate-fade-in">
            Awaken the Mind. Heal through Sound. Live in Harmony.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed animate-fade-in">
            Chanting Yoga combines traditional yoga practices with the healing power of sound and
            vibration. Through mindful breathing, meditation, and sacred chants, we help you achieve
            physical wellness, mental clarity, and spiritual growth. Our evidence-based approach
            integrates ancient wisdom with modern science to create transformative healing
            experiences.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 w-full overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    <Link to={feature.link}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10 w-full overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={lotusImage}
                alt="Lotus flower representing spiritual growth"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-4 sm:space-y-8 animate-fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                The Power of Chanting Yoga
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                Experience holistic transformation through the ancient practice of chanting combined
                with traditional yoga postures and breathing techniques.
              </p>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
              <Button asChild size="lg" className="mt-6">
                <Link to="/research">Discover the Science</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 w-full overflow-hidden">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl animate-fade-in">
            <CardHeader className="text-center space-y-4 pb-8">
              <CardTitle className="text-4xl md:text-5xl font-bold">
                Begin Your Journey Today
              </CardTitle>
              <CardDescription className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Join thousands who have transformed their lives through the healing power of
                chanting yoga
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <Link to="/services">View Programs</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
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

export default Home;
