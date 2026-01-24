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
import treePose from "@/assets/poses/tree-pose.jpg";
import chairPose from "@/assets/poses/chair-pose.jpg";
import shoulderPose from "@/assets/poses/shoulder-pose.jpg";
import locustPose from "@/assets/poses/locust-pose.jpg";
import mahaveerAsana1 from "@/assets/poses/mahaveer-asana-1.jpg";
import mahaveerAsana2 from "@/assets/poses/mahaveer-asana-2.jpg";

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
  {
    id: "tree-pose",
    name: "Tree Pose",
    sanskritName: "Vrikshasana",
    image: treePose,
    description: "Tree Pose is a standing balance pose that strengthens the legs and core while improving focus and concentration. Like a tree rooted firmly in the earth, this pose cultivates stability and grace.",
    benefits: [
      "Improves balance and stability",
      "Strengthens legs, ankles, and core",
      "Opens the hips and stretches inner thighs",
      "Enhances focus and concentration",
      "Promotes a sense of grounding",
    ],
    steps: [
      "Stand tall with feet together",
      "Shift weight to your left foot",
      "Place right foot on inner left thigh or calf (not on knee)",
      "Bring hands to prayer position or raise overhead",
      "Fix your gaze on a steady point and hold",
    ],
  },
  {
    id: "chair-pose",
    name: "Chair Pose",
    sanskritName: "Utkatasana",
    image: chairPose,
    description: "Chair Pose is a powerful standing pose that builds strength and heat in the body. As if sitting in an imaginary chair, this pose challenges your endurance while toning the legs and core.",
    benefits: [
      "Strengthens thighs, calves, and ankles",
      "Tones the core and back muscles",
      "Stimulates the heart and diaphragm",
      "Builds stamina and endurance",
      "Improves posture",
    ],
    steps: [
      "Stand with feet hip-width apart",
      "Bend knees and lower hips as if sitting back",
      "Raise arms overhead alongside ears",
      "Keep weight in heels and chest lifted",
      "Hold for 5-10 breaths",
    ],
  },
  {
    id: "shoulder-pose",
    name: "Shoulder Pose",
    sanskritName: "Kandharasana",
    image: shoulderPose,
    description: "Shoulder Pose is a gentle backbend that opens the chest and strengthens the back. Also known as Bridge Pose, it creates a beautiful arch from shoulders to knees.",
    benefits: [
      "Strengthens the back and glutes",
      "Opens chest and shoulders",
      "Stretches the spine and hip flexors",
      "Calms the brain and reduces anxiety",
      "Improves digestion",
    ],
    steps: [
      "Lie on your back with knees bent",
      "Place feet flat on floor, hip-width apart",
      "Press into feet and lift hips toward ceiling",
      "Interlace hands under the back if comfortable",
      "Hold and breathe deeply",
    ],
  },
  {
    id: "locust-pose",
    name: "Locust Pose",
    sanskritName: "Salabhasana Purna",
    image: locustPose,
    description: "Locust Pose is an energizing backbend that strengthens the entire back body. This full expression lifts both legs and arms, building strength in the posterior chain.",
    benefits: [
      "Strengthens the back, glutes, and legs",
      "Improves posture",
      "Stimulates abdominal organs",
      "Helps relieve stress and fatigue",
      "Prepares body for deeper backbends",
    ],
    steps: [
      "Lie face down with arms alongside body",
      "Forehead or chin rests on the mat",
      "Inhale and lift head, chest, arms, and legs",
      "Keep legs straight and together",
      "Reach back through fingers and toes",
    ],
  },
  {
    id: "mahaveer-asana-1",
    name: "Mahaveer Asana 1",
    sanskritName: "Virabhadrasana",
    image: mahaveerAsana1,
    description: "Mahaveer Asana, also known as Warrior Pose, is a powerful standing pose that builds strength and confidence. Named after the fierce warrior Virabhadra, this pose embodies strength and courage.",
    benefits: [
      "Strengthens legs, ankles, and feet",
      "Opens hips and chest",
      "Builds stamina and concentration",
      "Improves balance and stability",
      "Energizes the entire body",
    ],
    steps: [
      "Stand with feet wide apart",
      "Turn right foot out 90 degrees",
      "Bend right knee over ankle",
      "Extend arms out to sides parallel to floor",
      "Gaze over right fingertips and hold",
    ],
  },
  {
    id: "mahaveer-asana-2",
    name: "Mahaveer Asana 2",
    sanskritName: "Virabhadrasana",
    image: mahaveerAsana2,
    description: "This variation of Mahaveer Asana continues the warrior sequence with a different arm position. It maintains the powerful leg stance while challenging balance and focus.",
    benefits: [
      "Deepens hip opening",
      "Strengthens the quadriceps",
      "Improves mental focus",
      "Builds core stability",
      "Enhances body awareness",
    ],
    steps: [
      "From Mahaveer Asana 1, maintain the leg position",
      "Adjust arm position as shown",
      "Keep the back leg strong and straight",
      "Engage the core for stability",
      "Breathe steadily and hold",
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
