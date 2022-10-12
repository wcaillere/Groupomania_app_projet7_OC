import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { useState } from 'react';

const CreatePostContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 550px;
  background: white;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
`;

const PostDescrition = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Postinitial = styled.div`
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

const PostAuthor = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-right: 10px;
`;

const ImageLabel = styled.label`
  font-size: 15px;
`;

const ImageInput = styled.input`
  display: none;
`;

const FormTextArea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background: #e7e7e7;
  border-radius: 10px;
  font-size: 15px;
`;

const PublishButton = styled.input`
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

function CreatePost() {
  const [picture, setPicture] = useState('Ajouter une image');

  const onChangePicture = (e) => {
    setPicture(e.target.files[0].name);
  };

  return (
    <CreatePostContainer>
      <PostDescrition>
        <Postinitial>F</Postinitial>
        <PostAuthor>Fred Doe</PostAuthor>
        <i
          className="fa-solid fa-shield-halved fa-lg"
          style={{
            color: `${colors.primary}`,
          }}
        ></i>
      </PostDescrition>
      <form id="post-form">
        <FormTextArea
          id="PostContent"
          name="PostContent"
          rows={3}
          placeholder="Partagez vos pensées..."
        ></FormTextArea>
        <ImageLabel htmlFor="image">
          <i className="fa-solid fa-image" style={{ marginRight: '8px' }}></i>
          {picture}
        </ImageLabel>
        <ImageInput
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => onChangePicture(e)}
        />
      </form>
      <PublishButton type="submit" form="post-form" value="Publiez !" />
    </CreatePostContainer>
  );
}

export default CreatePost;
