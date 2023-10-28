import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { FaUserGroup } from "react-icons/fa6";
import { MdWork, MdNotifications, MdAccountCircle } from "react-icons/md";

export const navMenus = [
  {
    icon: <AiFillHome />,
    item: "home",
  },
  {
    icon: <FaUserGroup />,
    item: "network",
  },
  {
    icon: <MdWork />,
    item: "jobs",
  },
  {
    icon: <AiOutlineMessage />,
    item: "messaging",
  },
  {
    icon: <MdNotifications />,
    item: "notifications",
  },
  {
    icon: <MdAccountCircle />,
    item: "me",
  },
];
