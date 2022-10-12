import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import {
  Form,
  FormItem,
  FormItemInput,
  ConnectButton,
  SeparationBar,
  SignupLoginLink,
} from '../../utils/style/signup&login_Atoms';
import colors from '../../utils/style/colors';
import Logo from '../../assets/logo_red.svg';

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

const FormColumn = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 45%;
    padding-top: 20px;
  }
`;

const ConnectionLogo = styled.img`
  display: none;
  margin: auto;
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
  }
`;

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
