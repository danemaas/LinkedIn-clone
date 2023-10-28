import { MdAccountCircle, MdArticle } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { AiTwotoneCalendar } from "react-icons/ai";
import Post from "./Post";
import PostOverlay from "./PostOverlay";
import ClickableIcons from "./ClickableIcons";
import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Feeds = () => {
  const [post, setPost] = useState(false);
  const [posts, setPosts] = useState([]);

  const dbRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = () => {
      onSnapshot(dbRef, (response) => {
        setPosts(
          response.docs.map((item) => {
            return { ...item.data(), id: item.id };
          })
        );
      });
    };

    getPosts();
  }, []);

  const onClose = () => {
    setPost(!post);
  };

  return (
    <section className="flex-[.5] mx-[1.5rem] w-full h-full">
      <PostOverlay post={post} onClose={onClose} />
      <div
        className="translate-y-[5rem] w-full flex flex-col border-[1px] border-stone-400/20
        rounded-[10px] bg-white mb-[1rem] p-[1rem] gap-[1rem]"
      >
        <div className="flex-[.5] flex items-center gap-3">
          <div>
            <MdAccountCircle size={50} />
          </div>
          <input
            onClick={() => setPost(!post)}
            type="text"
            placeholder="Start a post"
            className="w-[87%] rounded-full border-[1px] border-stone-400 cursor-pointer py-[.7rem]
            bg-gray-400/40 ps-[1rem] font-medium placeholder:text-black/60 placeholder:text-[.9rem]"
          />
        </div>
        <div className="flex-[.5] flex items-center justify-around">
          <ClickableIcons
            name="media"
            icon={<GoFileMedia className="text-blue-500 text-[1.3rem]" />}
          />
          <ClickableIcons
            name="event"
            icon={<AiTwotoneCalendar className="text-rose-500 text-[1.3rem]" />}
          />
          <ClickableIcons
            name="write article"
            icon={<MdArticle className="text-orange-500 text-[1.3rem]" />}
          />
        </div>
      </div>
      <div className="w-full translate-y-[5rem] relative">
        <hr className="w-full border-stone-500/50" />
        <p
          className="absolute right-0 -top-[10px] bg-stone-100 px-2 text-xs text-gray-500
          cursor-pointer"
        >
          Sort by: <span className="font-medium text-black">Top</span>
        </p>
      </div>
      {posts.map((item, index) => (
        <div
          key={index}
          className="translate-y-[6rem] w-full flex flex-col border-[1px] border-stone-400/20
        rounded-[10px] bg-white mb-[1rem] p-[1rem] gap-[1rem]"
        >
          <Post
            name={item.name}
            description={item.description}
            message={item.message}
            timeStamp={item.timeStamp.seconds}
          />
        </div>
      ))}
    </section>
  );
};

export default Feeds;
