import test from '../../assets/test.jpg';
import { useContext, useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../../utils/context/index';
import '../post/post.css';
import './popupPost.css';

//Returns The Post as a popup when the user wants to modify it
function PopupPost(props) {
  const theme = useContext(ThemeContext).theme;
  const [postData, setPostData] = useState('');
  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      fetch(`http://localhost:5000/api/posts/${props.idPost}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result[0]);
            setPostData(result[0]);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }, [props.idPost]);

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
        <textarea
          rows={3}
          className="popupContent"
          defaultValue={postData.content}
        ></textarea>
        <img className="postImage" src={test} alt="illustration du post"></img>
      </div>
    </div>
  ) : (
    ''
  );
}

export default PopupPost;
