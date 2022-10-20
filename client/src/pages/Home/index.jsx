import HeaderHome from '../../components/HeaderHome';
import FooterHome from '../../components/FooterHome';
import Post from '../../components/post';
import CreatePost from '../../components/CreatePost';
import PopupPost from '../../components/PopupPost';
//imports components created with styled-components from style.jsx
import './home.css';
import { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns Home page
function Home() {
  const theme = useContext(ThemeContext).theme;
  const [buttonPopup, setButtonPopup] = useState(false);
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
          if (result.message) {
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            localStorage.removeItem('isAdmin');
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

  return (
    <div>
      <HeaderHome />
      <main
        className={
          theme === 'dark' ? 'mainContainer mainContainerDark' : 'mainContainer'
        }
      >
        <CreatePost />
        <div
          className={
            theme === 'dark'
              ? 'homeSeparationBar homeSeparationBarDark'
              : 'homeSeparationBar'
          }
        />
        <div>
          {allPostData.map((post) => (
            <Post
              key={`${post.id_posts}`}
              firstname={post.firstname}
              lastname={post.lastname}
              isAdmin={post.is_admin}
              date={post.date}
              content={post.content}
              imageUrl={post.image_url}
              likes={post.likes === null ? [] : post.likes.split(',')}
              setTrigger={setButtonPopup}
            />
          ))}
        </div>
        <PopupPost trigger={buttonPopup} setTrigger={setButtonPopup} />
      </main>
      <div className="clearDiv" />
      <FooterHome />
    </div>
  );
}

export default Home;
