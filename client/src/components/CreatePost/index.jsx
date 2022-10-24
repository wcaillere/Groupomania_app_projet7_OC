import { useState, useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';
import './createPost.css';

//returns the component used by users to create a Post
function CreatePost() {
  const theme = useContext(ThemeContext).theme;
  const [content, setContent] = useState('');
  const [fileContent, setFileContent] = useState(null);
  const [picture, setPicture] = useState('Ajouter une image (png, jpeg, jpg)');
  const onChangePicture = (e) => {
    console.log(e.target.files[0]);
    setFileContent(e.target.files[0]);
    setPicture(e.target.files[0].name);
  };

  function publishPost(event, txtContent, file) {
    event.preventDefault();

    if (document.querySelector('textarea').reportValidity()) {
      let postFormData = new FormData();
      postFormData.append('content', txtContent);
      postFormData.append('image', file);

      fetch('http://localhost:5000/api/posts/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: postFormData,
      })
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.message === "erreur d'authentification") {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              localStorage.removeItem('isAdmin');
              window.location.href = `./`;
            } else {
              console.log(result);
              window.location.reload();
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

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
          required
          className={
            'createPostFormTextArea ' +
            (theme === 'dark' ? 'createPostFormTextAreaDark' : '')
          }
          onChange={(e) => setContent(e.target.value)}
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
        </label>
        {/* If there is a file, a button to cancel it appears */}
        {picture === 'Ajouter une image (png, jpeg, jpg)' ? (
          ''
        ) : (
          <i
            className={
              'fa-solid fa-xmark cross ' + (theme === 'dark' ? 'crossDark' : '')
            }
            onClick={() => {
              setPicture('Ajouter une image (png, jpeg, jpg)');
              setFileContent(null);
            }}
          ></i>
        )}
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
        onClick={(e) => publishPost(e, content, fileContent)}
      />
    </div>
  );
}

export default CreatePost;
