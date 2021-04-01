import styled, { css } from 'styled-components';
import { Comment } from 'antd';

const CommentWrapper = styled(Comment)`
  ${({ nested }: { nested: boolean }) =>
    nested &&
    css`
      padding-left: 40px;
    `}
`;

export default CommentWrapper;
