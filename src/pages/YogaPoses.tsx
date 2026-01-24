import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from "lucide-react";

import camelPose1 from "@/assets/poses/camel-pose-1.jpg";
import camelPose3 from "@/assets/poses/camel-pose-3.jpg";
import catPose2 from "@/assets/poses/cat-pose-2.jpg";
import crocodilePose2 from "@/assets/poses/crocodile-pose-2.jpg";
import crocodilePose4 from "@/assets/poses/crocodile-pose-4.jpg";
import crocodilePose from "@/assets/poses/crocodile-pose.jpg";

interface YogaPose {
  id: string;
  name: string;
  sanskritName: string;
  image: string;
  description: string;
  benefits: string[];
  steps: string[];
}

const yogaPoses: YogaPose[] = [
  {
    id: "camel-pose-1",
    name: "Camel Pose 1",
    sanskritName: "Ustrasana",
    image: camelPose1,
    description: "Camel Pose is a heart-opening backbend that stretches the entire front of the body. This is the initial position where you prepare for the full expression of the pose by kneeling and placing hands on the lower back.",
    benefits: [
      "Opens the chest and shoulders",
      "Strengthens the back muscles",
      "Improves posture and spinal flexibility",
      "Stimulates the thyroid gland",
      "Reduces stress and anxiety",
    ],
    steps: [
      "Kneel on the floor with knees hip-width apart",
      "Place your hands on your lower back for support",
      "Engage your core and lift your chest upward",
      "Gently lean back, keeping your hips over your knees",
      "Hold for 5-10 breaths",
    ],
  },
  {
    id: "camel-pose-3",
    name: "Camel Pose 3",
    sanskritName: "Ustrasana",
    image: camelPose3,
    description: "This is the full expression of Camel Pose where the head drops back and the chest opens fully toward the sky. The deep backbend creates a powerful heart-opening experience.",
    benefits: [
      "Deep stretch for the hip flexors",
      "Opens the heart chakra",
      "Strengthens the thighs and glutes",
      "Improves respiratory function",
      "Energizes the body and mind",
    ],
    steps: [
      "From the initial camel position, deepen the backbend",
      "Allow your head to drop back gently",
      "Reach your hands toward your heels if comfortable",
      "Keep hips pressing forward over the knees",
      "Breathe deeply and hold for 5-10 breaths",
    ],
  },
  {
    id: "cat-pose",
    name: "Cat Pose",
    sanskritName: "Marjaryasana",
    image: catPose2,
    description: "Cat Pose is a gentle spinal flexion that is often paired with Cow Pose. It helps to release tension in the spine and neck while gently massaging the internal organs.",
    benefits: [
      "Stretches the spine and back muscles",
      "Massages the digestive organs",
      "Relieves stress and calms the mind",
      "Improves coordination and balance",
      "Helps with back pain relief",
    ],
    steps: [
      "Start on all fours in a tabletop position",
      "Hands under shoulders, knees under hips",
      "Exhale and round your spine toward the ceiling",
      "Drop your head and tuck your chin to chest",
      "Press through your hands and knees",
    ],
  },
  {
    id: "crocodile-pose-2",
    name: "Crocodile Pose 2",
    sanskritName: "Makarasana",
    image: crocodilePose2,
    description: "Crocodile Pose is a relaxing prone position that promotes deep diaphragmatic breathing. This variation with raised upper body helps to gently strengthen the back while remaining in a restful state.",
    benefits: [
      "Promotes deep relaxation",
      "Encourages diaphragmatic breathing",
      "Relieves lower back tension",
      "Calms the nervous system",
      "Reduces fatigue and stress",
    ],
    steps: [
      "Lie face down on your mat",
      "Cross your forearms and rest your forehead on them",
      "Lift your upper body slightly, propping on elbows",
      "Allow your legs to relax completely",
      "Focus on deep belly breathing",
    ],
  },
  {
    id: "crocodile-pose-4",
    name: "Crocodile Pose 4",
    sanskritName: "Makarasana",
    image: crocodilePose4,
    description: "This dynamic variation of Crocodile Pose incorporates gentle leg movement, activating the lower body while maintaining the relaxed upper body position. Great for releasing hip tension.",
    benefits: [
      "Releases hip and lower back tension",
      "Gentle activation of leg muscles",
      "Improves hip mobility",
      "Maintains relaxation in upper body",
      "Balances energy in the body",
    ],
    steps: [
      "From basic crocodile pose, keep upper body relaxed",
      "Gently bend one leg at the knee",
      "Lift the foot toward the ceiling",
      "Keep the movement slow and controlled",
      "Alternate legs while breathing deeply",
    ],
  },
  {
    id: "crocodile-pose",
    name: "Crocodile Pose",
    sanskritName: "Makarasana",
    image: crocodilePose,
    description: "The classic Crocodile Pose is a deeply restorative posture that mimics a crocodile resting on a riverbank. It's excellent for observing the natural rhythm of breath and releasing all tension from the body.",
    benefits: [
      "Complete body relaxation",
      "Awareness of natural breathing",
      "Soothes the nervous system",
      "Reduces blood pressure",
      "Prepares body for meditation",
    ],
    steps: [
      "Lie flat on your stomach",
      "Rest your forehead on crossed forearms",
      "Allow legs to fall open naturally",
      "Close your eyes and soften your entire body",
      "Observe the natural rise and fall of breath",
    ],
  },
];

const YogaPoses = () => {
  const [selectedPose, setSelectedPose] = useState<YogaPose | null>(null);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Yoga Poses
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            Explore our collection of yoga poses with detailed instructions and benefits
          </p>
        </div>
      </section>

      {/* Poses Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yogaPoses.map((pose, index) => (
              <Card
                key={pose.id}
                className="overflow-hidden cursor-pointer group hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedPose(pose)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={pose.image}
                    alt={pose.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground">{pose.name}</h3>
                  <p className="text-sm text-primary italic">({pose.sanskritName})</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pose Detail Dialog */}
      <Dialog open={!!selectedPose} onOpenChange={() => setSelectedPose(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPose && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedPose.name}
                  <span className="text-primary font-normal ml-2">({selectedPose.sanskritName})</span>
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Image */}
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={selectedPose.image}
                    alt={selectedPose.name}
                    className="w-full h-auto max-h-[400px] object-contain bg-muted"
                  />
                </div>

                {/* Description */}
                <DialogDescription className="text-base text-foreground leading-relaxed">
                  {selectedPose.description}
                </DialogDescription>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {selectedPose.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">How to Practice:</h4>
                  <ol className="space-y-2">
                    {selectedPose.steps.map((step, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-6 h-6 flex items-center justify-center bg-primary text-primary-foreground rounded-full text-sm font-medium shrink-0">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YogaPoses;
