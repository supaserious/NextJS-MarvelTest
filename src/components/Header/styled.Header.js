import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.grey};
  height: 60px;
  padding: 0 15px;
`
export const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  top: 50%;
  left: 0;
  width: 35px;
  height: 23px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  transition: 0.6s ease-in-out;

  @media screen and (min-width: 769px) {
    left: ${({ open }) => (open ? '107px' : 0)};
  }

  &:focus {
    outline: none;
  }
  span {
    display: inline-block;
    width: 100%;
    margin-bottom: 4px;
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 15px;
    transition: 0.2s;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
      top: ${({ open }) => (open ? '6px' : '0')};
      position: ${({ open }) => (open ? 'absolute' : 'static')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
      top: ${({ open }) => (open ? '6px' : '0')};
      position: ${({ open }) => (open ? 'absolute' : 'static')};
    }
  }
`

export const Title = styled.h1``

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color:rgba(255, 0, 0,0.92);
  font-family: ${({ theme }) => theme.fonts.secondary}
  letter-spacing: 0.25px;
  animation: text-blur 4s ease-in-out infinite;
  @keyframes text-blur {
    0% {
      filter: blur(0);
    }
    50% {
      filter: blur(1px);
    }
    100% {
      filter: blur(0);
    }
  }
`
export const LogoTextLarge = styled.h1`
  font-size: 21px;
`
export const LogoTextMiddle = styled.h2`
  font-size: 18px;
`
export const LogoTextSmall = styled.h3`
  font-size: 12px;
`
