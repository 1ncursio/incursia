import styled from '@emotion/styled';

export const Nav = styled.nav`
  height: 40px;
  line-height: 40px;
  margin-bottom: 10px;
  background: #646464;

  /* a {
    font-size: 1rem;
    color: #c4c4c4;
  } */
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li + li {
    padding: 0 10px;
  }
`;

export const Anc = styled.a`
  ${({ isCurrentPage }: { isCurrentPage: boolean }) =>
    isCurrentPage &&
    `
  font-weight: 600;
  color: black; 
  `}
`;
