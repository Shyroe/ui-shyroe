import React, { useState, Fragment } from "react";

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as S from "./styled";
import Navigation from "../Navigation/index";

import Profile from "../TabsParticles/_Profile";
import Portfolio from "../TabsParticles/_Portfolio";
import Resume from "../TabsParticles/_Resume";
import Contact from "../TabsParticles/_Contact";

// import Profile from "../Profile/index";
// import Resume from "../Resume/index";
// import Portfolio from "../Portfolio/index";
// import Contact from "../Contact/index";

import { menuTabsData } from "../componentsData/index";

// const index = () => {
export default () => {
  const [activeTab, setActiveTab] = useState("");
  // const [activeLink, setActiveLink] = useState(false);
  const [menuTabs, setMenuTabs] = useState(menuTabsData);
  // console.log("MenuTabs State: ", menuTabs);

  const renderTab = (tab) => {
    switch (tab) {
      case "profile":
        return <Profile />;
        break;
      case "resume":
        return <Resume />;
        break;
      case "portfolio":
        return <Portfolio />;
        break;
      case "contact":
        return <Contact />;
        break;
      default:
        return <Profile />;
    }
  };

  const openTab = (id, nameTab) => {
    console.log("Open tab Disparado");
    //Zerar todos os items active
    const menusActiveFalse = menuTabs.map((tab) => {
      tab.active = false;
      return tab;
    });
    console.log("ActiveFalse All: ", menusActiveFalse);

    //Modificar o state active do item selecionado
    menuTabs.forEach((tab) => (tab.id == id ? (tab.active = true) : null));
    setActiveTab(nameTab);
  };

  return (
    <Fragment>
      <Navigation menuTabs={menuTabs} openTab={openTab} />
      <S.WrapperLayout>{renderTab(activeTab)}</S.WrapperLayout>
    </Fragment>
  );
};
