import styled, { css } from "styled-components";

import V from "../../styles/variables";

import { User } from "@styled-icons/fa-solid/";
import { Telescope } from "@styled-icons/octicons/";
import { Ravelry } from "@styled-icons/fa-brands/Ravelry";
import { Telegram } from "@styled-icons/fa-brands/Telegram";

export const SkeletonNavIcon = css`
  width: 3rem;
  height: 3rem;
`;

export const IconUser = styled(User)`
  ${SkeletonNavIcon}
  fill: ${(props) => (props.active == true ? V.primary : V.lightGrey)};
  color:  ${(props) => (props.active == true ? V.primary : V.lightGrey)};
`;
export const IconResume = styled(Telescope)`
  ${SkeletonNavIcon}
  fill: ${(props) => (props.active == true ? V.primary : V.lightGrey)};
  color:  ${(props) => (props.active == true ? V.primary : V.lightGrey)};
`;
export const IconPortfolio = styled(Ravelry)`
  ${SkeletonNavIcon}
  fill: ${(props) => (props.active == true ? V.primary : V.lightGrey)};
  color:  ${(props) => (props.active == true ? V.primary : V.lightGrey)};
`;
export const IconContact = styled(Telegram)`
  ${SkeletonNavIcon}
  fill: ${(props) => (props.active == true ? V.primary : V.lightGrey)};
  color:  ${(props) => (props.active == true ? V.primary : V.lightGrey)};
`;

export const NavItem = styled.li`
  margin-right: 1.5rem;

  & > div {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    background-color: ${(props) => (props.active ? V.lightGrey : V.primary)};
    &:focus,
    &:hover {
    }

    & > span {
      margin-top: 0.5rem;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 0.8rem;
      letter-spacing: 0.05rem;
      color: ${(props) => (props.active ? V.primary : V.lightGrey)};
    }
  }
`;

export const WrapperNav = styled.nav`
  width: 100%;
  /* height: 10rem; */
  height: auto;
  background-color: ${V.primary};
  color: ${V.lightGrey};

  & > ul {
    width: auto;
    height: 100%;
    /* border: 2px solid orangered; */
    list-style: none;
    display: flex;
    justify-content: center;

    /* & > li {
      margin-right: 1.5rem;

      & > div {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        padding: 0.5rem;
        background-color: ${(props) =>
          props.activeLink ? "goldenrod" : "crimson"};
        &:focus,
        &:hover {
          background-color: goldenrod;
        }

        & > span {
          margin-top: 0.5rem;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 0.8rem;
          letter-spacing: 0.05rem;
        }
      }
    } */
  }
`;
