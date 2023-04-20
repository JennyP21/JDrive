import { useState } from "react";
import FolderList, {
    FolderListProps,
} from "../../Content/FolderList/FolderList";
import useItemVisibility from "../../../../hooks/useItemVisibility";
import "./leftPanelFolderDropDown.css";

interface Props {
    className: string;
    items: FolderListProps[][];
}

const LeftPanelFolderDropDown = ({ items, className }: Props) => {
    const [itemVisibility, setItemVisibility] = useState(false);

    useItemVisibility({
        itemVisibility,
        setItemVisibility,
        targetClassName: className,
    });

    return (
        <div className="leftpanel-folder-dropdown">
            <div className={className}>
                <button onClick={(e) => {
                    e.stopPropagation();
                    setItemVisibility(!itemVisibility)
                }} className="leftpanel-button">+ New</button>
            </div>
            <FolderList listVisible={itemVisibility} items={items} />
        </div>
    );
};

export default LeftPanelFolderDropDown;
