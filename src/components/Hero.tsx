import { Link } from "react-router-dom";
import { TiArrowDownOutline } from "react-icons/ti";

const Hero = () => {
  return (
    <div className="mt-[30px] relative h-[70vh] md:h-[87vh] w-full pb-[30px]">
      <div className="w-full h-full bg-black rounded-[20px] overflow-hidden">
        <img
          className="w-full h-full object-cover object-top"
          src="https://a.espncdn.com/photo/2024/0428/r1325694_1296x729_16-9.jpg"
          alt="bg"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full pb-[50px] p-[20px] md:p-[40px] md:pb-[60px] flex flex-col justify-end text-white">
        <p className="font-semibold text-[1.3rem]">Featured</p>
        <div className="w-full flex justify-between items-center mt-[20px] mb-[10px]">
          <h1 className="text-[1.7rem] md:text-[2rem] font-bold leading-none">
            Bukayo "Starboy" Saka
          </h1>
          <Link to="/articles/6631580819c474bf107da141">
            <TiArrowDownOutline className="rotate-[-90deg] text-[50px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
