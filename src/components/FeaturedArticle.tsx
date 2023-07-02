import { ArticleType } from "../context/articlesContext";

type FeaturedArticleProp = {
  selectedArticle: ArticleType | undefined;
};
const FeaturedArticle = ({ selectedArticle }: FeaturedArticleProp) => {
  return (
    <div className="w-full lg:w-[60%] h-fit md:h-[300px] flex flex-col md:flex-row">
      <div className="h-full w-full md:w-[50%]">
        <img
          className="h-full w-full object-cover"
          src={selectedArticle?.img}
          alt="article image"
        />
      </div>
      <div className="w-full md:w-[50%] px-[10px] py-[5px]">
        <h1 className="font-bold text-[1.3rem] leading-[1.3]">
          {selectedArticle?.title}
        </h1>
        <p className="mt-[10px] mb-[20px]">{selectedArticle?.desc}</p>
        <p className="mt-[20px] md:mt-[40px] font-semibold">
          {selectedArticle?.author}
        </p>
        <p className="opacity-90">{selectedArticle?.time}</p>
      </div>
    </div>
  );
};

export default FeaturedArticle;
