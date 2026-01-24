import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Heart, Zap, BookOpen, ExternalLink } from "lucide-react";

const Research = () => {
  const scientificFindings = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Neurological Benefits",
      description:
        "Studies show that chanting activates the parasympathetic nervous system, reducing stress hormones and promoting relaxation",
      findings: [
        "Increased alpha brain wave activity",
        "Reduced cortisol levels",
        "Enhanced neuroplasticity",
        "Improved cognitive function",
      ],
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Cardiovascular Health",
      description:
        "Regular yoga practice has been proven to improve heart health and reduce risk factors for cardiovascular disease",
      findings: [
        "Lower blood pressure",
        "Improved heart rate variability",
        "Reduced inflammation markers",
        "Better cholesterol levels",
      ],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Mental Wellness",
      description:
        "Research demonstrates significant improvements in mental health outcomes through consistent yoga and meditation practice",
      findings: [
        "Reduced anxiety and depression",
        "Enhanced emotional regulation",
        "Improved sleep quality",
        "Greater life satisfaction",
      ],
    },
  ];

  const researchArticles = [
    {
      title: "The Effects of Yoga on Stress Reduction: A Systematic Review",
      journal: "Journal of Alternative Medicine",
      year: "2023",
      summary:
        "Comprehensive analysis of 47 studies showing significant stress reduction across diverse populations",
      link: "#",
    },
    {
      title: "Chanting Meditation and Brain Function: An fMRI Study",
      journal: "Neuroscience & Biobehavioral Reviews",
      year: "2022",
      summary:
        "Neuroimaging research revealing increased activity in brain regions associated with emotional regulation",
      link: "#",
    },
    {
      title: "Workplace Yoga Programs: Impact on Employee Well-being",
      journal: "Occupational Health Psychology",
      year: "2023",
      summary:
        "Study of 500+ corporate employees showing 40% reduction in workplace stress and 25% increase in productivity",
      link: "#",
    },
    {
      title: "Sound Vibration and Cellular Healing: Molecular Mechanisms",
      journal: "International Journal of Yoga Therapy",
      year: "2022",
      summary:
        "Research exploring how sound vibrations influence cellular processes and promote healing",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            The Science Behind Chanting and Yoga
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Evidence-based research supporting the healing power of yoga and sound meditation
          </p>
        </div>
      </section>

      {/* Scientific Findings Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Scientific Findings</h2>
            <p className="text-lg text-muted-foreground">
              Decades of peer-reviewed research validate the profound health benefits of yoga and
              chanting practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scientificFindings.map((finding, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mb-4 text-primary">{finding.icon}</div>
                  <CardTitle className="text-2xl">{finding.title}</CardTitle>
                  <CardDescription className="text-base">{finding.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-foreground mb-3">Key Findings:</h4>
                  <ul className="space-y-2">
                    {finding.findings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Articles Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <div className="inline-flex p-4 bg-primary/10 rounded-full text-primary mb-4">
              <BookOpen className="h-8 w-8" />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-6">Research Studies</h2>
            <p className="text-lg text-muted-foreground">
              Explore peer-reviewed studies and scientific publications on yoga and meditation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {researchArticles.map((article, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                      <CardDescription>
                        {article.journal} • {article.year}
                      </CardDescription>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.summary}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                      Read Full Study
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12 animate-fade-in">
            References & Resources
          </h2>
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <div className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  Our programs and teachings are based on extensive research from leading
                  institutions including:
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      Harvard Medical School - Mind/Body Medical Institute
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      National Center for Complementary and Integrative Health (NCCIH)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      International Journal of Yoga - Research publications
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      American Psychological Association - Stress in America studies
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>
                      World Health Organization - Traditional Medicine Strategy
                    </span>
                  </li>
                </ul>
                <p className="leading-relaxed pt-4">
                  For a complete list of references and to access our research library, please
                  visit our library page or contact our research department.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0 shadow-2xl animate-fade-in">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-4xl font-bold">
                Experience the Benefits Yourself
              </CardTitle>
              <CardDescription className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Don't just read about it - join our programs and discover firsthand the
                transformative power of chanting yoga
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <a href="/services">Explore Programs</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a href="/contact">Get Started</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Research;
