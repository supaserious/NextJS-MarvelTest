import styled from 'styled-components'

export const PageSidebar = styled.aside`
  width: 100%;
  min-height: 100vh;
  position: fixed;
  background-color: ${({ theme }) => theme.color.lightGrayOp};
  left: ${({ open }) => (open ? 0 : '-105%')};
  transition: 0.4s ease-in-out;
  box-shadow: 0 10px 10px ${({ theme }) => theme.color.lightGrey};

  @media screen and (min-width: 769px) {
    max-width: 280px;
    left: ${({ open }) => (open ? 0 : '-280px')};
  }
`

export const Menu = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  padding: 3px 3px 0;
`
export const MenuItem = styled.li`
  min-width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.color.white};
  margin-bottom: 3px;
  text-transform: uppercase;
  font-size: 18px;
  transition: 0.37s ease-in-out;

  &:last-child {
    position: absolute;
    min-width: calc(100% - 6px);
    bottom: 2px;
    background-color: ${({ theme }) => theme.color.lightRed};

    a {
      color: ${({ theme }) => theme.color.white};
      transition: 0.4s ease-in-out;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    &:hover {
      background-color: ${({ theme }) => theme.color.lightRed};

      a {
        color: ${({ theme }) => theme.color.grey};
      }
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.lightGrayOp};
    color: $white;

    a {
      color: ${({ theme }) => theme.color.white};
    }
  }
`
export const linkStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#d56b6b',
  letterSpacing: '0.25px',
  height: '100%'
}
