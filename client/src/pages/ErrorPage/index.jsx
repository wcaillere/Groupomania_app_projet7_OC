import Logo from '../../assets/logo_red.svg';
//imports components created with styled-components from style.jsx
import { ErrorContainer, Error404, ErrorLogo, ErrorTxt } from './style';

//Returns the page for Error 404
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
