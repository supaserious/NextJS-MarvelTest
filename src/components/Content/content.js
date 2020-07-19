import React from 'react'

import { PageContent } from './styled.Content'

const Content = ({ open, children }) => {
  return <PageContent open={open}>{children}</PageContent>
}
export default Content
