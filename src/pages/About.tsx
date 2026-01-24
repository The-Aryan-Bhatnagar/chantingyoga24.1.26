import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Target, 
  Users, 
  Globe, 
  GraduationCap, 
  Video, 
  FlaskConical, 
  BookOpen, 
  Sparkles, 
  HandHeart,
  Leaf,
  Brain,
  Music,
  Stethoscope,
  Scale,
  UsersRound,
  AlertTriangle
} from "lucide-react";
import groupYogaImage from "@/assets/group-yoga.jpg";

const About = () => {
  const philosophyItems = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Ancient Roots",
      description: "Practices rooted in Vedic traditions and early yogic texts, honoring sound and vibration (mantra chanting) as powerful healing tools.",
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Science Behind Yoga",
      description: "Explaining how yoga postures, breathing, and sound vibrations influence the nervous system, hormones, and emotional balance using modern scientific understanding.",
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Bhakti Yoga Path",
      description: "Incorporating devotion, surrender, and love through chanting, prayer, and meditation to nurture emotional and spiritual wellness.",
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Holistic Healing",
      description: "Supporting physical and mental health alongside modern medicine, psychology, and Ayurveda for conditions like stress, anxiety, hypertension, and chronic illness.",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Ethical Living",
      description: "Promoting honesty, compassion, discipline, mindfulness, non-harm (ahimsa), and truth (satya) as a complete yogic lifestyle.",
    },
    {
      icon: <UsersRound className="h-8 w-8" />,
      title: "Inclusive & Universal",
      description: "Accessible to all ages, genders, cultures, and backgrounds—fact-based, inclusive, and free from myths.",
    },
  ];

  const offerings = [
    {
      icon: <GraduationCap className="h-7 w-7" />,
      title: "Teaching Courses & Certification",
      description: "Comprehensive yoga teacher training programs and professional certifications designed to deepen your practice and share the gift of yoga with others.",
    },
    {
      icon: <Video className="h-7 w-7" />,
      title: "Audio & Video Library",
      description: "Extensive collection of guided meditations, chanting sessions, and instructional videos accessible anytime, anywhere for your personal practice.",
    },
    {
      icon: <FlaskConical className="h-7 w-7" />,
      title: "Research & Studies",
      description: "Evidence-based research on yoga therapy and chanting practices, contributing to the scientific understanding of holistic wellness.",
    },
    {
      icon: <Sparkles className="h-7 w-7" />,
      title: "Specialized Programs",
      description: "Tailored wellness programs for specific conditions including stress management, hypertension, anxiety, and chronic illness support.",
    },
    {
      icon: <BookOpen className="h-7 w-7" />,
      title: "Educational Resources",
      description: "Books, articles, and learning materials covering yoga philosophy, anatomy, meditation techniques, and Ayurvedic lifestyle practices.",
    },
    {
      icon: <HandHeart className="h-7 w-7" />,
      title: "Community Support",
      description: "A global network of practitioners, teachers, and wellness seekers providing support, guidance, and shared growth on your yoga journey.",
    },
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "We approach every individual with kindness and understanding",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "Commitment to the highest standards in teaching and practice",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "Building supportive networks of wellness and growth",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Impact",
      description: "Spreading peace and healing worldwide",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative h-[450px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${groupYogaImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto animate-fade-in leading-relaxed italic">
            "Dedicated to spreading peace, healing, and harmony through ancient practices"
          </p>
        </div>
      </section>

      {/* Section 1: About Dr. Juhi Gautam */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">About Dr. Juhi Gautam</h2>
            <div className="flex flex-wrap justify-center gap-3 mb-2">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">MBBS (1997)</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">MRCP (2002)</span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">MRCGP</span>
            </div>
            <p className="text-lg text-accent font-semibold">25+ Years of Yoga Practice</p>
          </div>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Juhi Gautam has been practicing yoga for over 25 years, bringing together ancient wisdom and modern medical science. She grew up in a Vedic culture in one of India's holy places, where Ayurveda and yogic wisdom were part of her ancestral lineage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Her parents practiced a traditional lifestyle encompassing yoga, pranayama, meditation, vegetarianism, prayers, chanting, satsang, and scripture study. This rich cultural foundation has deeply influenced her holistic approach to health and wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Medical Excellence */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-10 animate-fade-in">
            Medical Excellence
          </h2>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Gautam graduated as a doctor in 1997 from Bangalore, India, and moved to the UK in 1998 to further her academic qualifications. She became a member of the Royal College of Physicians (RCP) in 2002 and is also a member of the Royal College of General Practitioners (RCGP) in London.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              During her internal medicine career, she trained in cardiology under Professor Beevers of the British Heart Foundation and interventional cardiologist Richard Carroll at St. John's Wood St. Elizabeth Hospital, London, gaining extensive expertise in cardiovascular health.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Integration of Medicine & Yoga */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-10 animate-fade-in">
            Integration of Medicine & Yoga
          </h2>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dr. Juhi Gautam uniquely combines her extensive medical training with deep-rooted yogic knowledge, offering a comprehensive approach to wellness. Her understanding of both Western medicine and Eastern healing practices allows her to guide individuals toward holistic health through evidence-based yoga therapy, mindful chanting, and lifestyle medicine.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center font-medium text-primary">
              Her mission is to bridge the gap between ancient wisdom and modern healthcare, making transformative wellness accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Who We Are */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-10 animate-fade-in">
            Who We Are
          </h2>
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chanting Yoga is a global initiative dedicated to promoting holistic wellness through the integration of traditional yoga practices with the transformative power of sound and vibration.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the principles of ancient yogic wisdom and rooted in Vedic culture, we bring authentic practices to modern seekers of health and peace.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach blends time-tested yoga techniques with modern scientific understanding to create comprehensive wellness programs. Through physical postures (asanas), breathing exercises (pranayama), and sacred chanting (mantra), we support healing on physical, mental, and spiritual levels.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Led by Dr. Juhi Gautam and a team of certified instructors, we have trained thousands of students, developed wellness programs for diverse communities, and continue research into the measurable benefits of chanting yoga.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Our Philosophy & Approach */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            Our Philosophy & Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophyItems.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-t-4 border-t-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: What We Offer */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8 space-y-4">
                  <div className="inline-flex p-3 bg-accent/20 rounded-xl text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Our Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Section 8: Our Journey */}
      <section className="py-20 px-4 bg-gradient-to-br from-accent/10 to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            Our Journey
          </h2>
          <div className="space-y-8 animate-fade-in">
            <Card className="border-l-4 border-l-primary overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">The Beginning</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Chanting Yoga was born from a vision to bring ancient healing practices into modern life, addressing stress and disconnection through yogic wisdom and sacred sound.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-accent mb-4">Global Expansion</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  From a small community initiative to a global presence in over 30 countries, reaching millions through centers and digital platforms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">Research & Innovation</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Partnerships with universities and research institutions, contributing to peer-reviewed studies validating chanting yoga's benefits.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 9: Important Disclaimer */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-destructive/30 bg-destructive/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-destructive/10 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">Important Disclaimer</h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  The information and practices shared through Chanting Yoga are intended for educational and wellness purposes only and are not a substitute for professional medical advice, diagnosis, or treatment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Always consult a qualified healthcare provider before beginning any new exercise or wellness program. Our instructors are trained yoga professionals but are not medical doctors.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
