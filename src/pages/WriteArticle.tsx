import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { FaPlus } from "react-icons/fa";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "../context/authContext";
import { v4 as uuidv4 } from "uuid";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useArticleContext } from "../context/articlesContext";

const categories = ["Design", "Food", "Politics", "Sport", "Others"];

const WriteArticle = () => {
  const navigate = useNavigate();

  //Global states
  const { user } = useAuthContext();
  const { setOpenLoader } = useArticleContext();

  //local states
  const [bookDetails, setBookDetails] = useState({
    title: "",
    desc: "",
    body: "",
    categ: "Design",
    img: "",
  });
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [imgToView, setImgToView] = useState<any>(null);

  //State change handler functions
  const handleEditorChange = (value: string) => {
    setBookDetails({ ...bookDetails, body: value });
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedImage(file ? file : null);
    setImgToView(file ? URL.createObjectURL(file) : null);
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

  //Add new article function
  const addArticle = async () => {
    if (
      bookDetails.body === "" ||
      bookDetails.title === "" ||
      bookDetails.desc === "" ||
      bookDetails.categ === "" ||
      selectedImage === ""
    ) {
      alert("Enter appropriate values");
      return;
    }

    setOpenLoader(true);
    const storageRef = ref(storage, `/files/${bookDetails.title}img`);
    const uploadTask = uploadBytesResumable(storageRef, selectedImage);
    uploadTask.on(
      "state_changed",
      () => {},
      (err) => {
        console.log(err);
        setOpenLoader(false);
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          const colRef = collection(db, "articles");

          const currTime = new Date();
          const timeStamp = currTime.toLocaleString();

          addDoc(colRef, {
            id: uuidv4(),
            author: user.name,
            authorId: user.id,
            body: bookDetails.body,
            category: bookDetails.categ,
            img: url,
            time: timeStamp,
            title: bookDetails.title,
            desc: bookDetails.desc,
          });

          setOpenLoader(false);
          navigate("/articles");
        });
      }
    );
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
                    src={imgToView}
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
