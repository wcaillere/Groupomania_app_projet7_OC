import { useState, useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';
import './createPost.css';

//returns the component used by users to create a Post
function CreatePost() {
  const theme = useContext(ThemeContext).theme;
  const [picture, setPicture] = useState('Ajouter une image (png, jpeg, jpg)');
  const onChangePicture = (e) => {
    setPicture(e.target.files[0].name);
  };

  return (
    <div
      className={
        'createPostContainer ' +
        (theme === 'dark' ? 'createPostContainerDark' : '')
      }
    >
      {/* Header of the CreationPost component */}
      <div className="createPostDescription">
        <div className="createPostInitial">
          {localStorage.getItem('user').split(' ')[1][0]}
        </div>
        <div
          className={
            'createPostAuthor ' +
            (theme === 'dark' ? 'createPostAuthorDark' : '')
          }
        >
          {`${localStorage.getItem('user').split(' ')[1]} ${
            localStorage.getItem('user').split(' ')[2][0]
          }.`}
        </div>
      </div>
      {/* Form of the CreationPost component */}
      <form id="post-form">
        <textarea
          id="PostContent"
          name="PostContent"
          rows={3}
          placeholder="Partagez vos pensées..."
          className={
            'createPostFormTextArea ' +
            (theme === 'dark' ? 'createPostFormTextAreaDark' : '')
          }
        ></textarea>
        <label
          htmlFor="image"
          className={
            'createPostImageLabel ' +
            (theme === 'dark' ? 'createPostImageLabelDark' : '')
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
