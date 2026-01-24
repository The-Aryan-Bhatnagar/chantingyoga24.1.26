import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, Clock, Users, Award, Calendar, CheckCircle } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "200-Hour Yoga Teacher Training",
      duration: "4 weeks intensive / 3 months part-time",
      description: "Comprehensive foundation training certified by Yoga Alliance. Learn to teach with confidence and authenticity.",
      highlights: [
        "Asana practice and teaching methodology",
        "Anatomy and physiology",
        "Yoga philosophy and history",
        "Pranayama and meditation",
        "Teaching practicum",
      ],
      level: "Foundation",
    },
    {
      title: "300-Hour Advanced Training",
      duration: "6 weeks intensive / 6 months part-time",
      description: "Deepen your knowledge and refine your teaching skills with advanced studies.",
      highlights: [
        "Advanced asana and adjustments",
        "Therapeutic applications",
        "Advanced pranayama techniques",
        "Business of yoga",
        "Specialized teaching skills",
      ],
      level: "Advanced",
    },
    {
      title: "Meditation Teacher Certification",
      duration: "4 weeks",
      description: "Learn to guide others in the practice of meditation with this comprehensive certification.",
      highlights: [
        "Various meditation techniques",
        "Neuroscience of meditation",
        "Creating guided meditations",
        "Working with students",
        "Building a meditation practice",
      ],
      level: "Specialized",
    },
    {
      title: "Pranayama Intensive",
      duration: "2 weeks",
      description: "Deep dive into the science and practice of yogic breathing.",
      highlights: [
        "Classical pranayama techniques",
        "Breath and the nervous system",
        "Therapeutic applications",
        "Teaching methodology",
        "Personal practice development",
      ],
      level: "Specialized",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Teaching Courses
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Begin your journey as a yoga teacher with our certified training programs
          </p>
        </div>
      </section>

      {/* Why Train With Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Train With Chanting Yoga?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Certified", description: "Yoga Alliance registered programs" },
              { icon: Users, title: "Small Groups", description: "Personalized attention and support" },
              { icon: GraduationCap, title: "Experienced", description: "Learn from seasoned teachers" },
              { icon: Calendar, title: "Flexible", description: "Multiple schedule options" },
            ].map((item, index) => (
              <Card key={index} className="text-center animate-fade-in">
                <CardContent className="pt-6">
                  <div className="p-3 bg-primary/10 rounded-full inline-flex mb-4">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Training Programs
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {course.level}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
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
            Ready to Begin Your Teaching Journey?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us to learn more about upcoming training dates and enrollment
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Courses;
