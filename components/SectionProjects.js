/* eslint-disable @next/next/no-img-element */
import SectionParagraph from "./SectionParagraph";
import SectionTitle from "./SectionTitle";

export default function SectionProjects() {
  return (
    <>
      <section className="py-28">
        <div className="container mx-auto">
          <SectionTitle>Projects</SectionTitle>
          <SectionParagraph>Beberapa Project Saya</SectionParagraph>
          <div className="flex -mx-4 mt-20">
            <div className="w-6/12 px-4"></div>
          </div>
        </div>
      </section>
    </>
  );
}
