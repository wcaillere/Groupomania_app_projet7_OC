//imports components created with styled-components from style.jsx
import './style.css';
//imports colors and useState utils
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
    <div
      className={
        theme === 'dark'
          ? 'createPostContainer createPostContainerDark'
          : 'createPostContainer'
      }
    >
      <div className="createPostDescription">
        <div className="createPostInitial">F</div>
        <div
          className={
            theme === 'dark'
              ? 'createPostAuthor createPostAuthorDark'
              : 'createPostAuthor'
          }
        >
          Fred Doe
        </div>
        <i
          className="fa-solid fa-shield-halved fa-lg"
          style={{
            color: `${
              theme === 'dark'
                ? 'white'
                : `${getComputedStyle(document.body).getPropertyValue(
                    '--primary'
                  )}`
            }`,
          }}
        ></i>
      </div>
      <form id="post-form">
        <textarea
          id="PostContent"
          name="PostContent"
          rows={3}
          placeholder="Partagez vos pensées..."
          className={
            theme === 'dark'
              ? 'createPostFormTextArea createPostFormTextAreaDark'
              : 'createPostFormTextArea'
          }
        ></textarea>
        <label
          htmlFor="image"
          className={
            theme === 'dark'
              ? 'createPostImageLabel createPostImageLabelDark'
              : 'createPostImageLabel'
          }
        >
          <i className="fa-solid fa-image" style={{ marginRight: '8px' }}></i>
          {picture}
          {picture === 'Ajouter une image (png, jpeg, jpg)' ? (
            ''
          ) : (
            <i
              className="fa-solid fa-xmark"
              style={{ marginLeft: '8px' }}
              onClick={() => setPicture('Ajouter une image (png, jpeg, jpg)')}
            ></i>
          )}
        </label>
        <input
          className="createPostImageInput"
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => onChangePicture(e)}
        />
      </form>
      <input
        type="submit"
        form="post-form"
        value="Publiez !"
        className="createPostPublishButton"
      />
    </div>
  );
}

export default CreatePost;
