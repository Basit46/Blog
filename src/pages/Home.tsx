import { useState, useEffect } from "react";
import FeaturedArticle from "../components/FeaturedArticle";
import Hero from "../components/Hero";
import { ArticleType, useArticleContext } from "../context/articlesContext";
import ArticlesSlide from "../components/ArticlesSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PagePreloader from "../components/PagePreloader";
import { useAuthContext } from "../context/authContext";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

const Home = () => {
  const { user } = useAuthContext();
  const { articles } = useArticleContext();
  const [selectedArticle, setSelectedArticle] = useState<ArticleType>();
  const [openPreloader, setOpenPreloader] = useState(true);

  useEffect(() => {
    const load = () => {
      setOpenPreloader(false);
    };

    window.addEventListener("load", load);

    return () => {
      window.removeEventListener("load", load);
    };
  }, [user]);

  useEffect(() => {
    setSelectedArticle(articles[Math.round(Math.random() * articles.length)]);
  }, [articles]);

  if (openPreloader) {
    return <PagePreloader />;
  }

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

      <div className="py-[30px] w-full  flex flex-col lg:flex-row gap-[40px] lg:gap-[20px] ">
        <FeaturedArticle selectedArticle={selectedArticle} />

        <div className="bg-[green] flex-1 w-full md:w-[500px] h-[300px] overflow-hidden ">
          <Slider {...settings} className="w-full md:w-[500px] h-[300px]">
            {articles.map((article, index) => (
              <ArticlesSlide key={index} article={article} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
