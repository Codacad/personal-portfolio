import { useState } from "react";
import MoblieMenuContext from "./MobileMenuContext";
const MoblieMenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [mobileMenuClasses, setMobileMenuClasses] = useState(
    "mobile-menus max-md:block hidden"
  );
  let [barOne, setBarOne] = useState("bar bar-one");
  let [barTwo, setBarTwo] = useState("bar bar-two");
  let [barThree, setBarThree] = useState("bar bar-three");

  const handleTogglerChange = () => {
    setToggler(!toggler);
    mobileMenuHandler();
    if (!toggler) {
      setBarOne("bar bar-one transform-bar-one");
      setBarTwo("bar bar-two transform-bar-two");
      setBarThree("bar bar-three transform-bar-three");
    } else {
      setBarOne("bar bar-one");
      setBarTwo("bar bar-two");
      setBarThree("bar bar-three");
    }
  };
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
  const openCloseHandler = () => {
    mobileMenuHandler();
    handleTogglerChange();
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
          barOne,
          barTwo,
          barThree,
          handleTogglerChange,
          openCloseHandler,
        }}
      >
        {children}
      </MoblieMenuContext.Provider>
    </div>
  );
};

export default MoblieMenuContextProvider;
