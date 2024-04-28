import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "../context/authContext";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useArticleContext } from "../context/articlesContext";
import { motion } from "framer-motion";

const categories = ["Design", "Food", "Politics", "Sport", "Others"];

const WriteArticle = () => {
  const navigate = useNavigate();

  //Global states
  const { user } = useAuthContext();
  const { setOpenLoader } = useArticleContext();

  useEffect(() => {
    if (user.id == null) {
      navigate("/articles");
      return;
    }
  }, [user]);

  //local states
  const [bookDetails, setBookDetails] = useState({
    title: "",
    desc: "",
    body: "",
    categ: "Design",
    img: "",
  });

  //State change handler functions
  const handleEditorChange = (value: string) => {
    setBookDetails({ ...bookDetails, body: value });
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
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBookDetails({ ...bookDetails, img: e.target.value });
  };

  //Add new article function
  const addArticle = async () => {
    if (
      bookDetails.body === "" ||
      bookDetails.title === "" ||
      bookDetails.desc === "" ||
      bookDetails.categ === ""
    ) {
      alert("Enter appropriate values");
      return;
    }

    alert("Submitted");
    setOpenLoader(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="create-page px-[20px] md:px-[40px] py-[40px]"
    >
      <div className="h-fit w-full flex flex-col lg:flex-row gap-[30px]">
        <div className="w-full md:w-[60%] lg:w-[33%] flex flex-col gap-[20px]">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
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
              placeholder="Cooking is art, this article with take you on how to improve your cookings"
              type="text"
              value={bookDetails.desc}
              onChange={handleDescChange}
            />
          </div>

          <div>
            <label htmlFor="categ">Select Category:</label>
            <select
              onChange={handleCategChange}
              id="categ"
              className="w-full border-black border-[2px]"
            >
              <option value="">Choose a Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div>
              <label htmlFor="img">Add Image Url:</label>
              <input
                placeholder="https://a.espncdn.com/photo/2024/0428/r1325694_1296x729_16-9.jpg"
                onChange={handleImgChange}
                type="url"
                id="img"
              />
            </div>
          </div>
        </div>

        <div className="lg:flex-1">
          <label htmlFor="">Add Content:</label>
          <div className="h-[300px] md:h-[70vh] w-full">
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
        className="mt-[90px] w-fit px-[30px] mx-auto bg-[green] hover:bg-white active:bg-[red] hover:border-[2px] hover:border-[green] hover:text-[green] rounded-[10px] text-white py-[10px] text-[1.5rem] flex justify-center items-center gap-[5px] "
      >
        ADD ARTICLE
      </button>
    </motion.div>
  );
};

export default WriteArticle;
