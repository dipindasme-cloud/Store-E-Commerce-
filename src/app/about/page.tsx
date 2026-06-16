import AboutHero from "@/components/aboutsection/AboutHero";
import AboutStory from "@/components/aboutsection/AboutStory";
import AboutValues from "@/components/aboutsection/AboutValues";
import AboutStats from "@/components/aboutsection/AboutStats";
import AboutTeam from "@/components/aboutsection/AboutTeam";
import Testimonials from "@/components/aboutsection/Testimonials";
import AboutCTA from "@/components/aboutsection/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutStats />
      <AboutTeam />
      <Testimonials />
      <AboutCTA />
    </>
  );
}
