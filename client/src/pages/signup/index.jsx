import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../utils/context/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//imports components created with styled-components from style.jsx
import './signup.css';
import '../../utils/style/signup&login_Atoms.css';

//Returns the Signup page
function Signup() {
  const theme = useContext(ThemeContext).theme;
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [popup, setPopup] = useState(false);
  const [popupText, setPopupText] = useState('');

  function sendSignup(
    firstnameInput,
    lastnameInput,
    emailInput,
    passwordInput,
    confirmInput
  ) {
    setPopup(false);
    var inputValidation = true;

    if (confirmInput !== passwordInput) {
      document
        .querySelector('input#confirm')
        .setCustomValidity("La confirmation du mot de passe n'est pas corecte");
    } else {
      document.querySelector('input#confirm').setCustomValidity('');
    }

    for (let input of document.querySelectorAll(
      'input#firstname, input#lastname, input#email, input#password, input#confirm'
    )) {
      inputValidation &= input.reportValidity();
    }

    if (inputValidation) {
      fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: firstnameInput,
          lastname: lastnameInput,
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
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  return (
    <div className={theme === 'dark' ? 'bodydark' : 'bodylight'}>
      <Header />
      {popup ? <div className="popup">{popupText}</div> : ''}
      <div
        className={
          theme === 'dark'
            ? ' signupContainer signupContainerDark'
            : 'signupContainer'
        }
      >
        <form className="formContainer">
          <div id="firstColumn" className="signupFormColumn">
            <div className="formItem">
              <label
                htmlFor="firstname"
                className={theme === 'dark' ? 'formLabelDark' : 'formLabel'}
              >
                Prénom{' '}
              </label>
              <input
                className="formItemInput"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              ></input>
            </div>
            <div className="formItem">
              <label
                htmlFor="lastname"
                className={theme === 'dark' ? 'formLabelDark' : 'formLabel'}
              >
                Nom de famille{' '}
              </label>
              <input
                className="formItemInput"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              ></input>
            </div>
          </div>
          <nav
            className={
              theme === 'dark'
                ? 'separationBar separationBarDark'
                : 'separationBar'
            }
          />
          <div id="secondColumn" className="signupFormColumn">
            <div className="formItem">
              <label
                htmlFor="email"
                className={theme === 'dark' ? 'formLabelDark' : 'formLabel'}
              >
                Adresse email{' '}
              </label>
              <input
                className="formItemInput"
                type="email"
                name="email"
                id="email"
                placeholder="John.Doe@mail.com"
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
                Mot de passe{' '}
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
            <div className="formItem">
              <label
                htmlFor="confirm"
                className={theme === 'dark' ? 'formLabelDark' : 'formLabel'}
              >
                Confirmer{' '}
              </label>
              <input
                className="formItemInput"
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Mot de passe"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              ></input>
            </div>
          </div>
        </form>
        <input
          className="connectButton"
          type="submit"
          value="S'inscrire"
          theme={theme}
          onClick={() =>
            sendSignup(firstname, lastname, email, password, confirm)
          }
        />
        <Link
          to="/"
          className={
            theme === 'dark'
              ? 'signupLoginLink signupLoginLinkDark'
              : 'signupLoginLink'
          }
        >
          Déjà un compte ? Connectez-vous ici !
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
