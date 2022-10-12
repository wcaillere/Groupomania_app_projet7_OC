import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Logo from '../../assets/logo_red.svg';
//imports shared components with Signup page, created with styled-components from signup&login_Atoms.jsx
import {
  Form,
  FormItem,
  FormItemInput,
  ConnectButton,
  SeparationBar,
  SignupLoginLink,
} from '../../utils/style/signup&login_Atoms';
//imports components created with styled-components from style.jsx
import { ConnectionContainer, ConnectionLogo, FormColumn } from './style';

//Returns Login page
function Login() {
  return (
    <div>
      <Header />
      <ConnectionContainer>
        <Form>
          <FormColumn>
            <ConnectionLogo src={Logo} alt="Logo groupomania"></ConnectionLogo>
          </FormColumn>
          <SeparationBar />
          <FormColumn>
            <FormItem>
              <label htmlFor="mail">Adresse email </label>
              <FormItemInput
                type="text"
                name="mail"
                id="mail"
                placeholder="exemple@mail.com"
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <label htmlFor="password">Mot de passe </label>
              <FormItemInput
                type="text"
                name="password"
                id="password"
                placeholder="Mot de passe"
              ></FormItemInput>
            </FormItem>
          </FormColumn>
        </Form>
        <ConnectButton type="submit" value="Se connecter" />
        <SignupLoginLink to="/signup">
          Pas encore de compte ? Inscrivez-vous ici !
        </SignupLoginLink>
      </ConnectionContainer>
      <Footer />
    </div>
  );
}

export default Login;
