import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle>Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  By accessing our website or participating in our programs, you agree to be 
                  bound by these Terms and Conditions. If you disagree with any part of these 
                  terms, you may not access our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Chanting Yoga provides yoga classes, meditation sessions, teacher training 
                  programs, and related wellness services. We reserve the right to modify, 
                  suspend, or discontinue any service at any time without prior notice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Class Registration & Cancellation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Registration</h4>
                  <p>
                    Registration for classes must be completed before the class begins. Space 
                    is limited and confirmed on a first-come, first-served basis.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Cancellation Policy</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cancellations made 24+ hours before class: Full refund or credit</li>
                    <li>Cancellations made less than 24 hours: No refund (credit may be issued)</li>
                    <li>No-shows: No refund or credit</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Class Packages & Memberships</h4>
                  <p>
                    Class packages and memberships are non-refundable and non-transferable 
                    unless otherwise specified. Unused classes expire according to the terms 
                    of your purchase.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Teacher Training Programs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Teacher training programs require a deposit to secure your place. The 
                  remaining balance must be paid according to the payment schedule provided 
                  at registration.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Deposits are non-refundable after 14 days</li>
                  <li>Full refunds available within 14 days of registration</li>
                  <li>After program begins, no refunds will be issued</li>
                  <li>Transfer to a future program may be possible with advance notice</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Participant Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>As a participant, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Inform instructors of any injuries, health conditions, or pregnancy</li>
                  <li>Practice within your abilities and listen to your body</li>
                  <li>Arrive on time for classes</li>
                  <li>Respect other participants and maintain appropriate behavior</li>
                  <li>Follow studio rules and instructor guidance</li>
                  <li>Not attend class if you are unwell or contagious</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assumption of Risk</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  Yoga and related activities involve physical exertion that may result in 
                  injury. By participating in our programs, you acknowledge that you understand 
                  these risks and voluntarily assume responsibility for any injury that may occur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  All content on our website, including text, images, videos, and course 
                  materials, is the property of Chanting Yoga and is protected by copyright 
                  laws. You may not reproduce, distribute, or use our content without written 
                  permission.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photography & Video</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We may take photographs or videos during classes and events for promotional 
                  purposes. By participating, you consent to the use of your image unless you 
                  notify us otherwise in writing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  To the maximum extent permitted by law, Chanting Yoga shall not be liable 
                  for any indirect, incidental, special, consequential, or punitive damages 
                  arising out of your use of our services.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  These Terms shall be governed by and construed in accordance with the laws 
                  of the United Kingdom, without regard to its conflict of law provisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p>
                  We reserve the right to modify these Terms at any time. Changes will be 
                  effective immediately upon posting to our website. Your continued use of 
                  our services constitutes acceptance of the modified Terms.
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

export default Terms;
