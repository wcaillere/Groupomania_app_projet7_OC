import { useContext, useState } from 'react';
import { ThemeContext } from '../../utils/context/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
//imports shared components with Login page, created with styled-components from signup&login_Atoms.jsx
import {
  Form,
  FormItem,
  FormItemInput,
  ConnectButton,
  SeparationBar,
  SignupLoginLink,
  FormLabel,
  Popup,
} from '../../utils/style/signup&login_Atoms';
//imports components created with styled-components from style.jsx
import { SignupContainer, FormColumn } from './style';

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
    <div>
      <Header />
      {popup ? <Popup>{popupText}</Popup> : ''}
      <SignupContainer theme={theme}>
        <Form>
          <FormColumn id="firstColumn">
            <FormItem>
              <FormLabel htmlFor="firstname" theme={theme}>
                Prénom{' '}
              </FormLabel>
              <FormItemInput
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                required
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="lastname" theme={theme}>
                Nom de famille{' '}
              </FormLabel>
              <FormItemInput
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required
              ></FormItemInput>
            </FormItem>
          </FormColumn>
          <SeparationBar theme={theme} />
          <FormColumn id="secondColumn">
            <FormItem>
              <FormLabel htmlFor="email" theme={theme}>
                Adresse email{' '}
              </FormLabel>
              <FormItemInput
                type="email"
                name="email"
                id="email"
                placeholder="John.Doe@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="password" theme={theme}>
                Mot de passe{' '}
              </FormLabel>
              <FormItemInput
                type="password"
                name="password"
                id="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="confirm" theme={theme}>
                Confirmer{' '}
              </FormLabel>
              <FormItemInput
                type="password"
                name="confirm"
                id="confirm"
                placeholder="Mot de passe"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              ></FormItemInput>
            </FormItem>
          </FormColumn>
        </Form>
        <ConnectButton
          type="submit"
          value="S'inscrire"
          theme={theme}
          onClick={() =>
            sendSignup(firstname, lastname, email, password, confirm)
          }
        />
        <SignupLoginLink to="/" theme={theme}>
          Déjà un compte ? Connectez-vous ici !
        </SignupLoginLink>
      </SignupContainer>
      <Footer />
    </div>
  );
}

export default Signup;
