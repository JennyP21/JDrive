import { useState } from "react";
import "./navbar.css";
import Logo from "../Content/Logo/Logo";
import Elements from "../Content/Elements/Elements";
import AdvancedSearch from "../Content/Searchbar/AdvancedSearch";
import Search from "../Content/Searchbar/Search";

const Navbar = () => {
  const [adSearchVisibility, setAdSearchVisibility] = useState(false);

  return (
    <>
      <nav className="nav">
        <Logo />
        <Search
          adSearchVisibility={adSearchVisibility}
          setAdSearchVisibility={setAdSearchVisibility}
        />
        <Elements />
      </nav>
      {adSearchVisibility && (
        <AdvancedSearch
          adSearchVisibility={adSearchVisibility}
          setAdSearchVisibility={setAdSearchVisibility}
        />
      )}
    </>
  );
};

export default Navbar;
