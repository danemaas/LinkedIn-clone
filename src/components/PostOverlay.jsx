import { MdAccountCircle } from "react-icons/md";
import { AiFillCaretDown, AiOutlineClose } from "react-icons/ai";
import { GoSmiley } from "react-icons/go";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { db } from "../config/firebase";
import { doc, setDoc, Timestamp, FieldValue } from "firebase/firestore";

const PostOverlay = ({ post, onClose }) => {
  if (!post) return;

  const [input, setInput] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const onEmojiClick = (eventObj) => {
    setInput((prevInput) => prevInput + eventObj.emoji);
    setShowPicker(false);
  };

  const sendPost = (e) => {
    e.preventDefault();
    setDoc(doc(db, "posts", "post"), {
      name: "Dan Emaas",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timeStamp: Timestamp.fromDate(new Date()),
    });

    onClose();
  };

  return (
    <div className="min-w-[50%] min-h-[100vh] absolute">
      <div className="w-full min-h-[100vh] bg-black/70 fixed top-0 left-0 z-10 overflow-hidden" />
      <section
        className={`bg-white max-w-max h-max text-black
        fixed z-[100] rounded-md shadow-md shadow-slate-600 translate-y-[7rem]`}
      >
        <div className="w-full flex justify-between p-3">
          <div className="flex gap-2 hover:bg-gray-400/20 p-1 rounded-md cursor-pointer">
            <MdAccountCircle className="text-[2.5rem]" />
            <div className="leading-5">
              <h2 className="font-medium">Dan Emaas</h2>
              <p className="text-[13px] text-gray-400">post to anyone</p>
            </div>
            <AiFillCaretDown />
          </div>
          <button
            onClick={onClose}
            className="capitalize h-max font-medium text-black/50
           hover:bg-slate-500/10 p-1 rounded-full"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="p-5">
          <textarea
            placeholder="what do you want to talk about?"
            cols={80}
            rows={8}
            className="resize-none outline-none w-full h-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="flex justify-start items-center p-5">
          <GoSmiley
            onClick={() => setShowPicker(!showPicker)}
            className="font-medium text-[2.5rem] p-2 hover:bg-gray-400/20
            rounded-full cursor-pointer"
          />
        </div>
        {showPicker && (
          <div className="absolute top-[-6rem] left-[-21rem]">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
        <div className="flex justify-end items-center p-5">
          <button
            onClick={sendPost}
            className={`capitalize font-medium py-1 px-3 rounded-md ${
              input === "" ? "bg-gray-400/20" : "bg-[#389FDD]"
            }`}
            disabled={input === ""}
          >
            post
          </button>
        </div>
      </section>
    </div>
  );
};

export default PostOverlay;
