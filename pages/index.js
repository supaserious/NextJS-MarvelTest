import React from 'react';
import styled from 'styled-components';
import { PageHeader } from '../src/components/Header/styled.Header';

const Title = styled.h1`
  font-size: 40px;
  color: red;
`;

const HomePage = () => {
  return (
    <PageHeader>
      <Title>READY</Title>
    </PageHeader>
  );
};
export default HomePage;
