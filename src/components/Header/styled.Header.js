import styled from 'styled-components';

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.color.grey};
  height: 60px;
  padding: 0 15px;
`;
