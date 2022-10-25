import Navbar from "./Navbar";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <div className="bg-hero 2xl:h-[712px] xl:h-[600px] lg:h-[500px] md:h-[500px] pb-20">
        <div className="container mx-auto px-10 2xl:px-0">
          <Navbar />
          <div>
            <div className="text-center xl:mt-20 lg:mt-10 md:mt-8">
              <h1
                className="tex
              t-3xl text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 auto leading-relaxes"
              >
                Saya seorang Mahasiswa, FrontEnd Engineer, & UI Design
              </h1>
              <p className="text-white text-opacity-60 2xl:w-3/12 xl:w-4/12 lg:w-6/12 mx-auto mt-6 leading-relaxed">
                Sejak masuk di perkuliahan saya mememulai programming. Sejak 1
                tahun memulai UI design.
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
