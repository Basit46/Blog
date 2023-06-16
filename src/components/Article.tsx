import articeImg from "../assets/pexels-ulrick-trappschuh-16249246.jpg";

const Article = () => {
  return (
    <div className="w-[300px] h-fit">
      <div className="h-[50%] w-full">
        <img
          className="h-full w-full object-cover"
          src={articeImg}
          alt="article image"
        />
      </div>
      <div className="w-full py-[5px]">
        <h1 className="font-semibold text-[1.1rem] leading-[1.2]">
          The past, the future and now: diving throught the trends of street
          lights.
        </h1>
        <p className="mt-[5px] text-[0.8rem] mb-[10px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
          consequuntur sit.
        </p>
        <p className="font-semibold leading-none">John Doe</p>
        <p className="opacity-90 text-[0.8rem]">20 Jan, 2023</p>
      </div>
    </div>
  );
};

export default Article;
