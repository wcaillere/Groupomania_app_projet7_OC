import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { Link } from 'react-router-dom';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 40px 20px 20px 20px;
  background: ${colors.secondary};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px rgba(171, 171, 171, 0.72);
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
  }
`;

const TitleInput = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 50px;
`;

const FormInput = styled.input`
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

function Signup() {
  return (
    <div>
      <Header />
      <SignupContainer>
        <Form>
          <FormColumn>
            <TitleInput>
              Prénom
              <FormInput
                type="text"
                name="firstname"
                placeholder="John"
              ></FormInput>
            </TitleInput>
            <TitleInput>
              Nom de famille
              <FormInput
                type="text"
                name="lastname"
                placeholder="Doe"
              ></FormInput>
            </TitleInput>
          </FormColumn>
          <FormColumn>
            <TitleInput>
              Adresse email
              <FormInput
                type="text"
                name="mail"
                placeholder="John.Doe@mail.com"
              ></FormInput>
            </TitleInput>
            <TitleInput>
              Mot de passe
              <FormInput
                type="text"
                name="password"
                placeholder="Mot de passe"
              ></FormInput>
            </TitleInput>
            <TitleInput>
              Confirmer
              <FormInput
                type="text"
                name="confirm"
                placeholder="Mot de passe"
              ></FormInput>
            </TitleInput>
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
