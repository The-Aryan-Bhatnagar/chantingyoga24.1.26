import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Disclaimer
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Important information about our services and content
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="mb-8 border-accent bg-accent/10">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-6 w-6 text-accent shrink-0 mt-1" />
                <p className="text-muted-foreground">
                  Please read this disclaimer carefully before using our website or participating in our programs.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>General Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  The information provided on this website and through our programs is for general 
                  educational and informational purposes only. It is not intended as a substitute 
                  for professional medical advice, diagnosis, or treatment.
                </p>
                <p>
                  Always seek the advice of your physician or other qualified health provider with 
                  any questions you may have regarding a medical condition or before starting any 
                  new exercise or wellness program.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Physical Activity Disclaimer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Yoga, meditation, and related practices involve physical activity. You should 
                  consult with a healthcare professional before beginning any physical exercise 
                  program, particularly if you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Have any pre-existing health conditions</li>
                  <li>Are pregnant or nursing</li>
                  <li>Have recent injuries or surgeries</li>
                  <li>Are taking medications that may affect your ability to exercise</li>
                  <li>Have any concerns about your ability to safely participate</li>
                </ul>
                <p>
                  By participating in our classes or programs, you acknowledge that you do so 
                  at your own risk and assume full responsibility for any resulting injuries or damages.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>No Medical Claims</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  While yoga and meditation have been shown to have many health benefits, we do 
                  not make any medical claims about our programs. Our services are not intended 
                  to diagnose, treat, cure, or prevent any disease or medical condition.
                </p>
                <p>
                  Any references to specific health conditions on our website are for informational 
                  purposes only and should not be considered medical advice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Accuracy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We strive to provide accurate and up-to-date information on our website and in 
                  our programs. However, we make no representations or warranties of any kind, 
                  express or implied, about the completeness, accuracy, reliability, or suitability 
                  of the information.
                </p>
                <p>
                  Any reliance you place on such information is strictly at your own risk. We 
                  reserve the right to make changes to our content at any time without notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>External Links</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Our website may contain links to external websites. These links are provided 
                  for convenience and informational purposes only. We do not endorse or make any 
                  representations about the content, accuracy, or opinions expressed on external 
                  websites.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, Chanting Yoga and its instructors, 
                  employees, and affiliates shall not be liable for any direct, indirect, 
                  incidental, consequential, or punitive damages arising out of your access to, 
                  use of, or inability to use our website or services.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              Last updated: January 2025
            </p>
            <Button asChild>
              <Link to="/contact">Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
