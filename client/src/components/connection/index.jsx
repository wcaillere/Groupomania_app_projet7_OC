import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../utils/style/colors';
import login_img from '../../assets/login_img.jpg';

const ConnectionContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 75px auto;
  height: 600px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px rgba(171, 171, 171, 0.72);
`;

const ConnectionLeft = styled.div`
  width: 50%;
`;

const ConnectionRight = styled.div`
  position: relative;
  width: 50%;
  padding: 60px;
  background: ${colors.secondary};
`;

const LoginImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  opacity: 60%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.label`
  font-size: 30px;
  font-weight: bold;
  margin-top: 30px;
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
  width: 100%;
  font-size: 36px;
  margin: 70px auto 20px auto;
  padding: 25px;
  border: none;
  border-radius: 15px;
  color: white;
  background: ${colors.primary};
  box-shadow: 2px 3px 5px 0px #9c9c9c;
`;

const SignupLink = styled(Link)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: ${colors.Tertiary};
`;

function Connection() {
  return (
    <ConnectionContainer>
      <ConnectionLeft>
        <LoginImg src={login_img} alt="login" />
      </ConnectionLeft>
      <ConnectionRight>
        <Form>
          <TitleInput>
            Adresse mail
            <FormInput
              type="text"
              name="email"
              placeholder="exemple@mail.com"
            />
          </TitleInput>
          <TitleInput>
            Mot de passe
            <FormInput
              type="text"
              name="password"
              placeholder="Entrez votre mot de passe"
            />
          </TitleInput>
          <ConnectButton type="submit" value="Se connecter" />
        </Form>
        <SignupLink to="/signup">
          Pas encore de compte ? Inscrivez-vous ici !
        </SignupLink>
      </ConnectionRight>
    </ConnectionContainer>
  );
}

export default Connection;
