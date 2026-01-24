import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, ExternalLink } from "lucide-react";

const Books = () => {
  const books = [
    {
      title: "Light on Yoga",
      author: "B.K.S. Iyengar",
      description: "The definitive guide to yoga practice, featuring detailed instructions for over 200 poses with photographs.",
      category: "Asana Practice",
    },
    {
      title: "The Yoga Sutras of Patanjali",
      author: "Sri Swami Satchidananda",
      description: "A comprehensive translation and commentary on the foundational text of yoga philosophy.",
      category: "Philosophy",
    },
    {
      title: "Autobiography of a Yogi",
      author: "Paramahansa Yogananda",
      description: "A spiritual classic recounting the life and teachings of one of the most influential yoga masters.",
      category: "Spiritual",
    },
    {
      title: "The Heart of Yoga",
      author: "T.K.V. Desikachar",
      description: "Developing a personal practice with insights from the Viniyoga tradition.",
      category: "Practice",
    },
    {
      title: "Light on Pranayama",
      author: "B.K.S. Iyengar",
      description: "The definitive guide to the art of breathing in yoga with detailed techniques and progressions.",
      category: "Pranayama",
    },
    {
      title: "The Bhagavad Gita",
      author: "Eknath Easwaran (Translation)",
      description: "A timeless guide to spiritual wisdom and the path of yoga as taught by Lord Krishna.",
      category: "Philosophy",
    },
    {
      title: "Yoga Anatomy",
      author: "Leslie Kaminoff",
      description: "Illustrated guide to the structures and principles underlying each yoga movement.",
      category: "Anatomy",
    },
    {
      title: "Eastern Body, Western Mind",
      author: "Anodea Judith",
      description: "Psychology and the chakra system as a path to the self.",
      category: "Energy & Chakras",
    },
  ];

  const categories = ["All", "Asana Practice", "Philosophy", "Spiritual", "Pranayama", "Anatomy", "Energy & Chakras"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Recommended Books
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Deepen your understanding with these essential yoga and wellness texts
          </p>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <Card key={index} className="animate-fade-in hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">{book.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">by {book.author}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-base flex-1">
                    {book.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                      {book.category}
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
            Want Personalized Recommendations?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us for book suggestions tailored to your practice level and interests
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Recommendations</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Books;
