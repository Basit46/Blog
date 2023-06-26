import { useArticleContext } from "../context/articlesContext";

const LoadingSpinner = () => {
  const { openLoader } = useArticleContext();

  if (!openLoader) return;
  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] bg-black/40 grid place-items-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
