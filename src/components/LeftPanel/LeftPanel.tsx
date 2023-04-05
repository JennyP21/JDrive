import { FaGoogleDrive, FaRegTrashAlt } from "react-icons/fa";
import { RxTriangleRight } from "react-icons/rx";
import { MdComputer, MdOutlinePeopleAlt, MdHistory } from "react-icons/md";
import { AiOutlineStar, AiOutlineCloud } from "react-icons/ai";
import "./leftPanel.css";

const LeftPanel = () => {
  const iconSize = 20;

  const handleExpand = (event: React.MouseEvent) => {
    const targetElement = event.target as HTMLUnknownElement;
    targetElement.classList.toggle("open");
    console.log(targetElement);
  };

  return (
    <div className="leftpanel">
      <div className="leftpanel-item my-drive selected">
        <RxTriangleRight
          className="expandable-arrow"
          onClick={(event) => handleExpand(event)}
        />
        <FaGoogleDrive size={iconSize} className="leftpanel-icon" />
        <span className="leftpanel-text">My Drive</span>
      </div>
      <div className="leftpanel-item computers">
        <RxTriangleRight
          className="expandable-arrow"
          onClick={(event) => handleExpand(event)}
        />
        <MdComputer size={iconSize} className="leftpanel-icon" />
        <span className="leftpanel-text">Computers</span>
      </div>
      <div className="leftpanel-item shared">
        <MdOutlinePeopleAlt size={iconSize} className="leftpanel-icon" />
        <span className="leftpanel-text">Shared with me</span>
      </div>
      <div className="leftpanel-item shared">
        <MdHistory size={iconSize} className="leftpanel-icon" />
        <span className="leftpanel-text">Recent</span>
      </div>
      <div className="leftpanel-item shared">
        <AiOutlineStar size={iconSize} className="leftpanel-icon" />
        <span className="leftpanel-text">Starred</span>
      </div>
      <div className="leftpanel-item shared">
        <FaRegTrashAlt size={iconSize} className="leftpanel-icon" />
        <span className="leftpanel-text">Trash</span>
      </div>
      <div className="leftpanel-item shared">
        <AiOutlineCloud size={iconSize} className="leftpanel-icon" />
        <span className="leftpanel-text">Storage</span>
      </div>
    </div>
  );
};

export default LeftPanel;
