import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Camera, Video, Users } from "lucide-react";

import heroMeditation from "@/assets/hero-meditation.jpg";
import groupYoga from "@/assets/group-yoga.jpg";
import yogaStudio from "@/assets/yoga-studio.jpg";
import soundHealing from "@/assets/sound-healing.jpg";
import meditationBell from "@/assets/meditation-bell.jpg";
import audioMeditation from "@/assets/audio-meditation.jpg";
import lotusFlower from "@/assets/lotus-flower.jpg";
import natureZen from "@/assets/nature-zen.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: heroMeditation, alt: "Meditation Practice", category: "Meditation" },
    { src: groupYoga, alt: "Group Yoga Session", category: "Classes" },
    { src: yogaStudio, alt: "Our Yoga Studio", category: "Studio" },
    { src: soundHealing, alt: "Sound Healing Session", category: "Sound Healing" },
    { src: meditationBell, alt: "Meditation Bell", category: "Props" },
    { src: audioMeditation, alt: "Audio Meditation Setup", category: "Media" },
    { src: lotusFlower, alt: "Lotus Flower", category: "Nature" },
    { src: natureZen, alt: "Zen Garden", category: "Nature" },
  ];

  const categories = ["All", "Meditation", "Classes", "Studio", "Sound Healing", "Nature"];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/20 to-accent/20">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in">
            A visual journey through our practice and community
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Photos</p>
            </div>
            <div className="animate-fade-in">
              <Video className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">20+</p>
              <p className="text-sm text-muted-foreground">Videos</p>
            </div>
            <div className="animate-fade-in">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground">100+</p>
              <p className="text-sm text-muted-foreground">Community Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="animate-fade-in overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div>
                      <p className="text-white font-medium">{image.alt}</p>
                      <span className="text-white/80 text-sm">{image.category}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join our community and create beautiful memories together
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Join Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
