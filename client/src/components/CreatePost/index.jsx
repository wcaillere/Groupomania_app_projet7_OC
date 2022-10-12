//imports components created with styled-components from style.jsx
import {
  CreatePostContainer,
  PostDescrition,
  Postinitial,
  PostAuthor,
  ImageInput,
  ImageLabel,
  FormTextArea,
  PublishButton,
} from './style';
//imports colors and useState utils
import colors from '../../utils/style/colors';
import { useState } from 'react';

//returns the tool used by users to create a Post
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