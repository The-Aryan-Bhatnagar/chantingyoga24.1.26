import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "London, UK",
      rating: 5,
      text: "Chanting Yoga has transformed my life. The combination of meditation and sound healing has helped me overcome anxiety and find inner peace. The teachers are incredibly knowledgeable and supportive.",
      program: "Meditation Course",
    },
    {
      name: "Rajesh K.",
      location: "Mumbai, India",
      rating: 5,
      text: "I've practiced yoga for 20 years, but the approach at Chanting Yoga is unique. The integration of mantra and breathwork has deepened my practice beyond what I thought possible.",
      program: "Pranayama Intensive",
    },
    {
      name: "Emma L.",
      location: "New York, USA",
      rating: 5,
      text: "The 200-hour teacher training exceeded all my expectations. The curriculum is comprehensive, the community is wonderful, and I feel fully prepared to teach with confidence.",
      program: "Teacher Training",
    },
    {
      name: "Michael B.",
      location: "Sydney, Australia",
      rating: 5,
      text: "As someone dealing with chronic back pain, I was hesitant to try yoga. The therapeutic approach here has not only reduced my pain but improved my overall quality of life.",
      program: "Therapeutic Yoga",
    },
    {
      name: "Priya S.",
      location: "Toronto, Canada",
      rating: 5,
      text: "The online classes are just as powerful as in-person sessions. The teachers create such a beautiful, sacred space even through a screen. Highly recommend!",
      program: "Online Classes",
    },
    {
      name: "James W.",
      location: "Dublin, Ireland",
      rating: 5,
      text: "I came for stress relief and found so much more. The philosophy teachings have given me a new perspective on life, and the community feels like family.",
      program: "Yoga Foundations",
    },
    {
      name: "Anita R.",
      location: "Singapore",
      rating: 5,
      text: "The kirtan sessions are absolutely magical. There's something about chanting together that opens the heart in ways I never expected. Pure joy!",
      program: "Kirtan & Chanting",
    },
    {
      name: "David C.",
      location: "Cape Town, South Africa",
      rating: 5,
      text: "At 65, I thought I was too old to start yoga. The gentle classes here proved me wrong. I'm more flexible and energetic than I was ten years ago!",
      program: "Senior Yoga",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Testimonials
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Hear from our community of practitioners
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Quote className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      {testimonial.program}
                    </span>
                  </div>
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
            Ready to Start Your Journey?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our community and experience the transformation for yourself
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
