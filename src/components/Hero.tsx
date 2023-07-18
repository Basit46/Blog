import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TiArrowDownOutline } from "react-icons/ti";
import { ArticleType, useArticleContext } from "../context/articlesContext";

const Hero = () => {
  const { articles } = useArticleContext();

  const [featuredArticle, setFeaturedArticle] = useState<
    ArticleType | undefined
  >();

  useEffect(() => {
    setFeaturedArticle(
      articles.find(
        (article) => article.id === "2ed21a89-e7fd-4231-9e93-284458c19e35"
      )
    );
  }, []);
  return (
    <div className="mt-[30px] relative h-[70vh] md:h-[87vh] w-full pb-[30px]">
      <div className="w-full h-full rounded-[20px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={featuredArticle?.img}
          alt="bg"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full pb-[50px] p-[20px] md:p-[40px] md:pb-[60px] flex flex-col justify-end text-white">
        <p className="font-semibold text-[1.3rem]">Featured</p>
        <div className="w-full flex justify-between items-center mt-[20px] mb-[10px]">
          <h1 className="text-[1.7rem] md:text-[2rem] font-bold leading-none">
            {featuredArticle?.title}
          </h1>
          <Link to="/articles/2ed21a89-e7fd-4231-9e93-284458c19e35">
            <TiArrowDownOutline className="rotate-[-90deg] text-[50px]" />
          </Link>
        </div>
        <p className="w-full md:w-[60%]">
          "Beasts of No Nation" is a heart-rending article that immerses us in
          the brutal reality of child soldiers, thrust into the depths of war's
          darkest abyss. Forever reminding us of the indomitable spirit of those
          trapped in war's merciless grip.
        </p>
      </div>
    </div>
  );
};

export default Hero;
