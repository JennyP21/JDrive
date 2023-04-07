import DropDown from "../../../common/DropDown/Container/DropDown";
import MenuDropDown from "../../../common/DropDown/Container/MenuDropDown";
import ProfileDropDown from "../../../common/DropDown/Container/ProfileDropDown";

const Elements = () => {
  const items = [
    { iconType: "profile", iconText: "Account" },
    { iconType: "google", iconText: "Search" },
    { iconType: "navigation", iconText: "Maps" },
    { iconType: "youtube", iconText: "YouTube" },
    { iconType: "googlePlay", iconText: "Play" },
    { iconType: "news", iconText: "News" },
    { iconType: "gmail", iconText: "Gmail" },
    { iconType: "meet", iconText: "Meet" },
    { iconType: "chat", iconText: "Chat" },
    { iconType: "contacts", iconText: "Contacts" },
    { iconType: "drive", iconText: "Drive" },
    { iconType: "calendar", iconText: "Calendar" },
    { iconType: "translate", iconText: "Translate" },
    { iconType: "photos", iconText: "Photos" },
    { iconType: "adCenter", iconText: "My Ad Center" },
    { iconType: "shopping", iconText: "Shopping" },
  ];
  const settingsItems = [
    "Settings",
    "Get Drive for Desktop",
    "Keyboard shortcut",
  ];
  const helpItems = ["Help", "Training", "Updates"];
  const iconSize = 25;

  return (
    <div className="elements">
      <ProfileDropDown iconType={"profile"} iconSize={iconSize} />
      <MenuDropDown items={items} iconSize={iconSize} iconType="menu" />
      <DropDown
        iconType={"settings"}
        items={settingsItems}
        iconSize={iconSize}
        dataType="settings"
      />
      <DropDown
        iconType={"help"}
        items={helpItems}
        iconSize={iconSize}
        dataType="help"
      />
    </div>
  );
};

export default Elements;
