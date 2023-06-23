import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPlus } from "react-icons/fa";

const categories = [
  "View all",
  "Design",
  "Food",
  "Politics",
  "Sport",
  "Others",
];

const WriteArticle = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    desc: "",
    body: "",
    categ: "",
  });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleEditorChange = (value: string) => {
    setBookDetails({ ...bookDetails, body: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedImage(file ? URL.createObjectURL(file) : null);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookDetails({ ...bookDetails, title: e.target.value });
  };
  const handleDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookDetails({ ...bookDetails, desc: e.target.value });
  };
  const handleCategChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBookDetails({ ...bookDetails, categ: e.target.value });
  };

  const addArticle = () => {
    console.log(bookDetails);
  };

  return (
    <div className="px-[40px] py-[40px]">
      <div className="w-full flex gap-[30px]">
        <div className="w-[33%] flex flex-col gap-[20px]">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              className="w-full border-[#c0bfbf] border-[2px] px-[20px] py-[10px]"
              placeholder="The Art of Cooking"
              value={bookDetails.title}
              onChange={handleTitleChange}
              type="text"
            />
          </div>

          <div>
            <label htmlFor="desc">Short Description:</label>
            <input
              id="desc"
              className="w-full border-[#c0bfbf] border-[2px] px-[20px] py-[10px]"
              placeholder="Cooking is art, this article with take you on how to improve your cookings"
              type="text"
              value={bookDetails.desc}
              onChange={handleDescChange}
            />
          </div>

          <select
            onChange={handleCategChange}
            className="w-full border-black border-[2px]"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <div className="mt-[10px] bg-[grey] relative h-[400px] w-[400px] grid place-items-center">
              <p className="text-[1.2rem] text-center">ADD IMAGE</p>
              {selectedImage && (
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    className="h-full w-full object-cover"
                    src={selectedImage}
                    alt="Selected"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="">Add Content:</label>
          <div className="h-[70vh] w-full">
            <ReactQuill
              style={{ height: "100%" }}
              value={bookDetails.body}
              onChange={handleEditorChange}
            />
          </div>
        </div>
      </div>

      <button
        onClick={addArticle}
        className="mt-[30px] w-full bg-green-600 text-white py-[10px] text-[1.5rem] flex justify-center items-center gap-[5px] "
      >
        ADD ARTICLE <FaPlus />
      </button>
    </div>
  );
};

export default WriteArticle;

{
  /* <div>
  <h3>Rendered Content:</h3>
  <div dangerouslySetInnerHTML={{ __html: content }} />
</div>; */
}
