import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useAuthContext } from "../context/authContext";
import { useArticleContext } from "../context/articlesContext";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const categories = ["Design", "Food", "Politics", "Sport", "Others"];

const WriteArticle = () => {
  const navigate = useNavigate();

  const { user } = useAuthContext();
  const { setOpenLoader, fetchData } = useArticleContext();

  //Reroute if user is not signed in
  useEffect(() => {
    if (user.id == null) {
      navigate("/articles");
      return;
    }
  }, [user]);

  //local states
  const [articleDetails, setArticleDetails] = useState({
    title: "",
    body: "",
    categ: "",
    img: "",
  });

  //Add new article function
  const addArticle = async (e: any) => {
    e.preventDefault();
    if (
      articleDetails.body === "" ||
      articleDetails.title === "" ||
      articleDetails.categ === ""
    ) {
      toast("Enter appropriate values");
      return;
    }
    setOpenLoader(true);

    const article = {
      title: articleDetails.title,
      body: articleDetails.body,
      category: articleDetails.categ,
      image: articleDetails.img,
      authorName: user.name,
      authorId: user.id,
    };

    axios
      .post("http://localhost:5000/articles", article)
      .then(async () => {
        await fetchData();
        setOpenLoader(false);
        navigate("/articles");
        toast("Article Added");
      })
      .catch((err) => {
        console.log(err);
        setOpenLoader(false);
      });
  };

  //State change handler functions
  const handleEditorChange = (value: string) => {
    setArticleDetails({ ...articleDetails, body: value });
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleDetails({ ...articleDetails, title: e.target.value });
  };
  const handleCategChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setArticleDetails({ ...articleDetails, categ: e.target.value });
  };
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleDetails({ ...articleDetails, img: e.target.value });
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      onSubmit={addArticle}
      className="create-page px-[20px] md:px-[40px] py-[40px]"
    >
      <div className="h-fit w-full flex flex-col lg:flex-row gap-[30px] lg:justify-between">
        <div className="w-full md:w-[60%] lg:w-[33%] flex flex-col gap-[20px]">
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              placeholder="The Art of Cooking"
              value={articleDetails.title}
              onChange={handleTitleChange}
              type="text"
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

        <div className="lg:w-[60%]">
          <label htmlFor="">Add Content:</label>
          <div className="h-[300px] md:h-[50vh] w-full">
            <ReactQuill
              style={{ height: "100%" }}
              value={articleDetails.body}
              onChange={handleEditorChange}
            />
          </div>
        </div>
      </div>

      <button
        onClick={addArticle}
        type="submit"
        className="mt-[90px] w-fit px-[30px] mx-auto bg-[green] hover:bg-white active:bg-[red] hover:border-[2px] hover:border-[green] hover:text-[green] rounded-[10px] text-white py-[10px] text-[1.5rem] flex justify-center items-center gap-[5px] "
      >
        ADD ARTICLE
      </button>
    </motion.form>
  );
};

export default WriteArticle;
