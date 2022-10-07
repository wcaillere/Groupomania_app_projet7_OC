import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors';

const ConnectionContainer = styled.div`
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
    padding: 40px 40px 20px 40px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
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

function Connection() {
  return (
    <ConnectionContainer>
      <Form>
        <FormItem>
          <label for="mail">Adresse email </label>
          <FormItemInput
            type="text"
            name="mail"
            id="mail"
            placeholder="exemple@mail.com"
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
        <ConnectButton type="submit" value="Se connecter" />
      </Form>
      <SignupLink to="/signup">
        Pas encore de compte ? Inscrivez-vous ici !
      </SignupLink>
    </ConnectionContainer>
  );
}

export default Connection;
