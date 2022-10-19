import colors from '../../utils/style/colors';
import test from '../../assets/test.jpg';
//imports components created with styled-components from style.jsx of Post component
import '../post/style.css';
//imports components created with styled-components from style.jsx of Post component
import './style.css';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns The Post as a popup when the user wants to modify it
function PopupPost(props) {
  const theme = useContext(ThemeContext).theme;

  return props.trigger ? (
    <div className="popupContainer">
      <div
        className={
          theme === 'dark'
            ? 'selectedPostContainer selectedPostContainerDark'
            : 'selectedPostContainer'
        }
      >
        <div className="postHeader">
          <div className="postDescrition">
            <div className="postinitial">F</div>
            <div
              className={
                theme === 'dark' ? 'postDetails postDetailsDark' : 'postDetails'
              }
            >
              <div
                className={
                  theme === 'dark' ? 'postAuthor postAuthorDark' : 'postAuthor'
                }
              >
                Fred Doe
              </div>
              <div className="postDate">15/04/2012</div>
            </div>
            <i
              className="fa-solid fa-shield-halved fa-lg"
              style={{
                color: `${theme === 'dark' ? 'white' : colors.primary}`,
              }}
            ></i>
          </div>
        </div>
        <button
          onClick={() => props.setTrigger(false)}
          className={
            theme === 'dark'
              ? 'popupCloseButton popupCloseButtonDark'
              : 'popupCloseButton'
          }
        >
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </button>
        <textarea rows={3} className="popupContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex.
        </textarea>
        <img className="postImage" src={test} alt="illustration du post"></img>
      </div>
    </div>
  ) : (
    ''
  );
}

export default PopupPost;
