import React from "react";

import { tagData } from "./tagData";

import * as S from "./styled";

const index = ({ loadProjectByTag, loadAllProjects }) => {
  return (
    <S.HeaderTags>
      <S.HeaderItem onClick={() => loadAllProjects()}>All</S.HeaderItem>
      {tagData.map((tag) => {
        return (
          <S.HeaderItem key={tag.id} onClick={() => loadProjectByTag(tag.name)}>
            {tag.name}
          </S.HeaderItem>
        );
      })}
    </S.HeaderTags>
  );
};

export default index;
