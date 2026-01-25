import { Metadata } from "next";
import { AboutHero } from "@/components/about";
import { AboutStory } from "@/components/about";
import { AboutMission } from "@/components/about";
import { AboutValues } from "@/components/about";
import { AboutTeam } from "@/components/about";
import { AboutTimeline } from "@/components/about";
import { AboutAwards } from "@/components/about";
import { AboutOffices } from "@/components/about";
import { AboutPartners } from "@/components/about";
import { AboutCTA } from "@/components/about";

export const metadata: Metadata = {
  title: "About Us | Our Story, Mission & Team",
  description:
    "Learn about Qwik Multi Services - our story, mission, values, and the talented team behind our success. Delivering digital excellence since 2018.",
  openGraph: {
    title: "About Us | Qwik Multi Services",
    description: "Discover the team and story behind Qwik Multi Services.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutValues />
      {/* <AboutTimeline /> */}
      {/* <AboutTeam />
      <AboutAwards />
      <AboutOffices /> */}
      {/* <AboutPartners /> */}
      <AboutCTA />
    </main>
  );
}
