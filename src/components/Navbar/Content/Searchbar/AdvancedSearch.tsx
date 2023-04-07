import GetIcon from "../../../common/Icons/GetIcon";
import "./advancedsearch.css";

import { useRef } from "react";

export interface AdvancedSearchProps {
  adSearchVisibility: boolean;
  setAdSearchVisibility: (adSearchVisibility: boolean) => void;
}

const AdvancedSearch = ({
  adSearchVisibility,
  setAdSearchVisibility,
}: AdvancedSearchProps) => {
  const optionMenuRef = useRef(document.createElement("form"));

  return (
    <form
      ref={optionMenuRef}
      className="adsearch"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target);
      }}
    >
      <div className="container adsearch-close">
        <GetIcon
          className=""
          iconType="close"
          iconSize={20}
          onClick={() => setAdSearchVisibility(!adSearchVisibility)}
        />
      </div>
      <div className="container adsearch-type">
        <div className="adsearch-label">Type</div>
        <div className="adsearch-dropdown">
          <select className="adsearch-options">
            <option>Any</option>
            <option>Photos & Images</option>
            <option>PDFs</option>
            <option>Documents</option>
            <option>Spreadsheets</option>
            <option>Presentations</option>
            <option>Forms</option>
            <option>Audio</option>
            <option>Videos</option>
            <option>Archives (zip)</option>
            <option>Drawings</option>
            <option>Shortcuts</option>
            <option>Folders</option>
            <option>Sites</option>
          </select>
        </div>
      </div>

      <div className="container adsearch-owner">
        <div className="adsearch-label">Owner</div>
        <div className="adsearch-dropdown">
          <select className="adsearch-options">
            <option>Anyone</option>
            <option>Owned by me</option>
            <option>Not owned by me</option>
            <option>Specific person...</option>
          </select>
        </div>
        <div className="adsearch-input">
          <input placeholder="Enter a name or email address" />
        </div>
      </div>

      <div className="container adsearch-words">
        <div className="adsearch-label">Has the words</div>
        <div className="adsearch-input">
          <input placeholder="Enter words found in the file" />
        </div>
      </div>

      <div className="container adsearch-item-name">
        <div className="adsearch-label">Item name</div>
        <div className="adsearch-input">
          <input placeholder="Enter a term that matches part of the file name" />
        </div>
      </div>

      <div className="container adsearch-location">
        <div className="adsearch-label">Location</div>
        <div className="adsearch-dropdown">
          <select className="adsearch-options">
            <option>Anywhere</option>
            <option>My Drive</option>
            <option>Shared with me</option>
            <option>More Locations...</option>
          </select>
        </div>
        <div className="adsearch-checkbox">
          <input type="checkbox" />
          <span>In trash</span>
          <input type="checkbox" />
          <span>Starred</span>
          <input type="checkbox" />
          <span>Encrypted</span>
        </div>
      </div>

      <div className="container adsearch-date">
        <div className="adsearch-label">Date modified</div>
        <div className="adsearch-dropdown">
          <select className="adsearch-options">
            <option>Any time</option>
            <option>Today</option>
            <option>Yesterday</option>
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>Custom...</option>
          </select>
        </div>
      </div>

      <div className="container adsearch-approvals">
        <div className="adsearch-label">Approvals</div>
        <div className="adsearch-checkbox">
          <input type="checkbox" />
          <span>Awaiting my approval</span>
          <input type="checkbox" />
          <span>Requested by me</span>
        </div>
      </div>

      <div className="container adsearch-shared">
        <div className="adsearch-label">Shared to</div>
        <div className="adsearch-input">
          <input placeholder="Enter a name or email address..." />
        </div>
      </div>

      <div className="container adsearch-followup">
        <div className="adsearch-label">Follow-ups</div>
        <div className="adsearch-dropdown">
          <select className="adsearch-options">
            <option>-</option>
            <option>Any</option>
            <option>Suggestions only</option>
            <option>Comments assigned to me only</option>
          </select>
        </div>
      </div>
      <div className="container adsearch-submit">
        <div className="adsearch-learn">
          <a className="adsearch-learn-button" href="#">
            Learn More
          </a>
        </div>
        <div className="adsearch-button">
          <a className="adsearch-button-reset" href="#">
            Reset
          </a>
          <button className="adsearch-button-search">Search</button>
        </div>
      </div>
    </form>
  );
};

export default AdvancedSearch;
