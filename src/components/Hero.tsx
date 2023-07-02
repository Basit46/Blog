import bgImage from "../assets/pexels-kaushal-moradiya-2781195.jpg";
import { TiArrowDownOutline } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="mt-[30px] relative h-[87vh] w-full pb-[30px]">
      <div className="w-full h-full rounded-[20px] overflow-hidden">
        <img className="w-full h-full object-cover" src={bgImage} alt="bg" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full p-[40px] flex flex-col justify-end text-white">
        <p className="font-semibold text-[1.3rem]">Featured</p>
        <div className="w-full flex justify-between items-center mt-[20px] mb-[10px]">
          <h1 className="text-[2rem] font-bold leading-none">
            Breaking Into Product Design:
            <br />A Beginner's guide
          </h1>
          <TiArrowDownOutline className="rotate-[-90deg] text-[50px]" />
        </div>
        <p className="w-[60%]">
          This article explores the process of breaking into the dynamic field
          of product design. It emphasizes the importance of cultivating a
          strong design foundation, developing a diverse skill set.
        </p>
      </div>
    </div>
  );
};

export default Hero;
