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
import { ConnectionContainer, ConnectionLogo, FormColumn } from './style';

//Returns Login page
function Login() {
  const theme = useContext(ThemeContext).theme;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <Header />
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
                type="text"
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
                type="text"
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
        <ConnectButton type="submit" value="Se connecter" theme={theme} />
        <SignupLoginLink to="/signup">
          Pas encore de compte ? Inscrivez-vous ici !
        </SignupLoginLink>
      </ConnectionContainer>
      <Footer />
    </div>
  );
}

export default Login;
