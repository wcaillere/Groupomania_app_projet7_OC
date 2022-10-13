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
} from '../../utils/style/signup&login_Atoms';
//imports components created with styled-components from style.jsx
import { SignupContainer, FormColumn } from './style';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns the Signup page
function Signup() {
  const theme = useContext(ThemeContext).theme;
  return (
    <div>
      <Header />
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
              ></FormItemInput>
            </FormItem>
          </FormColumn>
          <SeparationBar theme={theme} />
          <FormColumn id="secondColumn">
            <FormItem>
              <FormLabel htmlFor="mail" theme={theme}>
                Adresse email{' '}
              </FormLabel>
              <FormItemInput
                type="text"
                name="mail"
                id="mail"
                placeholder="John.Doe@mail.com"
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="password" theme={theme}>
                Mot de passe{' '}
              </FormLabel>
              <FormItemInput
                type="text"
                name="password"
                id="password"
                placeholder="Mot de passe"
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <FormLabel htmlFor="confirm" theme={theme}>
                Confirmer{' '}
              </FormLabel>
              <FormItemInput
                type="text"
                name="confirm"
                id="confirm"
                placeholder="Mot de passe"
              ></FormItemInput>
            </FormItem>
          </FormColumn>
        </Form>
        <ConnectButton type="submit" value="S'inscrire" theme={theme} />
        <SignupLoginLink to="/">
          Déjà un compte ? Connectez-vous ici !
        </SignupLoginLink>
      </SignupContainer>
      <Footer />
    </div>
  );
}

export default Signup;
