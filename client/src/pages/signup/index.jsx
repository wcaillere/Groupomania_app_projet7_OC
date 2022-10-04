import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const SignupContainer = styled.div`
  display: flex;
  width: 60%;
  margin: 75px auto;
  height: 600px;
  background: ${colors.secondary};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 2px 5px 15px 0px rgba(171, 171, 171, 0.72);
`;

function Signup() {
  return (
    <div>
      <Header />
      <SignupContainer />
      <Footer />
    </div>
  );
}

export default Signup;
