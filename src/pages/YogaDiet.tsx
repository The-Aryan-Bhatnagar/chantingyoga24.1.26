import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Apple, Leaf, Droplets, Sun, Moon, Clock } from "lucide-react";

const YogaDiet = () => {
  const dietPrinciples = [
    {
      icon: Leaf,
      title: "Sattvic Foods",
      description: "Fresh, pure, and light foods that promote clarity, peace, and spiritual growth. Includes fresh fruits, vegetables, whole grains, nuts, and dairy.",
    },
    {
      icon: Apple,
      title: "Seasonal Eating",
      description: "Aligning your diet with nature's cycles, eating foods that are locally available and in season for optimal nutrition.",
    },
    {
      icon: Droplets,
      title: "Proper Hydration",
      description: "Drinking warm water throughout the day to aid digestion, cleanse the system, and maintain energy levels.",
    },
    {
      icon: Sun,
      title: "Mindful Eating",
      description: "Eating with awareness, gratitude, and in a calm environment to enhance digestion and nutrient absorption.",
    },
    {
      icon: Moon,
      title: "Light Evening Meals",
      description: "Consuming lighter foods in the evening to promote restful sleep and proper digestion overnight.",
    },
    {
      icon: Clock,
      title: "Regular Meal Times",
      description: "Maintaining consistent eating schedules to support the body's natural rhythms and digestive fire.",
    },
  ];

  const foodCategories = [
    {
      category: "Sattvic (Pure)",
      foods: "Fresh fruits, vegetables, whole grains, legumes, nuts, seeds, dairy, honey",
      effect: "Promotes clarity, peace, and spiritual growth",
    },
    {
      category: "Rajasic (Stimulating)",
      foods: "Spicy foods, coffee, tea, chocolate, fermented foods",
      effect: "Creates activity, restlessness, and passion",
    },
    {
      category: "Tamasic (Heavy)",
      foods: "Processed foods, meat, alcohol, stale foods, overeating",
      effect: "Causes lethargy, confusion, and dullness",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Yoga Diet
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Nourish your body and mind with the principles of yogic nutrition
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="animate-fade-in">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                In yoga, food is not just fuel—it's medicine for the body, mind, and spirit. 
                The yogic diet, known as Sattvic diet, emphasizes pure, clean, and natural 
                foods that promote clarity, calmness, and spiritual development. By aligning 
                our eating habits with yogic principles, we can enhance our practice and 
                experience greater vitality.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Diet Principles */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Yogic Diet Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dietPrinciples.map((principle, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <principle.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{principle.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {principle.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            The Three Gunas of Food
          </h2>
          <div className="space-y-6">
            {foodCategories.map((cat, index) => (
              <Card key={index} className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{cat.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-foreground">
                    <strong>Foods:</strong> {cat.foods}
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Effect:</strong> {cat.effect}
                  </p>
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
            Transform Your Relationship with Food
          </h2>
          <p className="text-muted-foreground mb-8">
            Learn how to incorporate yogic nutrition principles into your daily life
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Personalized Guidance</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default YogaDiet;
