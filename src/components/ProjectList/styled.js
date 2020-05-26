import styled, { css } from "styled-components";
import V from "../../styles/variables";
import { LeftArrow } from "@styled-icons/boxicons-solid/";
import { RightArrow } from "@styled-icons/boxicons-solid/";

export const SkeletonArrows = css`
  width: 2.5rem;
  height: 2.5rem;
  color: ${V.lightGrey};
  cursor: pointer;
`;

export const leftArrow = styled(LeftArrow)`
  ${SkeletonArrows}
`;
export const rightArrow = styled(RightArrow)`
  ${SkeletonArrows}
`;

export const WrapperPortfolio = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  background-color: ${V.lightGrey};
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.5rem;

  & > .header-tags {
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    & .tag-item {
      color: ${V.lightGrey};
      padding: 0.5rem;
      border-radius: 15%;
      background-color: ${V.darkGrey};
      text-transform: uppercase;
      margin-right: 1rem;
      margin-bottom: 0.5rem;
      cursor: pointer;

      &:hover {
        background-color: ${V.primary};
      }
    }
  }

  & > .title {
    text-transform: uppercase;
    color: ${V.darkGrey};
    margin: 2rem 0;
  }

  & > .wrapper-projects {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    & > .project-item {
      width: auto;
      height: auto;
      padding: 1rem;
      color: ${V.darkGrey};
      text-transform: capitalize;
      display: flex;
      flex-direction: column;
      align-items: center;

      & > figure {
        width: 16rem;
        height: 10rem;
        cursor: pointer;
        & > img {
          width: 100%;
          height: 100%;
        }
      }

      & > h3 {
        margin-top: 0.6rem;
        margin-bottom: 1rem;
      }
    }
  }
`;

// Projects - Style
export const WrapperProjects = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ProjectItem = styled.div`
  width: auto;
  height: auto;
  padding: 1rem;
  color: ${V.darkGrey};
  text-transform: capitalize;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > figure {
    width: 16rem;
    height: 10rem;
    cursor: pointer;
    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > h3 {
    margin-top: 0.6rem;
    margin-bottom: 1rem;
  }
`;

export const WrapperModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  & > .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 3rem;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    color: ${V.lightGrey};

    & > .close {
      margin-left: auto;
      margin-right: 1rem;
      font-size: 4rem;
      font-weight: bold;
      cursor: pointer;
      margin-bottom: 2rem;
    }

    & > figure {
      width: 80%;
      height: 80%;
      & > img {
        width: 100%;
        height: 100%;
      }

      & > figcaption {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;
      }
    }
  }
`;

export const WrapperButtons = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
`;
