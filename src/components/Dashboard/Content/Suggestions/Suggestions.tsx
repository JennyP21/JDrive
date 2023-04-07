import { FcGoogle } from "react-icons/fc";
import "./suggestions.css";

const Suggestions = () => {
  return (
    <div className="suggetions">
      <h4 className="suggestions-heading">Suggested</h4>
      <div className="suggestion">
        <div className="file">
          <FcGoogle className="file-icon" size={18} />
          <span className="file-name">How to make website.docs</span>
        </div>
        <div className="preview"></div>
        <p className="activity">You opened this file last week.</p>
      </div>
      <div className="suggestion">
        <div className="file">
          <FcGoogle className="file-icon" size={18} />
          <span className="file-name">How to make website.docs</span>
        </div>
        <div className="preview"></div>
        <p className="activity">You opened this file last week.</p>
      </div>
      <div className="suggestion">
        <div className="file">
          <FcGoogle className="file-icon" size={18} />
          <span className="file-name">How to make website.docs</span>
        </div>
        <div className="preview"></div>
        <p className="activity">You opened this file last week.</p>
      </div>
      <div className="suggestion">
        <div className="file">
          <FcGoogle className="file-icon" size={18} />
          <span className="file-name">How to make website.docs</span>
        </div>
        <div className="preview"></div>
        <p className="activity">You opened this file last week.</p>
      </div>
      <div className="suggestion">
        <div className="file">
          <FcGoogle className="file-icon" size={18} />
          <span className="file-name">How to make website.docs</span>
        </div>
        <div className="preview"></div>
        <p className="activity">You opened this file last week.</p>
      </div>
    </div>
  );
};

export default Suggestions;
