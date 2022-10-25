import { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../utils/context/index';
import '../post/post.css';
import './popupPost.css';

//Returns The Post as a popup when the user wants to modify it
function PopupPost(props) {
  const theme = useContext(ThemeContext).theme;
  const [postData, setPostData] = useState({});
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${props.idPost}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setPostData(result[0]);
          setContent(result[0].content);
        },
        (error) => {
          console.log(error);
        }
      );
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
                {`${postData.firstname} ${postData.lastname[0]}.`}
              </div>
              <div className="postDate">{postData.date}</div>
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
          id="PopupText"
          name="PopupText"
          rows={3}
          required
          className="popupContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        {postData.image_url === null ? (
          ''
        ) : (
          <img
            className="postImage"
            src={postData.image_url}
            alt="illustration du post"
          />
        )}
      </div>
    </div>
  ) : (
    ''
  );
}

export default PopupPost;
