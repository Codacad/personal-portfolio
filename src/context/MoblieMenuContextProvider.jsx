import React, { useState } from "react";
import MoblieMenuContext from "./MobileMenuContext";
const MoblieMenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [mobileMenuClasses, setMobileMenuClasses] = useState(
    "mobile-menus max-md:block hidden"
  );
  const mobileMenuHandler = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setMobileMenuClasses(
        "mobile-menus max-md:block hidden collapse-mobile-menu"
      );
    } else {
      setMobileMenuClasses("mobile-menus max-md:block hidden");
    }
  };
  return (
    <div>
      <MoblieMenuContext.Provider
        value={{
          isOpen,
          setIsOpen,
          toggler,
          setToggler,
          mobileMenuClasses,
          setMobileMenuClasses,
          mobileMenuHandler,
        }}
      >
        {children}
      </MoblieMenuContext.Provider>
    </div>
  );
};

export default MoblieMenuContextProvider;
