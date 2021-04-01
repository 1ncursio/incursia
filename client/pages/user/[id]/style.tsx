import styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;

export const MenuHeaderWrapper = styled.div`
  margin: 10px 0;
`;

export const MenuHeader = styled(Text)`
  font-size: 1.1rem;
`;

export default MenuHeader;
