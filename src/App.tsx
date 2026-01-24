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
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";

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
            
            {/* Footer Pages - Coming Soon */}
            <Route path="meditation" element={<ComingSoon title="Meditation" />} />
            <Route path="pranayam" element={<ComingSoon title="Pranayam" />} />
            <Route path="yoga-diet" element={<ComingSoon title="Yoga Diet" />} />
            <Route path="yoga-types" element={<ComingSoon title="Yoga Types" />} />
            <Route path="ageing-yoga" element={<ComingSoon title="Ageing Yoga" />} />
            <Route path="illness-yoga" element={<ComingSoon title="Illness & Yoga" />} />
            <Route path="books" element={<ComingSoon title="Books" />} />
            <Route path="library" element={<ComingSoon title="Library" />} />
            <Route path="audios" element={<ComingSoon title="Audio Sessions" />} />
            <Route path="videos" element={<ComingSoon title="Video Library" />} />
            <Route path="courses" element={<ComingSoon title="Teaching Courses" />} />
            <Route path="ethics" element={<ComingSoon title="Ethics" />} />
            <Route path="facts-myths" element={<ComingSoon title="Facts & Myths" />} />
            <Route path="stress-buster" element={<ComingSoon title="Stress Buster" />} />
            <Route path="bhakti-yoga" element={<ComingSoon title="Bhakti Yoga" />} />
            <Route path="ancient-roots" element={<ComingSoon title="Ancient Roots" />} />
            <Route path="testimonials" element={<ComingSoon title="Testimonials" />} />
            <Route path="gallery" element={<ComingSoon title="Gallery" />} />
            <Route path="faq" element={<ComingSoon title="FAQ" />} />
            <Route path="disclaimer" element={<ComingSoon title="Disclaimer" />} />
            <Route path="privacy" element={<ComingSoon title="Privacy Policy" />} />
            <Route path="terms" element={<ComingSoon title="Terms & Conditions" />} />
          </Route>
          
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
