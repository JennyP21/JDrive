import GDrive from "./gdrive.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <img className="logo-icon" src={GDrive} alt="brand Logo" />
      <h2 className="logo-text">Drive</h2>
    </div>
  );
};

export default Logo;
