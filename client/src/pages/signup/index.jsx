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
} from '../../utils/style/signup&login_Atoms';
//imports components created with styled-components from style.jsx
import { SignupContainer, FormColumn } from './style';

//Returns the Signup page
function Signup() {
  return (
    <div>
      <Header />
      <SignupContainer>
        <Form>
          <FormColumn id="firstColumn">
            <FormItem>
              <label for="firstname">Prénom </label>
              <FormItemInput
                type="text"
                name="firstname"
                id="firstname"
                placeholder="John"
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <label for="lastname">Nom de famille </label>
              <FormItemInput
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Doe"
              ></FormItemInput>
            </FormItem>
          </FormColumn>
          <SeparationBar />
          <FormColumn id="secondColumn">
            <FormItem>
              <label for="mail">Adresse email </label>
              <FormItemInput
                type="text"
                name="mail"
                id="mail"
                placeholder="John.Doe@mail.com"
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <label for="password">Mot de passe </label>
              <FormItemInput
                type="text"
                name="password"
                id="password"
                placeholder="Mot de passe"
              ></FormItemInput>
            </FormItem>
            <FormItem>
              <label for="confirm">Confirmer </label>
              <FormItemInput
                type="text"
                name="confirm"
                id="confirm"
                placeholder="Mot de passe"
              ></FormItemInput>
            </FormItem>
          </FormColumn>
        </Form>
        <ConnectButton type="submit" value="S'inscrire" />
        <SignupLoginLink to="/">
          Déjà un compte ? Connectez-vous ici !
        </SignupLoginLink>
      </SignupContainer>
      <Footer />
    </div>
  );
}

export default Signup;
