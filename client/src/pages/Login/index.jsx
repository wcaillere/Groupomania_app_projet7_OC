import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../utils/context/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogoRed from '../../assets/logo_red.svg';
import LogoWhite from '../../assets/logo_white.svg';
//imports components created with styled-components from style.jsx
import '../../utils/style/signup&login_Atoms.css';
import './login.css';

//Returns Login page
function Login() {
  const theme = useContext(ThemeContext).theme;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  function sendLogin(emailInput, passwordInput) {
    setPopup(false);
    var inputValidation = true;
    for (let input of document.querySelectorAll(
      'input#email, input#password'
    )) {
      inputValidation &= input.reportValidity();
    }
    if (inputValidation) {
      fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.message) {
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
              setPopup(true);
              setPopupText(result.message);
            } else {
              localStorage.setItem('token', result.token);
              window.location.href = `./home`;
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  if (localStorage.getItem('token')) {
    window.location.href = `./home`;
  }
  return (
    <div className={theme === 'dark' ? 'bodydark' : 'bodylight'}>
      <Header />
      {popup ? <div className="popup">{popupText}</div> : ''}
      <div
        className={
          theme === 'dark'
            ? 'connectionContainer connectionContainerDark'
            : 'connectionContainer'
        }
      >
        <form className="formContainer">
          <div className="connectionFormColumn">
            <img
              src={theme === 'dark' ? LogoWhite : LogoRed}
              alt="Logo groupomania"
              className="connectionLogo"
            ></img>
          </div>
          <nav
            className={
              theme === 'dark'
                ? 'separationBar separationBarDark'
                : 'separationBar'
            }
          />
          <div className="connectionFormColumn">
            <div className="formItem">
              <label
                htmlFor="email"
                className={theme === 'dark' ? 'formLabelDark' : 'formLabel'}
              >
                Adresse email
              </label>
              <input
                className="formItemInput"
                type="email"
                name="email"
                id="email"
                placeholder="exemple@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>
            <div className="formItem">
              <label
                htmlFor="password"
                className={theme === 'dark' ? 'formLabelDark' : 'formLabel'}
              >
                Mot de passe
              </label>
              <input
                className="formItemInput"
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>
          </div>
        </form>
        <input
          className="connectButton"
          type="submit"
          value="Se connecter"
          theme={theme}
          onClick={() => sendLogin(email, password)}
        />
        <Link
          to="/signup"
          className={
            theme === 'dark'
              ? 'signupLoginLink signupLoginLinkDark'
              : 'signupLoginLink'
          }
        >
          Pas encore de compte ? Inscrivez-vous ici !
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
