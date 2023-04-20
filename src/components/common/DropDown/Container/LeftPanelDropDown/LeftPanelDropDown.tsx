import { useState } from "react";
import FolderList, {
    FolderListProps,
} from "../../Content/FolderList/FolderList";
import useItemVisibility from "../../../../hooks/useItemVisibility";
import "./leftPanelDropDown.css";

interface Props {
    containerClassName: string;
    contentClassName: string;
    items: FolderListProps[][];
}

const LeftPanelFolderDropDown = ({ items, containerClassName, contentClassName }: Props) => {
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
            <FolderList contentClassName={contentClassName} listVisible={itemVisibility} items={items} />
        </div>
    );
};

export default LeftPanelFolderDropDown;
