/* eslint-disable @next/next/no-img-element */
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";
import SkillCard from "./SkillCard";

export default function SkillsSection() {
  return (
    <>
      <section className="py-28 bg-primarygra" id="skills">
        <div className="container mx-auto px-10 2xl:px-0">
          <SectionTitle>Skills</SectionTitle>
          <SectionParagraph>Beberapa kemampuan saya</SectionParagraph>
          <div className="flex -mx-4 mt-20 flex-wrap">
            <div className="md:w-4/12 w-full px-4 pb-8">
              <SkillCard
                name="Javascript"
                level="Basic"
                image="/javascript.svg"
                alt="javascript Logo"
                imageClassName="rounded-full h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <SkillCard
                name="Node JS"
                level="Basic"
                image="/node.svg"
                alt="NodeJS Logo"
                imageClassName="h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <SkillCard
                name="Javascript"
                level="Basic"
                image="/javascript.svg"
                alt="javascript Logo"
                imageClassName="rounded-full h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <SkillCard
                name="React JS"
                level="Basic"
                image="/react.svg"
                alt="React Logo"
                imageClassName="h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <SkillCard
                name="React JS"
                level="Basic"
                image="/react.svg"
                alt="React Logo"
                imageClassName="h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8">
              <SkillCard
                name="Node JS"
                level="Basic"
                image="/node.svg"
                alt="NodeJS Logo"
                imageClassName="h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
              <SkillCard
                name="React JS"
                level="Basic"
                image="/react.svg"
                alt="React Logo"
                imageClassName="h-16"
              />
            </div>
            <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
              <SkillCard
                name="Javascript"
                level="Basic"
                image="/javascript.svg"
                alt="javascript Logo"
                imageClassName="rounded-full h-16"
              />
            </div>

            <div className="md:w-4/12 w-full px-4 pb-8 md:pb-0">
              <SkillCard
                name="Node JS"
                level="Basic"
                image="/node.svg"
                alt="NodeJS Logo"
                imageClassName="h-16"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
