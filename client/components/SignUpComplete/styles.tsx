import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const TitleWrapper = styled(Title)`
  margin: 10px;
  /* margin-bottom: 5px;
  & + & {
    margin-bottom: 10px;
  } */
`;

export const TitleWrappers = styled(Title)`
  /* margin: 0;
  margin-bottom: 5px;
  & + & {
    margin-bottom: 10px;
  } */
`;
