import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import {
  Form,
  FormItem,
  FormItemInput,
  ConnectButton,
  SeparationBar,
  SignupLoginLink,
} from '../../utils/style/signup&login_Atoms';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 20px 20px 20px;
  background: ${colors.secondary};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px rgba(171, 171, 171, 0.72);
  @media (min-width: 768px) {
    padding: 40px 2% 20px 2%;
  }
`;

const FormColumn = styled.div`
  @media (min-width: 768px) {
    width: 45%;
    padding-top: ${(props) => (props.id === 'firstColumn' ? '80px' : '20px')};
  }
`;

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
