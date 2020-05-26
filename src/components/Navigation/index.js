import React from "react";
import * as S from "./styled";

export default ({ openTab, menuTabs }) => {
  const changeIcon = (icon, active) => {
    switch (icon) {
      case "profile":
        return <S.IconUser active={active} />;
        break;
      case "resume":
        return <S.IconResume active={active} />;
        break;
      case "portfolio":
        return <S.IconPortfolio active={active} />;
        break;
      case "contact":
        return <S.IconContact active={active} />;
        break;
    }
  };
  return (
    <S.WrapperNav>
      <ul>
        {menuTabs.map((tab) => {
          return (
            <S.NavItem
              key={tab.id}
              onClick={() => openTab(tab.id, tab.title)}
              active={tab.active}
            >
              <div>
                {changeIcon(tab.icon, tab.active)}
                <span>{tab.title}</span>
              </div>
            </S.NavItem>
          );
        })}
      </ul>
    </S.WrapperNav>
  );
};

{
  /* <S.WrapperNav activeLink={activeLink}>
      <ul>
        <li onClick={() => openTab("Profile")}>
          <div>
            <S.IconUser />
            <span>profile</span>
          </div>
        </li>
        <li onClick={() => openTab("Resume")}>
          <div>
            <S.IconResume />
            <span>resume</span>
          </div>
        </li>
        <li onClick={() => openTab("Profile")}>
          <div>
            <S.IconPortfolio />
            <span>portfolio</span>
          </div>
        </li>
        <li onClick={() => openTab("Profile")}>
          <div>
            <S.IconContact />
            <span>contact</span>
          </div>
        </li>
      </ul> */
}
