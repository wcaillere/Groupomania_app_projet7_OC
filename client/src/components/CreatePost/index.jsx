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
import { useState, useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//returns the tool used by users to create a Post
function CreatePost() {
  const theme = useContext(ThemeContext).theme;
  const [picture, setPicture] = useState('Ajouter une image (png, jpeg, jpg)');

  const onChangePicture = (e) => {
    setPicture(e.target.files[0].name);
  };

  return (
    <CreatePostContainer theme={theme}>
      <PostDescrition>
        <Postinitial>F</Postinitial>
        <PostAuthor theme={theme}>Fred Doe</PostAuthor>
        <i
          className="fa-solid fa-shield-halved fa-lg"
          style={{
            color: `${theme === 'dark' ? 'white' : colors.primary}`,
          }}
        ></i>
      </PostDescrition>
      <form id="post-form">
        <FormTextArea
          id="PostContent"
          name="PostContent"
          rows={3}
          placeholder="Partagez vos pensées..."
          theme={theme}
        ></FormTextArea>
        <ImageLabel htmlFor="image" theme={theme}>
          <i className="fa-solid fa-image" style={{ marginRight: '8px' }}></i>
          {picture}
          {picture === 'Ajouter une image (png, jpeg, jpg)' ? (
            ''
          ) : (
            <i
              class="fa-solid fa-xmark"
              style={{ marginLeft: '8px' }}
              onClick={() => setPicture('Ajouter une image (png, jpeg, jpg)')}
            ></i>
          )}
        </ImageLabel>
        <ImageInput
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => onChangePicture(e)}
        />
      </form>
      <PublishButton
        type="submit"
        form="post-form"
        value="Publiez !"
        theme={theme}
      />
    </CreatePostContainer>
  );
}

export default CreatePost;
