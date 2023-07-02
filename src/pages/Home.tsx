import { useState, useEffect } from "react";
import FeaturedArticle from "../components/FeaturedArticle";
import Hero from "../components/Hero";
import { ArticleType, useArticleContext } from "../context/articlesContext";
import ArticlesSlide from "../components/ArticlesSlide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const { articles } = useArticleContext();
  const [selectedArticle, setSelectedArticle] = useState<ArticleType>();

  useEffect(() => {
    setSelectedArticle(articles[Math.round(Math.random() * articles.length)]);
  }, [articles]);

  return (
    <div className="px-[40px]">
      <div className="py-[30px] border-b-[2px] border-gray-600">
        <p className="mt-[10px] mb-[20px] font-bioRhyme font-semibold text-[3.5rem] leading-none">
          Insights & Advice from experts
        </p>
        <p>
          The latest industry trends,news, interviews, technolgies and so much
          more
        </p>
      </div>

      <Hero />

      <div className="py-[30px] w-full  flex gap-[10px] ">
        <FeaturedArticle selectedArticle={selectedArticle} />

        <div className="bg-[green] flex-1 w-[500px] h-[300px] overflow-hidden ">
          <Slider {...settings} className="w-[500px] h-[300px]">
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
