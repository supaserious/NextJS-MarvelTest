import React from 'react'

import {
  MenuButton,
  PageHeader,
  Logo,
  LogoTextLarge,
  LogoTextMiddle,
  LogoTextSmall,
  Wrapper
} from './styled.Header'

const Header = ({ open, setOpen }) => {
  return (
    <PageHeader>
      <Wrapper>
        <MenuButton open={open} onClick={setOpen}>
          <span />
          <span />
          <span />
        </MenuButton>
        <Logo>
          <LogoTextLarge>Something</LogoTextLarge>
          <LogoTextMiddle>sh*t</LogoTextMiddle>
          <LogoTextSmall>stuff</LogoTextSmall>
        </Logo>
      </Wrapper>
    </PageHeader>
  )
}
export default Header
