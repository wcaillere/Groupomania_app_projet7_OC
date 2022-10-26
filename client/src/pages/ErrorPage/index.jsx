import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';
import LogoRed from '../../assets/logo_red.svg';
import LogoWhite from '../../assets/logo_white.svg';
import './errorPage.css';

/**
 * Returns the page for Error 404
 * @returns {React.ReactElement}
 */
function ErrorPage() {
  const theme = useContext(ThemeContext).theme;

  return (
    <div
      className={
        'errorContainer ' + (theme === 'dark' ? 'errorContainerDark' : '')
      }
    >
      <img
        src={theme === 'dark' ? LogoWhite : LogoRed}
        alt="Logo groupomania"
        className="errorLogo"
      />
      <span className={'error404 ' + (theme === 'dark' ? 'darkText' : '')}>
        404
      </span>
      <span className={'errorText ' + (theme === 'dark' ? 'darkText' : '')}>
        Oops ! La page que vous recherchez semble introuvable !
      </span>
    </div>
  );
}

export default ErrorPage;
