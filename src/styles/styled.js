import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 110rem;
  width: 100%;
  height: auto;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.primary};
  `