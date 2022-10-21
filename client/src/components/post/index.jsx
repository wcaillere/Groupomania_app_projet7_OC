//imports components created with styled-components from style.jsx
import './post.css';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns one Post, created from informations of the DataBase
function Post(props) {
  const theme = useContext(ThemeContext).theme;

  function ManageLike(e) {
    if (e.currentTarget.classList.contains('postLikeIconLiked')) {
      e.currentTarget.classList.remove('postLikeIconLiked');
      e.currentTarget.previousSibling.innerHTML =
        parseInt(e.currentTarget.previousSibling.innerHTML) - 1;
    } else {
      e.currentTarget.classList.add('postLikeIconLiked');
      e.currentTarget.previousSibling.innerHTML =
        parseInt(e.currentTarget.previousSibling.innerHTML) + 1;
    }
  }

  return (
    <div
      className={
        theme === 'dark' ? 'postContainer postContainerDark' : 'postContainer'
      }
    >
      <div className="postHeader">
        <div className="postDescrition">
          <div className="postinitial">{props.firstname[0]}</div>
          <div
            className={
              theme === 'dark' ? 'postDetails postDetailsDark' : 'postDetails'
            }
          >
            <div
              className={
                props.isAdmin
                  ? theme === 'dark'
                    ? 'postAuthor postAuthorDark postAuthorIsAdmin'
                    : 'postAuthor postAuthorIsAdmin'
                  : theme === 'dark'
                  ? 'postAuthor postAuthorDark'
                  : 'postAuthor'
              }
            >{`${props.firstname} ${props.lastname[0]}.`}</div>
            <div className="postDate">{props.date}</div>
          </div>
          {props.isAdmin ? (
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
                marginRight: '50px',
              }}
            ></i>
          ) : (
            ''
          )}
        </div>
        {localStorage.getItem('isAdmin') === '1' ||
        localStorage.getItem('user').split(' ')[0] === `${props.userId}` ? (
          <div>
            <button
              onClick={() => props.setTrigger(true)}
              className="postButton"
            >
              <i className="fa-solid fa-arrow-rotate-right"></i>
              <span className="postButtonText">Modifier</span>
            </button>
            <button className="postButton">
              <i className="fa-solid fa-trash-can"></i>
              <span className="postButtonText">Supprimer</span>
            </button>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className={theme === 'dark' ? 'postLike postLikeDark' : 'postLike'}>
        <div>{props.likes.length}</div>
        <div
          className={
            'postLikeIcon ' +
            (props.likes.includes(localStorage.getItem('user').split(' ')[0])
              ? 'postLikeIconLiked'
              : '')
          }
          onClick={(e) => {
            ManageLike(e);
          }}
        >
          <i className="fa-solid fa-thumbs-up fa-xl"></i>
        </div>
      </div>
      <div
        className={
          theme === 'dark' ? 'postContent postContentDark' : 'postContent'
        }
      >
        {props.content}
      </div>
      {props.imageUrl === null ? (
        ''
      ) : (
        <img
          className="postImage"
          src={props.imageUrl}
          alt="illustration du post"
        />
      )}
    </div>
  );
}

export default Post;
