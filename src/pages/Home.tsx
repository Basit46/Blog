import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="px-[20px] sm:px-[40px]">
      <div className="py-[30px] border-b-[2px] border-gray-600">
        <p className="mt-[10px] mb-[20px] font-bioRhyme font-semibold text-[3rem] md:text-[3.5rem] leading-none">
          Insights & Advice from experts
        </p>
        <p>
          The latest industry trends,news, interviews, technolgies and so much
          more
        </p>
      </div>

      <Hero />
    </div>
  );
};

export default Home;
