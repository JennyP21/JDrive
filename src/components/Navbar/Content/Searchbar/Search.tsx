import { useEffect, useRef, useState } from "react";
import "./search.css";

import RecentSearch from "./RecentSearch";
import SearchMore from "./SearchMore";
import FileTypeSearch from "./FileTypeSearch";
import { AdvancedSearchProps } from "./AdvancedSearch";
import GetIcon from "../../../common/Icons/GetIcon";

const Search = ({
  adSearchVisibility,
  setAdSearchVisibility,
}: AdvancedSearchProps) => {
  const searchRef = useRef(document.createElement("div"));

  const [searchFocus, setSearchFocus] = useState(false);

  useEffect(() => {
    if (searchFocus) searchRef.current.classList.add("search-active");
    else searchRef.current.classList.remove("search-active");
  }, [searchFocus]);

  return (
    <>
      <div ref={searchRef} className="search-container">
        <div className="search-main">
          <button className="search-icon">
            <GetIcon
              className=""
              iconType="search"
              iconSize={18}
              onClick={() => console.log("Search...")}
            />
          </button>
          <input
            className="search"
            placeholder="Search in Drive..."
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <button className="search-menu-icon">
            <GetIcon
              className=""
              iconType="options"
              iconSize={18}
              onClick={() => setAdSearchVisibility(!adSearchVisibility)}
            />
          </button>
        </div>
        {searchFocus && (
          <div className="search-dropdown">
            <RecentSearch />
            <FileTypeSearch />
            <SearchMore
              adSearchVisibility={adSearchVisibility}
              setAdSearchVisibility={setAdSearchVisibility}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Search;
