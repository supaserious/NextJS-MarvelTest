import React from 'react'

import Link from 'next/link'
import { PageSidebar, Menu, MenuItem, linkStyle } from './styled.Sidebar'

const Sidebar = ({ open }) => {
  return (
    <PageSidebar open={open}>
      <nav>
        <Menu>
          <MenuItem>
            <Link href="/">
              <a style={linkStyle}>Item 1</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a style={linkStyle}>Item 2</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a style={linkStyle}>Item 3</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a style={linkStyle}>Item 4</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a style={linkStyle}>Item 5</a>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/">
              <a>Login</a>
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </PageSidebar>
  )
}
export default Sidebar
