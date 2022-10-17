import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const ConnectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px 20px 20px;
  background: ${(props) =>
    props.theme === 'dark' ? colors.Tertiary : colors.secondary};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
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

export const BadLoginPoppup = styled.div`
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 10px;
  background: ${colors.primary};
  border-radius: 10px;
  color: white;
`;
