import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Music, Video } from "lucide-react";
import mediaStudio from "@/assets/media-studio.jpg";
import soundHealing from "@/assets/sound-healing.jpg";
import audioMeditation from "@/assets/audio-meditation.jpg";

const Media = () => {
  const videos = [
    { title: "What is yoga?", id: "iHn5ofB0H1g" },
    { title: "Why did yoga evolve and how long has it existed?", id: "fCWDGbT2lsA" },
    { title: "Is yoga scientific?", id: "04Shp7-BeLU" },
    { title: "Can we compare the yoga science with medicine?", id: "YBipMh5VtXo" },
    { title: "How did yoga survive for so long?", id: "lTk-nUQJTZ0" },
    { title: "In the present time how relevant is it to prescribe yoga", id: "deDBwzMOKJ8" },
    { title: "What are the disorders that yoga has been efficacious?", id: "swtLu10giG4" },
    { title: "Are medical practitioners prescribing yoga?", id: "PV67YDF55Ac" },
    { title: "What are the side effects and long-term consequences of yoga?", id: "sw2sePsNlRY" },
    { title: "Is it a way of life?", id: "uRipdmEWk2I" },
    { title: "Celebrities taking to yoga?", id: "uRipdmEWk2I" },
    { title: "When did you get interested in yoga?", id: "YG_6TqbO_xo" },
    { title: "How and when should one start practicing yoga?", id: "etKSKhMTXRU" },
    { title: "Yoga diet", id: "vQW6tBbQD2k" },
    { title: "How are your patients benefiting?", id: "ntVVRGp6q6g" },
    { title: "What is your message?", id: "pUIv6x66lxQ" },
    { title: "What is pranayama?", id: "HFJviQejbVM" },
    { title: "What is chanting yoga and how does it work?", id: "v_7geYkja0E" },
    { title: "How does spirituality help in medicine?", id: "96kOsckMw44" },
    { title: "Kundalini yoga", id: "i0LBgVQM0kk" },
  ];

  const audioTracks = [
    { title: "Anxiety & Depression Relief", file: "/audio/anxiety-depression.mp3", description: "Calming chants for mental peace" },
    { title: "Backache Relief", file: "/audio/backache.mp3", description: "Healing sounds for back pain" },
    { title: "Cancer Support", file: "/audio/cancer.mp3", description: "Supportive meditation for healing" },
    { title: "Chanting Practice", file: "/audio/chanting.mp3", description: "Traditional yoga chanting" },
    { title: "Headache Relief", file: "/audio/headache.mp3", description: "Soothing sounds for headaches" },
    { title: "Hypertension Management", file: "/audio/hypertension.mp3", description: "Calming meditation for blood pressure" },
    { title: "General Meditation", file: "/audio/meditation.mp3", description: "Deep meditation practice" },
    { title: "Obesity Management", file: "/audio/obesity.mp3", description: "Motivational healing sounds" },
    { title: "Sleep Enhancement", file: "/audio/sleep.mp3", description: "Peaceful sounds for better sleep" },
    { title: "Stress Relief", file: "/audio/stress.mp3", description: "Stress-busting meditation" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={mediaStudio} 
            alt="Media Studio" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground animate-fade-in">
            Media Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Explore our collection of educational videos and healing audio sessions
          </p>
        </div>
      </section>

      {/* Gallery Images */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="relative overflow-hidden rounded-lg group">
            <img src={mediaStudio} alt="Yoga Studio" className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <h3 className="text-xl font-semibold text-foreground">Our Practice Space</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img src={soundHealing} alt="Sound Healing" className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <h3 className="text-xl font-semibold text-foreground">Sound Healing</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group">
            <img src={audioMeditation} alt="Audio Meditation" className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <h3 className="text-xl font-semibold text-foreground">Meditation Practice</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="videos" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="w-4 h-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Music className="w-4 h-4" />
              Audio Sessions
            </TabsTrigger>
          </TabsList>

          {/* Videos Tab */}
          <TabsContent value="videos" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Educational Videos</h2>
              <p className="text-muted-foreground">Learn about yoga, its benefits, and practices through expert guidance</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden hover-scale group">
                  <div className="relative aspect-video bg-muted">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-start gap-2">
                      <Play className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span>{video.title}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Audio Tab */}
          <TabsContent value="audio" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Healing Audio Sessions</h2>
              <p className="text-muted-foreground">Listen to our curated chanting and meditation tracks for specific conditions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {audioTracks.map((track, index) => (
                <Card key={index} className="hover-scale">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Music className="w-5 h-5 text-primary" />
                      {track.title}
                    </CardTitle>
                    <CardDescription>{track.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <audio controls className="w-full">
                      <source src={track.file} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Media;
