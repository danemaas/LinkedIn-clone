import { MdAccountCircle } from "react-icons/md";
import { AiOutlineLike, AiOutlineComment, AiOutlineSend } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import ClickableIcons from "./ClickableIcons";

const Post = () => {
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="w-full flex gap-2">
        <MdAccountCircle className="text-[3.5rem]" />
        <div className="w-full">
          <div className="flex flex-col leading-5">
            <h2 className="font-medium">Daniel Emaas</h2>
            <p className="text-[13px] text-black/60">description</p>
            <p className="text-[13px] text-black/60">published date</p>
          </div>
        </div>
        <button className="h-max">follow</button>
      </div>
      <div>
        <p>This is a post!!</p>
      </div>
      <div className="flex justify-around items-center border-t-[1px]">
        <ClickableIcons
          name="like"
          icon={<AiOutlineLike className="text-[1.5rem]" />}
        />
        <ClickableIcons
          name="comment"
          icon={<AiOutlineComment className="text-[1.5rem]" />}
        />
        <ClickableIcons
          name="repost"
          icon={<BiRepost className="text-[1.5rem]" />}
        />
        <ClickableIcons
          name="send"
          icon={<AiOutlineSend className="text-[1.5rem]" />}
        />
      </div>
    </section>
  );
};

export default Post;
