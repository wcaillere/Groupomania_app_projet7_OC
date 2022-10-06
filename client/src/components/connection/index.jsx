import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors';

const ConnectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  padding: 20px;
  height: 600px;
  background: ${colors.secondary};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px rgba(171, 171, 171, 0.72);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.label`
  font-size: 25px;
  font-weight: bold;
  margin-top: 50px;
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
  margin: 70px auto 20px auto;
  padding: 20px;
  border: none;
  border-radius: 15px;
  color: white;
  background: ${colors.primary};
  box-shadow: 2px 3px 5px 0px #9c9c9c;
`;

const SignupLink = styled(Link)`
  margin: auto;
  color: ${colors.Tertiary};
  font-weight: bold;
  text-align: center;
`;

function Connection() {
  return (
    <ConnectionContainer>
      <Form>
        <TitleInput>
          Adresse mail
          <FormInput
            type="text"
            name="mail"
            placeholder="exemple@mail.com"
          ></FormInput>
        </TitleInput>
        <TitleInput>
          Mot de passe
          <FormInput
            type="text"
            name="password"
            placeholder="mot de passe"
          ></FormInput>
        </TitleInput>
        <ConnectButton type="submit" value="Se connecter" />
      </Form>
      <SignupLink to="/signup">
        Pas encore de compte ? Inscrivez-vous ici !
      </SignupLink>
    </ConnectionContainer>
  );
}

export default Connection;
