import { useRef, useEffect } from "react";
import GetIcon from "../../../Icons/GetIcon";
import "./profile.css";

interface Props {
  listVisible: boolean;
}

const Profile = ({ listVisible }: Props) => {
  const profileRef = useRef(document.createElement("div"));

  useEffect(() => {
    const listClasses = profileRef.current.classList;
    if (listVisible) listClasses.replace("profile-hidden", "profile-visible");
    else listClasses.replace("profile-visible", "profile-hidden");
  }, [listVisible]);

  return (
    <div ref={profileRef} className="profile profile-hidden">
      <div className="profile-primary-card">
        <div className="profile-basics">
          <GetIcon
            className="profile-icon"
            iconType="profile"
            iconSize={80}
            onClick={() => null}
          />
          <div className="profile-texts">
            <h4 className="profile-name">Jenny Patel</h4>
            <span className="profile-email">pateljenny555@gmail.com</span>
          </div>
        </div>
        <button className="profile-details">Manage your Google Account</button>
      </div>
      <div className="profile-secondary-card">
        <GetIcon
          className="profile-secondary-icon"
          iconType="addUser"
          iconSize={30}
          onClick={() => null}
        />
        <span>Add another account</span>
      </div>
      <div className="profile-signout">
        <GetIcon
          className="profile-secondary-icon"
          iconType="logout"
          iconSize={30}
          onClick={() => null}
        />
        <span>Sign out</span>
      </div>
    </div>
  );
};

export default Profile;
