import Article from "../components/Article";
import FeaturedArticle from "../components/FeaturedArticle";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="px-[40px]">
      <Hero />

      <div className="py-[30px] border-y-[3px] border-gray-600">
        <h1 className="font-bioRhyme text-[1.5rem]">Verso</h1>
        <p className="mt-[10px] mb-[20px] font-bioRhyme font-semibold text-[3.5rem] leading-none">
          Insights & Advice from experts
        </p>
        <p>
          The latest industry trends,news, interviews, technolgies and so much
          more
        </p>
      </div>

      <div className="py-[30px] w-full border-b-[3px] border-gray-600">
        <FeaturedArticle />
      </div>
      <div className="w-full py-[30px] flex flex-wrap gap-[20px] justify-center ">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </div>
  );
};

export default Home;
