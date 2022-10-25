/* eslint-disable @next/next/no-img-element */
import ProjectItems from "./ProjectItems";
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function ProjectsSection() {
  return (
    <>
      <section className="py-28" id="project">
        <div className="container mx-auto px-10 2xl:px-0">
          <SectionTitle>Projects</SectionTitle>
          <SectionParagraph>Beberapa Project Saya</SectionParagraph>
          <div className="flex -mx-4 mt-20 flex-wrap">
            <div className="md:w-6/12 w-full px-4 pb-8">
              <ProjectItems
                name="Haston"
                description="Eksplorasi Landing Page"
                image="project1.png"
                alt="Picture Project 1"
              />
            </div>
            <div className="md:w-6/12 w-full px-4 pb-8">
              <ProjectItems
                name="Resources"
                description="Eksplorasi Resource Page"
                image="project2.png"
                alt="Picture Project 2"
              />
            </div>
            <div className="md:w-6/12 w-full px-4 pb-8 md:pb-0">
              <ProjectItems
                name="Resources"
                description="Eksplorasi Resource Page"
                image="project2.png"
                alt="Picture Project 2"
              />
            </div>
            <div className="md:w-6/12 w-full px-4 pb-8 ">
              <ProjectItems
                name="Haston"
                description="Eksplorasi Landing Page"
                image="project1.png"
                alt="Picture Project 1"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
