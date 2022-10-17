import { useContext, useState } from 'react';
import { ThemeContext } from '../../utils/context/index';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LogoRed from '../../assets/logo_red.svg';
import LogoWhite from '../../assets/logo_white.svg';
//imports shared components with Signup page, created with styled-components from signup&login_Atoms.jsx
import {
  Form,
  FormItem,
  FormItemInput,
  ConnectButton,
  SeparationBar,
  SignupLoginLink,
  FormLabel,
} from '../../utils/style/signup&login_Atoms';
//imports components created with styled-components from style.jsx
import {
  ConnectionContainer,
  ConnectionLogo,
  FormColumn,
  BadLoginPoppup,
} from './style';

//Returns Login page
function Login() {
  const theme = useContext(ThemeContext).theme;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(true);

  function sendLogin(emailInput, passwordInput) {
    setSuccess(true);
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
              setSuccess(false);
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

  return (
    <div>
      <Header />
      {success ? (
        ''
      ) : (
        <BadLoginPoppup>Paire email/mot de passe invalide !</BadLoginPoppup>
      )}
      <ConnectionContainer theme={theme}>
        <Form>
          <FormColumn>
            <ConnectionLogo
              src={theme === 'dark' ? LogoWhite : LogoRed}
              alt="Logo groupomania"
            ></ConnectionLogo>
          </FormColumn>
          <SeparationBar theme={theme} />
          <FormColumn>
            <FormItem>
              <FormLabel htmlFor="email" theme={theme}>
                Adresse email
              </FormLabel>
              <FormItemInput
                type="email"
                name="email"
                id="email"
                placeholder="exemple@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="password" theme={theme}>
                Mot de passe
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
          </FormColumn>
        </Form>
        <ConnectButton
          type="submit"
          value="Se connecter"
          theme={theme}
          onClick={() => sendLogin(email, password)}
        />
        <SignupLoginLink to="/signup">
          Pas encore de compte ? Inscrivez-vous ici !
        </SignupLoginLink>
      </ConnectionContainer>
      <Footer />
    </div>
  );
}

export default Login;
