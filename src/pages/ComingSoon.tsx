import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface ComingSoonProps {
  title?: string;
}

const ComingSoon = ({ title = "Coming Soon" }: ComingSoonProps) => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full text-center animate-fade-in">
        <CardHeader>
          <div className="mx-auto mb-6 p-6 bg-primary/10 rounded-full text-primary inline-flex">
            <Construction className="h-16 w-16" />
          </div>
          <CardTitle className="text-4xl md:text-5xl font-bold mb-4">{title}</CardTitle>
          <CardDescription className="text-xl">
            We're working on bringing you amazing content. This page will be available soon!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            In the meantime, explore our other resources or get in touch with us to learn more
            about our programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">Go to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoon;
