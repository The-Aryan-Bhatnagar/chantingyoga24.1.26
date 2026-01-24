import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Chanting Yoga ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or use our services.
                </p>
                <p>
                  Please read this privacy policy carefully. If you do not agree with the terms 
                  of this privacy policy, please do not access the site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We may collect information about you in a variety of ways:</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Personal Data</h4>
                    <p>
                      When you register for classes, sign up for our newsletter, or contact us, 
                      we may collect personal information such as your name, email address, phone 
                      number, and mailing address.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Health Information</h4>
                    <p>
                      For safety purposes, we may collect health-related information relevant to 
                      your yoga practice, such as injuries or medical conditions. This information 
                      is kept strictly confidential.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Payment Information</h4>
                    <p>
                      When you make purchases, payment information is processed securely by our 
                      payment processors. We do not store complete credit card information.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Usage Data</h4>
                    <p>
                      We automatically collect certain information when you visit our website, 
                      including your IP address, browser type, pages visited, and time spent on pages.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and maintain our services</li>
                  <li>Process registrations and payments</li>
                  <li>Send you updates, newsletters, and promotional materials (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and services</li>
                  <li>Ensure the safety of our classes and participants</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information with:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Service providers who assist in operating our website and services</li>
                  <li>Payment processors for transaction processing</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal information. However, no method of transmission over the Internet is 
                  100% secure, and we cannot guarantee absolute security.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Lodge a complaint with a supervisory authority</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Our website may use cookies to enhance your experience. You can choose to 
                  disable cookies through your browser settings, though this may affect the 
                  functionality of our website.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any changes by posting the new Privacy Policy on this page and updating the 
                  "Last Updated" date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-2">
                  Email: chantingyoga629@gmail.com<br />
                  Phone: +44 7342 456500
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

export default Privacy;
