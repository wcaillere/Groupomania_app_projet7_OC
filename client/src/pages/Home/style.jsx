import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const MainContainer = styled.main`
  background: #e7e7e7;
  padding: 20px 0px;
`;

export const SeparationBar = styled.div`
  border: 1px solid ${colors.primary};
  background: ${colors.primary};
  width: 95%;
  margin: auto;
  max-width: 600px;
`;

//Used to not have a footer fixed hiding end of the page
export const ClearDiv = styled.div`
  height: 30px;
`;
