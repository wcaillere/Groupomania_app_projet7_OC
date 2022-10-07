import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FormColumn = styled.div`
  @media (min-width: 768px) {
    width: 45%;
    padding-top: ${(props) => (props.id === 'firstColumn' ? '80px' : '20px')};
  }
`;

const FormItem = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const FormItemInput = styled.input`
  display: block;
  width: 100%;
  margin-top: 20px;
  border: none;
  border-radius: 15px;
  font-size: 20px;
  padding: 16px;
  ::placeholder {
    color: ${colors.Tertiary};
    font-weight: bold;
    opacity: 80%;
  }
`;

const ConnectButton = styled.input`
  width: 80%;
  max-width: 250px;
  font-size: 25px;
  margin: 20px auto;
  padding: 20px;
  border: none;
  border-radius: 15px;
  color: white;
  background: ${colors.primary};
  box-shadow: 2px 3px 5px 0px #9c9c9c;
`;

const SignupLink = styled(Link)`
  margin: 10px auto;
  color: ${colors.Tertiary};
  font-weight: bold;
  text-align: center;
`;

const SeparationBar = styled.nav`
  display: none;
  border: 2px solid ${colors.primary};
  @media (min-width: 768px) {
    display: flex;
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
        <SignupLink to="/">Déjà un compte ? Connectez-vous ici !</SignupLink>
      </SignupContainer>
      <Footer />
    </div>
  );
}

export default Signup;
