import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../utils/context/index';
//Import styles from popupPost css for uniques styles, from post css for informations of the post, and from Create Post css for the input file style
import './popupPost.css';
import '../post/post.css';
import '../CreatePost/createPost.css';

/**
 *Returns the post as a popup when the user wants to modify it
 * @param {object} props
 * @returns {React.ReactElement}
 */
function PopupPost(props) {
  const theme = useContext(ThemeContext).theme;
  //State to stock data asked to the API with the getOnePost route
  const [postData, setPostData] = useState({});
  //States to stock inputs' values and update them
  const [content, setContent] = useState('');
  const [fileContent, setFileContent] = useState('pas de changement');
  //State to update name of the choosen image if there is one
  const [picture, setPicture] = useState('Ajouter une image (png, jpeg, jpg)');
  //If the image is added or modified
  const onChangePicture = (e) => {
    setFileContent(e.target.files[0]);
    setPicture(e.target.files[0].name);
  };
  //If the image is deleted
  const onCancelPicture = () => {
    setPicture('Ajouter une image (png, jpeg, jpg)');
    setFileContent(null);
  };

  //UseEffect allows to activate the fetch request every time the props.idPost is changed
  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${props.idPost}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //Manages the redirection to the login page if the API can't get the post due to expired session
          if (result.message) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('isAdmin');
            alert('Session expirée');
            window.location.href = `./`;
          } else {
            setPostData(result[0]);
            setContent(result[0].content);
            result[0].image_url
              ? setPicture(result[0].image_url)
              : setPicture('Ajouter une image (png, jpeg, jpg)');
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, [props.idPost]);

  /**
   * Modifies the post in the dataBase and reloads the page
   * @param {object} event
   * @param {number} idPost
   * @param {string} txtContent
   * @param {object} file
   */
  function modifyPost(event, idPost, txtContent, file) {
    event.preventDefault();

    if (document.getElementById('popupText').reportValidity()) {
      let postFormData = new FormData();
      postFormData.append('content', txtContent);
      postFormData.append('image', file);

      fetch(`http://localhost:5000/api/posts/${idPost}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: postFormData,
      })
        .then((res) => res.json())
        .then(
          (result) => {
            //Manages the redirection to the login page if the API can't modify the post due to expired session
            if (result.message === "erreur d'authentification") {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              localStorage.removeItem('isAdmin');
              alert('Session expirée');
              window.location.href = `./`;
            } else {
              console.log(result);
              props.setTrigger();
              props.reloadTrigger();
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  return props.trigger ? (
    <article
      className={
        'popupContainer ' + (theme === 'dark' ? 'popupContainerDark' : '')
      }
    >
      <div
        className={
          'selectedPostContainer ' +
          (theme === 'dark' ? 'selectedPostContainerDark' : '')
        }
      >
        {/* PopupPost Header */}
        <div>
          <div className="postDescrition">
            <div className="postinitial">{postData.firstname[0]}</div>
            <div
              className={
                'postDetails ' + (theme === 'dark' ? 'postDetailsDark' : '')
              }
            >
              <div
                className={
                  'postAuthor ' + (theme === 'dark' ? 'postAuthorDark' : '')
                }
              >
                {`${postData.firstname} ${postData.lastname[0]}.`}
              </div>
              <div className="postDate">{postData.date}</div>
            </div>
          </div>
        </div>
        {/* PopupPost Close button */}
        <i
          className={
            'fa-solid fa-xmark fa-xl popupCloseButton ' +
            (theme === 'dark' ? 'popupCloseButtonDark' : '')
          }
          onClick={() => {
            if (postData.image_url) {
              setPicture(postData.image_url);
            }
            props.setTrigger(false);
          }}
        ></i>
        {/* PopupPost Form */}
        <form id="modify-form">
          <textarea
            id="popupText"
            name="popupText"
            rows={5}
            required
            className="popupContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <label
            htmlFor="popupImage"
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
                'fa-solid fa-xmark cross ' +
                (theme === 'dark' ? 'crossDark' : '')
              }
              onClick={() => onCancelPicture()}
            ></i>
          )}
          <input
            className="createPostImageInput"
            type="file"
            id="popupImage"
            name="popupImage"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => onChangePicture(e)}
          />
        </form>
        <input
          type="submit"
          form="modify-form"
          value="Modifiez !"
          className="popupPublishButton"
          onClick={(e) =>
            modifyPost(e, postData.id_posts, content, fileContent)
          }
        />
      </div>
    </article>
  ) : (
    ''
  );
}

export default PopupPost;
