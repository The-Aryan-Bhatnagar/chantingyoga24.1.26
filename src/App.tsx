import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import YogaWellness from "./pages/YogaWellness";
import Services from "./pages/Services";
import Media from "./pages/Media";
import Research from "./pages/Research";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Yoga & Wellness Pages
import Meditation from "./pages/Meditation";
import Pranayam from "./pages/Pranayam";
import YogaDiet from "./pages/YogaDiet";
import YogaTypes from "./pages/YogaTypes";
import YogaPoses from "./pages/YogaPoses";
import AgeingYoga from "./pages/AgeingYoga";
import IllnessYoga from "./pages/IllnessYoga";

// Learning Resources Pages
import Books from "./pages/Books";
import Library from "./pages/Library";
import Audios from "./pages/Audios";
import Videos from "./pages/Videos";
import Courses from "./pages/Courses";

// Information Pages
import Ethics from "./pages/Ethics";
import FactsMyths from "./pages/FactsMyths";
import StressBuster from "./pages/StressBuster";
import BhaktiYoga from "./pages/BhaktiYoga";
import AncientRoots from "./pages/AncientRoots";

// More Pages
import Testimonials from "./pages/Testimonials";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import Disclaimer from "./pages/Disclaimer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="yoga-wellness" element={<YogaWellness />} />
            <Route path="services" element={<Services />} />
            <Route path="media" element={<Media />} />
            <Route path="research" element={<Research />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Yoga & Wellness */}
            <Route path="meditation" element={<Meditation />} />
            <Route path="pranayam" element={<Pranayam />} />
            <Route path="yoga-diet" element={<YogaDiet />} />
            <Route path="yoga-types" element={<YogaTypes />} />
            <Route path="yoga-poses" element={<YogaPoses />} />
            <Route path="ageing-yoga" element={<AgeingYoga />} />
            <Route path="illness-yoga" element={<IllnessYoga />} />
            
            {/* Learning Resources */}
            <Route path="books" element={<Books />} />
            <Route path="library" element={<Library />} />
            <Route path="audios" element={<Audios />} />
            <Route path="videos" element={<Videos />} />
            <Route path="courses" element={<Courses />} />
            
            {/* Information */}
            <Route path="ethics" element={<Ethics />} />
            <Route path="facts-myths" element={<FactsMyths />} />
            <Route path="stress-buster" element={<StressBuster />} />
            <Route path="bhakti-yoga" element={<BhaktiYoga />} />
            <Route path="ancient-roots" element={<AncientRoots />} />
            
            {/* More */}
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="disclaimer" element={<Disclaimer />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
