import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const ConnectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px 20px 20px;
  background: ${colors.secondary};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px rgba(171, 171, 171, 0.72);
  @media (min-width: 768px) {
    padding: 40px 40px 20px 40px;
  }
`;

export const FormColumn = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 45%;
    padding-top: 20px;
  }
`;

export const ConnectionLogo = styled.img`
  display: none;
  margin: auto;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
  }
`;
