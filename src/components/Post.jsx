import { MdAccountCircle } from "react-icons/md";
import { AiOutlineLike, AiOutlineComment, AiOutlineSend } from "react-icons/ai";
import { BiRepost } from "react-icons/bi";
import ClickableIcons from "./ClickableIcons";
import { timeFormat } from "../utils/timeFormat";

const Post = ({ name, description, message, timeStamp }) => {
  const convertTimeStamp = new Date(timeStamp * 1000);
  console.log(timeFormat(convertTimeStamp.toISOString()));
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="w-full flex gap-2">
        <MdAccountCircle className="text-[3.5rem]" />
        <div className="w-full">
          <div className="flex flex-col leading-5">
            <h2 className="font-medium">{name}</h2>
            <p className="text-[13px] text-black/60">{description}</p>
            <p className="text-[13px] text-black/60">
              {timeFormat(convertTimeStamp.toISOString())}
            </p>
          </div>
        </div>
        <button className="h-max">follow</button>
      </div>
      <div>
        <p>{message}</p>
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
