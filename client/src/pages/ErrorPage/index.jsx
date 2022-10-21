import Logo from '../../assets/logo_red.svg';
import './errorPage.css';

//Returns the page for Error 404
function ErrorPage() {
  return (
    <div className="errorContainer">
      <img src={Logo} alt="Logo groupomania" className="errorLogo" />
      <span className="error404">404</span>
      <span className="errorTxt">
        Oops ! La page que vous recherchez semble introuvable !
      </span>
    </div>
  );
}

export default ErrorPage;
