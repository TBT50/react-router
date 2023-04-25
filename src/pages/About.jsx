import aboutHeroImg from "../assets/images/about-hero.jpg";

export const AboutPage = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <img
        src={aboutHeroImg}
        alt=""
        className="w-full h-96 object-cover object-center
"
      />
      <div className="px-2">
        <h1 className="text-2xl font-bold my-4">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
      </div>
    </div>
  );
};
