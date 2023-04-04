import { useEffect, useRef, useState } from "react";
import "./search.css";
import GetIcon from "../../common/Icons/GetIcon";
import RecentSearch from "./RecentSearch";
import SearchMore from "./SearchMore";
import FileTypeSearch from "./FileTypeSearch";
import { AdvancedSearchProps } from "./AdvancedSearch";

const Search = ({
  adSearchVisibility,
  setAdSearchVisibility,
}: AdvancedSearchProps) => {
  const searchRef = useRef(document.createElement("div"));

  const [searchFocus, setSearchFocus] = useState(true);

  useEffect(() => {
    if (searchFocus) searchRef.current.classList.add("search-active");
    else searchRef.current.classList.remove("search-active");
  }, [searchFocus]);

  return (
    <>
      <div
        ref={searchRef}
        className="search-container"
        onBlur={() => setSearchFocus(false)}
      >
        <div className="search-main">
          <button className="search-icon">
            <GetIcon
              className=""
              iconType="search"
              iconSize={20}
              onClick={() => console.log("Search...")}
            />
          </button>
          <input
            className="search"
            placeholder="Search in Drive..."
            onFocus={() => setSearchFocus(true)}
          />
          <button className="search-menu-icon">
            <GetIcon
              className=""
              iconType="options"
              iconSize={20}
              onClick={() => setAdSearchVisibility(!adSearchVisibility)}
            />
          </button>
        </div>
        <RecentSearch />
        <FileTypeSearch />
        <SearchMore />
      </div>
    </>
  );
};

export default Search;
