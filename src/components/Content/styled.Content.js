import styled from 'styled-components'

export const PageContent = styled.main`
  display: flex;
  min-width: 100%;
  min-height: calc(100vh - 60px);
  padding: 15px;
  background-color: ${({ theme }) => theme.color.mainBG};
  transition: 0.4s ease-in-out;

  @media screen and (min-width: 769px) {
    padding-left: ${({ open }) => (open ? '300px' : '15px')};
  }
`
