import articeImg from "../assets/pexels-ulrick-trappschuh-16249246.jpg";

const FeaturedArticle = () => {
  return (
    <div className="w-[60%] h-[300px] flex">
      <div className="h-full w-[50%]">
        <img
          className="h-full w-full object-cover"
          src={articeImg}
          alt="article image"
        />
      </div>
      <div className="w-[50%] px-[10px] py-[5px]">
        <h1 className="font-bold text-[1.3rem] leading-[1.3]">
          The past, the future and now: diving throught the trends of street
          lights.
        </h1>
        <p className="mt-[10px] mb-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          consequuntur sit dolore eum soluta culpa fugiat corrupti doloribus
          ratione. Fugiat.
        </p>
        <p className="font-semibold">John Doe</p>
        <p className="opacity-90">20 Jan, 2023</p>
      </div>
    </div>
  );
};

export default FeaturedArticle;
