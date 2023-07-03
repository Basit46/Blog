import "../css/PagePreloader.css";

const PagePreloader = () => {
  return (
    <div className="w-full h-[88vh] grid place-items-center ">
      <div className="lds-roller-page">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default PagePreloader;
