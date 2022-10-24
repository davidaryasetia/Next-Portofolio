/* eslint-disable @next/next/no-img-element */
import Hero from "../components/Hero";
import Profile from "../components/ProfileSection";
import SectionProjects from "../components/SectionProjects";
import SectionSkills from "../components/SectionSkills";

export default function Home() {
  return (
    <>
      <Hero />
      <Profile />
      <SectionSkills />
      <SectionProjects />
    </>
  );
}
