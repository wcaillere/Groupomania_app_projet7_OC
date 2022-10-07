import colors from './colors';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FormItem = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const FormItemInput = styled.input`
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

export const ConnectButton = styled.input`
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
  transition: all 0.3s;
  :hover {
    cursor: pointer;
    box-shadow: 2px 4px 10px 2px #9c9c9c;
  }
`;

export const SeparationBar = styled.nav`
  display: none;
  border: 2px solid ${colors.primary};
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const SignupLoginLink = styled(Link)`
  margin: 10px auto;
  color: ${colors.Tertiary};
  font-weight: bold;
  text-align: center;
`;
