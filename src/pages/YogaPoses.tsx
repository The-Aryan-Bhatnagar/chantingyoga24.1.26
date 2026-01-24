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
import twistedCobraPose3 from "@/assets/poses/twisted-cobra-pose-3.jpg";
import twistedCobraPose from "@/assets/poses/twisted-cobra-pose.jpg";
import warriorPose1 from "@/assets/poses/warrior-pose-1.jpg";
import bowPose2 from "@/assets/poses/bow-pose-2.jpg";
import bridgePose from "@/assets/poses/bridge-pose.jpg";
import bridgePose1 from "@/assets/poses/bridge-pose-1.jpg";
import bridgePose2 from "@/assets/poses/bridge-pose-2.jpg";
import camelPose2 from "@/assets/poses/camel-pose-2.jpg";
import catPose from "@/assets/poses/cat-pose.jpg";
import cobraPose2 from "@/assets/poses/cobra-pose-2.jpg";
import cobraPose3 from "@/assets/poses/cobra-pose-3.jpg";
import crocodilePose5 from "@/assets/poses/crocodile-pose-5.jpg";
import locustPose2 from "@/assets/poses/locust-pose-2.jpg";
import locustPosePurna from "@/assets/poses/locust-pose-purna.jpg";
import mahaveerAsana3 from "@/assets/poses/mahaveer-asana-3.jpg";
import rabbitPose1 from "@/assets/poses/rabbit-pose-1.jpg";
import rabbitPose2 from "@/assets/poses/rabbit-pose-2.jpg";
import twistedCobraPose4 from "@/assets/poses/twisted-cobra-pose-4.jpg";
import warriorPose3 from "@/assets/poses/warrior-pose-3.jpg";
import bowPose from "@/assets/poses/bow-pose.jpg";
import cobraPose1 from "@/assets/poses/cobra-pose-1.jpg";

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
  {
    id: "twisted-cobra-pose-3",
    name: "Twisted Cobra Pose 3",
    sanskritName: "Tirak Bhujangasana",
    image: twistedCobraPose3,
    description: "Twisted Cobra Pose is a variation of the classic Cobra that adds a spinal twist. This pose combines the benefits of a backbend with a gentle twist, improving spinal mobility and flexibility.",
    benefits: [
      "Increases spinal flexibility",
      "Massages abdominal organs",
      "Opens the chest and shoulders",
      "Improves digestion",
      "Relieves lower back tension",
    ],
    steps: [
      "Lie face down on your mat",
      "Place palms under shoulders",
      "Inhale and lift your chest off the floor",
      "Gently twist your torso to one side",
      "Hold and breathe, then switch sides",
    ],
  },
  {
    id: "twisted-cobra-pose",
    name: "Twisted Cobra Pose",
    sanskritName: "Tirak Bhujangasana",
    image: twistedCobraPose,
    description: "This classic Twisted Cobra variation opens the chest while creating a gentle spinal rotation. The twist helps to detoxify the body and improve spinal health.",
    benefits: [
      "Strengthens the spine",
      "Stimulates internal organs",
      "Opens the heart center",
      "Reduces stress and fatigue",
      "Improves posture",
    ],
    steps: [
      "Begin in prone position",
      "Prop yourself up on your forearms or hands",
      "Lift the chest and twist gently to the side",
      "Keep hips grounded on the mat",
      "Breathe deeply and hold",
    ],
  },
  {
    id: "warrior-pose-1",
    name: "Warrior Pose 1",
    sanskritName: "Virabhadrasana I",
    image: warriorPose1,
    description: "Warrior Pose 1 is a foundational standing pose that builds strength, stamina, and focus. Named after the fierce warrior Virabhadra, this pose embodies courage and determination.",
    benefits: [
      "Strengthens legs and ankles",
      "Stretches hip flexors and groin",
      "Opens the chest and lungs",
      "Builds stamina and concentration",
      "Improves balance",
    ],
    steps: [
      "Step one foot back into a lunge position",
      "Turn back foot at 45-degree angle",
      "Bend front knee over ankle",
      "Raise arms overhead, palms facing",
      "Square hips forward and hold",
    ],
  },
  {
    id: "bow-pose-2",
    name: "Bow Pose",
    sanskritName: "Dhanurasana",
    image: bowPose2,
    description: "Bow Pose is an energizing backbend that resembles an archer's bow. This powerful pose opens the entire front body while strengthening the back muscles.",
    benefits: [
      "Stretches the entire front body",
      "Strengthens back muscles",
      "Improves posture",
      "Stimulates abdominal organs",
      "Increases energy and vitality",
    ],
    steps: [
      "Lie on your stomach",
      "Bend knees and reach back to hold ankles",
      "Inhale and lift chest and thighs off floor",
      "Pull feet toward buttocks to deepen",
      "Hold and breathe, then release gently",
    ],
  },
  {
    id: "bridge-pose",
    name: "Bridge Pose",
    sanskritName: "Setubandhasana",
    image: bridgePose,
    description: "Bridge Pose is a restorative backbend that creates a bridge shape with the body. This pose opens the chest and stretches the spine while strengthening the legs and glutes.",
    benefits: [
      "Stretches the chest and spine",
      "Calms the brain and reduces stress",
      "Stimulates thyroid and lungs",
      "Strengthens legs and buttocks",
      "Reduces anxiety and fatigue",
    ],
    steps: [
      "Lie on your back with knees bent",
      "Place feet flat on floor, hip-width apart",
      "Arms alongside body, palms down",
      "Press into feet and lift hips toward ceiling",
      "Hold and breathe deeply",
    ],
  },
  {
    id: "bridge-pose-1",
    name: "Bridge Pose 1",
    sanskritName: "Setubandhasana",
    image: bridgePose1,
    description: "This variation of Bridge Pose emphasizes the arch in the back while keeping the shoulders grounded. It's excellent for opening the heart center and stretching the hip flexors.",
    benefits: [
      "Opens the hip flexors",
      "Strengthens the back body",
      "Improves spinal flexibility",
      "Calms the nervous system",
      "Prepares for deeper backbends",
    ],
    steps: [
      "Lie on your back with knees bent",
      "Keep feet hip-width apart, close to buttocks",
      "Press through feet and lift hips high",
      "Keep shoulders and head on the mat",
      "Hold and breathe steadily",
    ],
  },
  {
    id: "bridge-pose-2",
    name: "Bridge Pose 2",
    sanskritName: "Setubandhasana",
    image: bridgePose2,
    description: "This deeper variation of Bridge Pose creates a higher arch and provides an intense stretch for the spine and hip flexors while strengthening the posterior chain.",
    benefits: [
      "Deepens hip flexor stretch",
      "Strengthens glutes and hamstrings",
      "Opens the chest fully",
      "Improves back flexibility",
      "Energizes the body",
    ],
    steps: [
      "Lie on your back with knees bent",
      "Place feet close to buttocks",
      "Press into feet and lift hips as high as possible",
      "Support lower back with hands if needed",
      "Hold and breathe deeply",
    ],
  },
  {
    id: "camel-pose-2",
    name: "Camel Pose 2",
    sanskritName: "Usthasana",
    image: camelPose2,
    description: "Camel Pose 2 is an intermediate backbend where the practitioner begins to reach back toward the heels. This pose deeply opens the chest and stretches the entire front body.",
    benefits: [
      "Opens the chest and heart",
      "Stretches hip flexors",
      "Strengthens back muscles",
      "Improves spinal flexibility",
      "Stimulates the throat chakra",
    ],
    steps: [
      "Kneel with knees hip-width apart",
      "Tuck toes under for support",
      "Place hands on lower back",
      "Lean back and begin reaching toward heels",
      "Keep hips over knees and breathe",
    ],
  },
  {
    id: "cat-pose-alt",
    name: "Cat Pose",
    sanskritName: "Marjaryasana",
    image: catPose,
    description: "Cat Pose is a fundamental yoga pose that gently stretches the spine and releases tension in the back. This flowing movement helps to warm up the body and calm the mind.",
    benefits: [
      "Stretches the back and spine",
      "Releases neck tension",
      "Improves spinal flexibility",
      "Calms the mind",
      "Massages internal organs",
    ],
    steps: [
      "Start on hands and knees",
      "Align wrists under shoulders, knees under hips",
      "Exhale and round your spine upward",
      "Tuck chin toward chest",
      "Draw belly button toward spine",
    ],
  },
  {
    id: "cobra-pose-2",
    name: "Cobra Pose 2",
    sanskritName: "Bhujangasana",
    image: cobraPose2,
    description: "Cobra Pose 2 is a gentle backbend that strengthens the spine and opens the chest. This variation uses the arms for support while keeping the lower body grounded.",
    benefits: [
      "Strengthens the spine",
      "Opens the chest and lungs",
      "Firms the buttocks",
      "Reduces stress and fatigue",
      "Improves posture",
    ],
    steps: [
      "Lie face down with legs extended",
      "Place palms under shoulders",
      "Press into hands and lift chest",
      "Keep elbows close to body",
      "Gaze forward and breathe",
    ],
  },
  {
    id: "cobra-pose-3",
    name: "Cobra Pose 3",
    sanskritName: "Bhujangasana",
    image: cobraPose3,
    description: "Cobra Pose 3 is a deeper expression of the classic Cobra, creating a more pronounced backbend. This pose builds strength in the back while stretching the entire front body.",
    benefits: [
      "Deepens spinal extension",
      "Strengthens back muscles",
      "Opens the heart center",
      "Increases lung capacity",
      "Energizes the body",
    ],
    steps: [
      "Lie prone with legs together",
      "Place palms beside chest",
      "Inhale and lift chest higher",
      "Straighten arms as much as comfortable",
      "Keep shoulders down and breathe",
    ],
  },
  {
    id: "crocodile-pose-5",
    name: "Crocodile Pose 5",
    sanskritName: "Makarasana",
    image: crocodilePose5,
    description: "This dynamic variation of Crocodile Pose incorporates a bent leg position, adding a gentle hip opener to the relaxing prone posture. Great for releasing tension while staying restful.",
    benefits: [
      "Opens the hips gently",
      "Releases lower back tension",
      "Promotes deep relaxation",
      "Encourages diaphragmatic breathing",
      "Calms the nervous system",
    ],
    steps: [
      "Lie face down on your mat",
      "Rest head on crossed forearms",
      "Bend one leg to the side",
      "Keep the other leg extended",
      "Relax completely and breathe deeply",
    ],
  },
  {
    id: "locust-pose-ardh-1",
    name: "Locust Pose (ArdhSalabhasana) 1",
    sanskritName: "Ardh Salabhasana",
    image: locustPose,
    description: "Ardh Salabhasana or Half Locust Pose is a gentle backbend where one leg is lifted at a time. This pose strengthens the lower back and prepares the body for the full Locust Pose.",
    benefits: [
      "Strengthens the lower back muscles",
      "Tones the buttocks and thighs",
      "Improves digestion",
      "Builds core stability",
      "Prepares for deeper backbends",
    ],
    steps: [
      "Lie face down with arms alongside body",
      "Rest your chin on the mat",
      "Keep one leg straight on the ground",
      "Inhale and lift the other leg without bending the knee",
      "Hold for a few breaths, then switch sides",
    ],
  },
  {
    id: "locust-pose-ardh-2",
    name: "Locust Pose (ArdhSalabhasana) 2",
    sanskritName: "Ardh Salabhasana",
    image: locustPose2,
    description: "This variation of Half Locust Pose involves lifting the alternate leg while maintaining stability in the hips. It helps build strength symmetrically in both sides of the back.",
    benefits: [
      "Balances strength in both legs",
      "Strengthens the posterior chain",
      "Improves hip stability",
      "Tones the gluteal muscles",
      "Enhances body awareness",
    ],
    steps: [
      "Lie face down on your mat",
      "Rest forehead or chin on the floor",
      "Keep arms alongside the body",
      "Lift one leg while keeping hips grounded",
      "Hold and breathe, then switch legs",
    ],
  },
  {
    id: "locust-pose-purna",
    name: "Locust Pose (Salabhasana Purna) 2",
    sanskritName: "Purna Salabhasana",
    image: locustPosePurna,
    description: "Purna Salabhasana or Full Locust Pose is the complete expression where both legs are lifted together. This powerful backbend builds tremendous strength in the entire back body.",
    benefits: [
      "Strengthens the entire back",
      "Tones legs and buttocks",
      "Stimulates abdominal organs",
      "Improves posture significantly",
      "Builds stamina and endurance",
    ],
    steps: [
      "Lie face down with arms at your sides",
      "Rest forehead on the mat",
      "Keep both legs straight and together",
      "Inhale and lift both legs simultaneously",
      "Hold for 5-10 breaths, then release",
    ],
  },
  {
    id: "mahaveer-asana-3",
    name: "Mahaveer Asana 3",
    sanskritName: "Virabhadrasana",
    image: mahaveerAsana3,
    description: "Mahaveer Asana 3 is a powerful warrior stance with arms extended parallel to the ground. This pose builds strength, balance, and concentration while embodying the spirit of a warrior.",
    benefits: [
      "Strengthens legs and core",
      "Opens the hips and chest",
      "Builds mental focus",
      "Improves balance and stability",
      "Increases stamina",
    ],
    steps: [
      "Stand with feet wide apart",
      "Turn one foot out 90 degrees",
      "Bend the front knee over the ankle",
      "Extend both arms out to sides, palms down",
      "Gaze over the front hand and hold",
    ],
  },
  {
    id: "margariasana-2",
    name: "Margariasana 2",
    sanskritName: "Marjaryasana",
    image: catPose2,
    description: "Margariasana 2 is a variation of Cat Pose that emphasizes the arching of the spine. This gentle movement warms up the spine and prepares the body for deeper movements.",
    benefits: [
      "Warms up the spine",
      "Releases back tension",
      "Improves spinal flexibility",
      "Calms the nervous system",
      "Prepares body for practice",
    ],
    steps: [
      "Start on hands and knees",
      "Align wrists under shoulders",
      "Keep knees under hips",
      "Move through cat-cow movements",
      "Coordinate breath with movement",
    ],
  },
  {
    id: "rabbit-pose-1",
    name: "Rabbit Pose 1",
    sanskritName: "Shashankasana",
    image: rabbitPose1,
    description: "Rabbit Pose or Shashankasana is a gentle forward fold that stretches the spine and calms the mind. This restorative pose helps release tension in the back and neck.",
    benefits: [
      "Stretches the spine and back muscles",
      "Calms the nervous system",
      "Relieves stress and anxiety",
      "Improves digestion",
      "Opens the hips gently",
    ],
    steps: [
      "Kneel on your mat with knees together",
      "Sit back on your heels",
      "Fold forward from the hips",
      "Rest forehead on the floor",
      "Relax arms alongside the body",
    ],
  },
  {
    id: "rabbit-pose-2",
    name: "Rabbit Pose 2",
    sanskritName: "Shashankasana",
    image: rabbitPose2,
    description: "This variation of Rabbit Pose deepens the stretch in the spine while maintaining a restful, grounding quality. It's excellent for relaxation and introspection.",
    benefits: [
      "Deepens spinal stretch",
      "Promotes relaxation",
      "Reduces mental fatigue",
      "Stretches the shoulders",
      "Encourages introspection",
    ],
    steps: [
      "From kneeling position, fold forward",
      "Extend arms forward on the mat",
      "Rest forehead on the ground",
      "Keep hips over the knees",
      "Breathe deeply and relax",
    ],
  },
  {
    id: "twisted-cobra-pose-4",
    name: "Twisted Cobra Pose 4",
    sanskritName: "Tirak Bhujangasana",
    image: twistedCobraPose4,
    description: "Twisted Cobra Pose 4 is a deeper variation that combines a gentle backbend with a spinal twist. This pose improves flexibility and massages the internal organs.",
    benefits: [
      "Increases spinal mobility",
      "Massages digestive organs",
      "Opens chest and shoulders",
      "Strengthens back muscles",
      "Reduces lower back tension",
    ],
    steps: [
      "Lie face down on your mat",
      "Place palms under shoulders",
      "Lift chest and twist to one side",
      "Keep hips grounded",
      "Hold and breathe, then switch sides",
    ],
  },
  {
    id: "warrior-pose-3",
    name: "Warrior Pose 3",
    sanskritName: "Virabhadrasana III",
    image: warriorPose3,
    description: "Warrior Pose 3 is a dynamic standing pose that builds strength, balance, and focus. With arms extended forward, it challenges stability while energizing the entire body.",
    benefits: [
      "Strengthens legs and core",
      "Improves balance and coordination",
      "Builds mental focus",
      "Opens the hips",
      "Energizes the body",
    ],
    steps: [
      "Stand in a lunge position",
      "Extend arms forward, parallel to floor",
      "Bend front knee over ankle",
      "Keep back leg strong",
      "Gaze forward and hold",
    ],
  },
  {
    id: "bow-pose",
    name: "Bow Pose",
    sanskritName: "Dhanurasana",
    image: bowPose,
    description: "Bow Pose is an energizing backbend that resembles an archer's bow. This powerful pose stretches the entire front body while strengthening the back.",
    benefits: [
      "Stretches the entire front body",
      "Strengthens back muscles",
      "Improves posture",
      "Stimulates abdominal organs",
      "Increases energy and vitality",
    ],
    steps: [
      "Lie on your stomach",
      "Bend knees and reach back to hold ankles",
      "Inhale and lift chest and thighs",
      "Pull feet toward buttocks",
      "Hold and breathe deeply",
    ],
  },
  {
    id: "cobra-pose-1",
    name: "Cobra Pose 1",
    sanskritName: "Bhujangasana",
    image: cobraPose1,
    description: "Cobra Pose 1 is the foundation of the Cobra sequence. This gentle backbend strengthens the spine and opens the chest while keeping the lower body grounded.",
    benefits: [
      "Strengthens the spine",
      "Opens chest and lungs",
      "Improves posture",
      "Reduces stress",
      "Prepares for deeper backbends",
    ],
    steps: [
      "Lie face down with legs extended",
      "Place palms beside chest",
      "Keep elbows close to body",
      "Press into hands and lift chest slightly",
      "Keep lower body grounded",
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
