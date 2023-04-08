import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO, CgProfile } from "react-icons/cg";
import { IconType } from "react-icons";
import {
  AiOutlineQuestionCircle,
  AiFillFilePdf,
  AiFillFolder,
  AiFillProfile,
  AiOutlineClose,
  AiOutlineUserAdd,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { FcDocument, FcGoogle, FcContacts } from "react-icons/fc";
import {
  SiGooglemaps,
  SiGooglesheets,
  SiGooglenews,
  SiGmail,
  SiGooglemeet,
  SiGooglechat,
  SiGooglecalendar,
  SiGoogletranslate,
  SiGooglephotos,
  SiGoogleads,
} from "react-icons/si";
import { IoMdOptions } from "react-icons/io";
import { BsFileEarmarkSlides, BsSearch } from "react-icons/bs";
import {
  BiHistory,
  BiDownload,
  BiEditAlt,
  BiDotsVerticalRounded,
} from "react-icons/bi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { FaYoutube, FaGooglePlay, FaGoogleDrive } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { MdLogout } from "react-icons/md";

interface IconProps {
  onClick: () => void;
  iconType:
    | string
    | "options"
    | "settings"
    | "menu"
    | "help"
    | "profile"
    | "search"
    | "history"
    | "pdf"
    | "folder"
    | "document"
    | "sheet"
    | "presentation"
    | "form"
    | "video"
    | "close"
    | "google"
    | "navigation"
    | "youtube"
    | "googlePlay"
    | "news"
    | "gmail"
    | "meet"
    | "chat"
    | "contacts"
    | "drive"
    | "calendar"
    | "translate"
    | "photos"
    | "adCenter"
    | "shopping"
    | "addUser"
    | "logout"
    | "download"
    | "edit"
    | "starEmpty"
    | "starFilled"
    | "dotsVirtical";
  iconSize: number;
  className: string;
  color?: string;
}
const GetIcon = (
  { iconType, iconSize, onClick, className, color }: IconProps,
  IconType: typeof IoMdOptions
) => {
  const iconMapping: { [key: string]: IconType } = {
    options: IoMdOptions,
    settings: IoSettingsOutline,
    menu: CgMenuGridO,
    help: AiOutlineQuestionCircle,
    profile: CgProfile,
    search: BsSearch,
    history: BiHistory,
    pdf: AiFillFilePdf,
    folder: AiFillFolder,
    document: FcDocument,
    sheet: SiGooglesheets,
    presentation: HiOutlinePresentationChartBar,
    form: AiFillProfile,
    video: BsFileEarmarkSlides,
    close: AiOutlineClose,
    google: FcGoogle,
    navigation: SiGooglemaps,
    youtube: FaYoutube,
    googlePlay: FaGooglePlay,
    news: SiGooglenews,
    gmail: SiGmail,
    meet: SiGooglemeet,
    chat: SiGooglechat,
    contacts: FcContacts,
    drive: FaGoogleDrive,
    calendar: SiGooglecalendar,
    translate: SiGoogletranslate,
    photos: SiGooglephotos,
    adCenter: SiGoogleads,
    shopping: CiShoppingTag,
    addUser: AiOutlineUserAdd,
    logout: MdLogout,
    download: BiDownload,
    edit: BiEditAlt,
    starEmpty: AiOutlineStar,
    starFilled: AiFillStar,
    dotsVirtical: BiDotsVerticalRounded,
  };

  const Icon = iconMapping[iconType];
  return (
    <Icon
      className={className}
      size={iconSize}
      color={color}
      onClick={onClick}
    />
  );
};

export default GetIcon;
