import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const SignupContainer = styled.div`
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
    padding: 40px 2% 20px 2%;
  }
`;

export const FormColumn = styled.div`
  @media (min-width: 768px) {
    width: 45%;
    padding-top: ${(props) => (props.id === 'firstColumn' ? '80px' : '20px')};
  }
`;
