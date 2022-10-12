import styled from 'styled-components';
import Logo from '../../assets/logo_red.svg';
import colors from '../../utils/style/colors';

const ErrorContainer = styled.div`
  background: ${colors.secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorLogo = styled.img`
  width: 80%;
  max-width: 600px;
`;

const Error404 = styled.span`
  color: ${colors.primary};
  font-weight: bold;
  font-size: 40px;
  margin: 50px auto;
  @media (min-width: 768px) {
    font-size: 50px;
  }
`;

const ErrorTxt = styled.span`
  color: ${colors.primary};
  font-weight: bold;
  width: 80%;
  font-size: 30px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

function ErrorPage() {
  return (
    <ErrorContainer>
      <ErrorLogo src={Logo} alt="Logo groupomania" />
      <Error404>404</Error404>
      <ErrorTxt>
        Oops ! La page que vous recherchez semble introuvable !
      </ErrorTxt>
    </ErrorContainer>
  );
}

export default ErrorPage;
