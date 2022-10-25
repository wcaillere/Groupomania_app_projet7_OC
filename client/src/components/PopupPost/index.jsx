import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../utils/context/index';
import '../post/post.css';
import './popupPost.css';

//Returns The Post as a popup when the user wants to modify it
function PopupPost(props) {
  const theme = useContext(ThemeContext).theme;
  const [postData, setPostData] = useState({});
  const [content, setContent] = useState('');
  const [fileContent, setFileContent] = useState(null);
  const [picture, setPicture] = useState('Ajouter une image (png, jpeg, jpg)');
  const onChangePicture = (e) => {
    setFileContent(e.target.files[0]);
    setPicture(e.target.files[0].name);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${props.idPost}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //if the session is expired, the localStorage is cleaned and the user is redirected on the login Page
          if (result.message) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('isAdmin');
            alert('Session expirée');
            window.location.href = `./`;
          } else {
            console.log(result);
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
            if (result.message === "erreur d'authentification") {
              localStorage.removeItem('token');
              localStorage.removeItem('user');
              localStorage.removeItem('isAdmin');
              alert('Session expirée');
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

  return props.trigger ? (
    <div
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
        <div className="postHeader">
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
              onClick={() => {
                setPicture('Ajouter une image (png, jpeg, jpg)');
                setFileContent(null);
              }}
            ></i>
          )}
          <input
            className="createPostImageInput"
            type="file"
            id="popupImage"
            name="image"
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
    </div>
  ) : (
    ''
  );
}

export default PopupPost;
