import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Building, Mountain, Video, HeartPulse, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="h-10 w-10" />,
      title: "Yoga Classes",
      description: "Group and private sessions for all levels, from beginners to advanced practitioners",
      features: [
        "Beginner-friendly classes",
        "Advanced asana practice",
        "Personalized attention",
        "Small group sizes",
      ],
      duration: "60-90 minutes",
      link: "/contact",
    },
    {
      icon: <Building className="h-10 w-10" />,
      title: "Corporate Workshops",
      description: "Customized workplace wellness programs to reduce stress and boost productivity",
      features: [
        "On-site or virtual sessions",
        "Stress management techniques",
        "Team building activities",
        "Flexible scheduling",
      ],
      duration: "45-60 minutes",
      link: "/contact",
    },
    {
      icon: <Mountain className="h-10 w-10" />,
      title: "Wellness Retreats",
      description: "Immersive multi-day experiences in serene natural settings for deep healing",
      features: [
        "Peaceful natural locations",
        "All meals included",
        "Multiple daily sessions",
        "Nature walks & meditation",
      ],
      duration: "3-7 days",
      link: "/contact",
    },
    {
      icon: <Video className="h-10 w-10" />,
      title: "Online Meditation",
      description: "Live-streamed and recorded sessions accessible from anywhere in the world",
      features: [
        "Live interactive classes",
        "Recorded session library",
        "Global community",
        "Flexible timing",
      ],
      duration: "30-45 minutes",
      link: "/contact",
    },
    {
      icon: <HeartPulse className="h-10 w-10" />,
      title: "Personalized Healing",
      description: "One-on-one consultations and customized wellness plans for your specific needs",
      features: [
        "Individual assessment",
        "Custom practice plans",
        "Ongoing support",
        "Progress tracking",
      ],
      duration: "Customized",
      link: "/contact",
    },
    {
      icon: <Star className="h-10 w-10" />,
      title: "Teacher Training",
      description: "Comprehensive certification programs to become a certified yoga instructor",
      features: [
        "200-hour RYT certification",
        "Expert mentorship",
        "Practice teaching",
        "Lifetime support",
      ],
      duration: "3-6 months",
      link: "/courses",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      role: "Corporate Executive",
      content:
        "The workplace wellness program transformed our office culture. Our team is more focused, less stressed, and productivity has increased significantly.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      content:
        "Online meditation sessions fit perfectly into my busy schedule. I've never felt more centered and balanced in my life.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Teacher",
      content:
        "The personalized healing plan addressed my specific health concerns. After just 3 months, I feel like a completely different person.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Our Offerings
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Discover programs designed to meet you wherever you are on your wellness journey
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      Duration: <span className="font-semibold text-foreground">{service.duration}</span>
                    </p>
                    <Button
                      asChild
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground"
                      variant="outline"
                    >
                      <Link to={service.link}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            What Our Students Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>{testimonial.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Choose the program that's right for you or contact us for a personalized recommendation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" className="text-lg px-8">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link to="/research">Learn About the Science</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
