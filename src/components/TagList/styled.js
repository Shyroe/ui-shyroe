import styled from "styled-components";
import V from "../../styles/variables";

export const HeaderTags = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

export const HeaderItem = styled.div`
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
`;
