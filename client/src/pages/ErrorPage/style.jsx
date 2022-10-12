import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const ErrorContainer = styled.div`
  background: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const ErrorLogo = styled.img`
  width: 80%;
  max-width: 600px;
`;

export const Error404 = styled.span`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 40px;
  margin: 50px auto;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

export const ErrorTxt = styled.span`
  color: ${colors.primary};
  font-weight: bold;
  width: 80%;
  font-size: 30px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;
