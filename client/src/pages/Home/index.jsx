//Imports components
import HeaderHome from '../../components/HeaderHome';
import FooterHome from '../../components/FooterHome';
import Post from '../../components/post';
import CreatePost from '../../components/CreatePost';
import PopupPost from '../../components/PopupPost';
//other tools
import './home.css';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns Home page
function Home() {
  const theme = useContext(ThemeContext).theme;
  //State for the popup during the modification of a post
  const [buttonPopup, setButtonPopup] = useState(false);
  const [idPostToModify, setIdPostToModify] = useState('');
  //State to stock the list of posts returned during the API call
  const [allPostData, setAllPostData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts', {
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
            setAllPostData(result);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return localStorage.getItem('token') === null ? (
    ''
  ) : (
    <div className={theme === 'dark' ? 'bodydark' : 'bodygrey'}>
      <HeaderHome />
      <main
        className={
          'mainContainer ' + (theme === 'dark' ? 'mainContainerDark' : '')
        }
      >
        <CreatePost />
        <div
          className={
            'homeSeparationBar ' +
            (theme === 'dark' ? 'homeSeparationBarDark' : '')
          }
        />
        <div>
          {allPostData.map((post) => (
            <Post
              key={`${post.id_posts}`}
              postId={post.id_posts}
              userId={post.id_users}
              firstname={post.firstname}
              lastname={post.lastname}
              isAdmin={post.is_admin}
              date={post.date}
              content={post.content}
              imageUrl={post.image_url}
              likes={post.likes === null ? [] : post.likes.split(',')}
              setTrigger={setButtonPopup}
              handlePopup={setIdPostToModify}
            />
          ))}
        </div>
        <PopupPost
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          idPost={idPostToModify}
        />
      </main>
      <div className="clearDiv" />
      <FooterHome />
    </div>
  );
}

export default Home;
