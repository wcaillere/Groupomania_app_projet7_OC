import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../utils/context/index';
//Imports components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogoRed from '../../assets/logo_red.svg';
import LogoWhite from '../../assets/logo_white.svg';
//Imports CSS
import '../../utils/style/signup&login_Atoms.css';
import './login.css';

//Returns Login page
function Login() {
  const theme = useContext(ThemeContext).theme;
  //States to stock inputs' values and update them
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //States to stock and trigger the poppups
  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  //Send login informations to the API
  function sendLogin(emailInput, passwordInput) {
    //Erases the poppup before a new try of login
    setPopup(false);

    //Verifies the validity of each input
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
              //Saves the result in the localStorage to identify the user during his session
              localStorage.setItem(
                'user',
                `${result.user.userId} ${result.user.userName}`
              );
              localStorage.setItem('isAdmin', result.isAdmin);
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

  //If there is a token in the localStorage, the user session is not finished
  if (localStorage.getItem('token')) {
    window.location.href = `./home`;
  }

  return (
    <div className={theme === 'dark' ? 'bodydark' : 'bodylight'}>
      <Header />
      {popup ? <div className="popup">{popupText}</div> : ''}
      <div
        className={
          'connectionContainer ' +
          (theme === 'dark' ? 'connectionContainerDark' : '')
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
              'separationBar ' + (theme === 'dark' ? 'separationBarDark' : '')
            }
          />
          <div className="connectionFormColumn">
            <div className="formItem">
              <label
                htmlFor="loginEmail"
                className={theme === 'dark' ? 'formLabelDark' : 'formLabel'}
              >
                Adresse email
              </label>
              <input
                className="formItemInput"
                type="email"
                name="loginEmail"
                id="loginEmail"
                placeholder="exemple@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <i className="fa-solid fa-envelope fa-sm"></i>
            </div>
            <div className="formItem">
              <label
                htmlFor="loginPassword"
                className={theme === 'dark' ? 'formLabelDark' : 'formLabel'}
              >
                Mot de passe
              </label>
              <input
                className="formItemInput"
                type="password"
                name="loginPassword"
                id="loginPassword"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <i className="fa-solid fa-lock fa-sm"></i>
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
            'signupLoginLink ' + (theme === 'dark' ? 'signupLoginLinkDark' : '')
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
