import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const CreatePostContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 550px;
  background: white;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const PostDescrition = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Postinitial = styled.div`
  display: flex;
  background: ${colors.secondary};
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const PostAuthor = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;

export const ImageLabel = styled.label`
  font-size: 15px;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const FormTextArea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #e7e7e7;
  border-radius: 10px;
  font-size: 15px;
`;

export const PublishButton = styled.input`
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 12px 25px;
  border: none;
  border-radius: 10px;
  color: white;
  background: ${colors.primary};
  font-weight: bold;
  font-size: 14px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  :hover {
    cursor: pointer;
  }
`;
