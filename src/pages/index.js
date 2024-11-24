import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
    
      <Seo title="Zaidi Baha -Portfolio" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me:" />
        <InterestsSection sectionId="Skills" heading="Skills:" />
        <ProjectsSection sectionId="features" heading="My Projects:" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
