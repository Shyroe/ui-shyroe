import styled from "styled-components";
import V from "../../styles/variables";

export const WrapperModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  /* overflow-y: none; */
  /* overflow: auto; */
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
/*
  & > .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 3rem;
    /* width: 50%;
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
        /* border: 2px solid red;
        display: flex;
        justify-content: flex-end;
        font-size: 1.5rem;
      }
    }
  } */
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-top: 3rem;
  /* width: 50%; */
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
      /* border: 2px solid red; */
      display: flex;
      justify-content: flex-end;
      font-size: 1.5rem;
    }
  }
`;
