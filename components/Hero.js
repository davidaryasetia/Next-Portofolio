import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="bg-hero 2xl:h-[712px] xl:h-[600px]">
        <div className="container mx-auto px-10">
          <Navbar />
          <div>
            <div className="text-center mt-20">
              <h1 className="text-3xl text-white font-semibold font-mono 2xl:w-6/12 w-8/12 mx-auto leading-relaxes">
                Saya seorang front-end engineer, back-end engineer, dan juga UI
                designer
              </h1>
              <p className="text-white text-opacity-60 w-4/12 2xl:w-3/12 mx-auto mt-6 leading-relaxed">
                Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai
                UI design.
              </p>
              <Button
                href="#profile"
                pill
                variant="yellow"
                className="mt-14 ml-auto"
              >
                Pelajari
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
