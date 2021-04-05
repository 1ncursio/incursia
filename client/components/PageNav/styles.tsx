import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
  background: #646464;
  font-size: 1rem;

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
    isCurrentPage ? 'font-weight: 600;color: white;' : 'color: #979797'};
  &:hover {
    color: white;
  }
`;
