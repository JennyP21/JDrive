import { useState } from "react";
import FolderList from "../../Content/FolderList/FolderList";
import useItemVisibility from "../../../../hooks/useItemVisibility";
import "./leftPanelDropDown.css";

interface Props {
    containerClassName: string;
    contentClassName: string;
}

const LeftPanelFolderDropDown = ({ containerClassName, contentClassName }: Props) => {
    const [itemVisibility, setItemVisibility] = useState(false);

    useItemVisibility({
        itemVisibility,
        setItemVisibility,
        containerClassName: containerClassName,
        contentClassname: contentClassName
    });

    return (
        <div className="leftpanel-dropdown">
            <div className={containerClassName}>
                <button onClick={(e) => {
                    e.stopPropagation();
                    setItemVisibility(!itemVisibility)
                }} className="leftpanel-button">+ New</button>
            </div>
            <FolderList contentClassName={contentClassName} listVisible={itemVisibility} />
        </div>
    );
};

export default LeftPanelFolderDropDown;
