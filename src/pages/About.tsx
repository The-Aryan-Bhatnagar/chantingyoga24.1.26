import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Globe } from "lucide-react";
import groupYogaImage from "@/assets/group-yoga.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "We approach every individual with kindness and understanding",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "Committed to the highest standards in teaching and practice",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building supportive networks of wellness and growth",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Spreading peace and healing practices worldwide",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${groupYogaImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            About Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            Dedicated to spreading peace, healing, and harmony through ancient practices
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground text-center mb-8">Who We Are</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chanting Yoga is a global initiative dedicated to promoting holistic wellness through
              the integration of traditional yoga practices with the transformative power of sound
              and vibration. Founded on the principles of ancient yogic wisdom, we have been serving
              communities worldwide for over two decades.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach combines time-tested yoga techniques with modern scientific understanding
              to create comprehensive wellness programs. We believe that through the harmonious
              blend of physical postures, breathing exercises, and sacred chanting, individuals can
              achieve profound healing on physical, mental, and spiritual levels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our certified instructors bring decades of combined experience in yoga therapy,
              meditation, and holistic healing. We have trained thousands of students and teachers,
              developed workplace wellness programs for major corporations, and conducted extensive
              research on the benefits of chanting yoga practices.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            Our Journey
          </h2>
          <div className="space-y-8 animate-fade-in">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">The Beginning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chanting Yoga was born from the vision of bringing ancient healing practices to
                  modern society. Recognizing the increasing stress and disconnection in contemporary
                  life, our founders dedicated themselves to preserving and sharing the profound
                  wisdom of yogic traditions combined with the vibrational healing of sacred sounds.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-accent mb-3">Global Expansion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  What started as a small community center has grown into a global movement. Today,
                  we have centers in over 30 countries, reaching millions of practitioners. Our
                  online programs and digital resources make ancient wisdom accessible to anyone,
                  anywhere in the world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-3">Research & Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We have partnered with leading universities and research institutions to study the
                  scientific benefits of chanting yoga. Our research has been published in
                  peer-reviewed journals and has contributed to the growing body of evidence
                  supporting mind-body healing practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Important Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The information and practices shared through Chanting Yoga are intended for
                educational and wellness purposes only. While yoga and chanting have been shown to
                provide numerous health benefits, they should not be considered as a substitute for
                professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Always seek the advice of your physician or other qualified health provider with any
                questions you may have regarding a medical condition. Never disregard professional
                medical advice or delay in seeking it because of something you have learned through
                our programs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you have any existing health conditions, injuries, or concerns, please consult
                with your healthcare provider before beginning any new exercise or wellness program.
                Our instructors are trained yoga professionals but are not medical doctors.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
