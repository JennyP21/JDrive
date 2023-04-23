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
  AiOutlineCloud,
  AiOutlineFileImage
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
import { BsFileEarmarkSlides, BsSearch, BsFileEarmarkArrowUp } from "react-icons/bs";
import {
  BiHistory,
  BiDownload,
  BiEditAlt,
  BiDotsVerticalRounded,
  BiFileBlank,
} from "react-icons/bi";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { FaYoutube, FaGooglePlay, FaGoogleDrive, FaRegTrashAlt } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { MdLogout, MdComputer, MdOutlinePeopleAlt, MdDriveFolderUpload, MdOutlineCreateNewFolder } from "react-icons/md";
import { RxTriangleDown, RxTriangleRight } from "react-icons/rx";

interface IconProps {
  onClick?: () => void;
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
  | "dotsVirtical"
  | "triangleDown"
  | "triangleRight"
  | "cloud"
  | "trash"
  | "computer"
  | "share"
  | "fileUpload"
  | "folderUpload"
  | "newFolder"
  | "image"
  | "unknown";
  iconSize?: number;
  className: string;
  color?: string;
}
const GetIcon = (
  { iconType, iconSize, onClick, className, color }: IconProps,
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
    triangleDown: RxTriangleDown,
    triangleRight: RxTriangleRight,
    cloud: AiOutlineCloud,
    trash: FaRegTrashAlt,
    computer: MdComputer,
    share: MdOutlinePeopleAlt,
    fileUpload: BsFileEarmarkArrowUp,
    folderUpload: MdDriveFolderUpload,
    newFolder: MdOutlineCreateNewFolder,
    image: AiOutlineFileImage,
    unknown: BiFileBlank
  };

  const Icon = iconMapping[iconType] ? iconMapping[iconType] : iconMapping["unknown"];
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
