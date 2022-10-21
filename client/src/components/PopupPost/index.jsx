import test from '../../assets/test.jpg';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';
import '../post/post.css';
import './popupPost.css';

//Returns The Post as a popup when the user wants to modify it
function PopupPost(props) {
  const theme = useContext(ThemeContext).theme;

  return props.trigger ? (
    <div className="popupContainer">
      <div
        className={
          'selectedPostContainer ' +
          (theme === 'dark' ? 'selectedPostContainerDark' : '')
        }
      >
        <div className="postHeader">
          <div className="postDescrition">
            <div className="postinitial">F</div>
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
                Fred Doe
              </div>
              <div className="postDate">15/04/2012</div>
            </div>
          </div>
        </div>
        <button
          onClick={() => props.setTrigger(false)}
          className={
            'popupCloseButton ' +
            (theme === 'dark' ? 'popupCloseButtonDark' : '')
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
