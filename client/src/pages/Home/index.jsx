import HeaderHome from '../../components/HeaderHome';
import FooterHome from '../../components/FooterHome';
import Post from '../../components/post';
import CreatePost from '../../components/CreatePost';
import PopupPost from '../../components/PopupPost';
//imports components created with styled-components from style.jsx
import { MainContainer, SeparationBar, ClearDiv } from './style';
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
            window.location.href = `./`;
          }
          setAllPostData(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div>
      <HeaderHome />
      <MainContainer theme={theme}>
        <CreatePost />
        <SeparationBar theme={theme} />
        <div>
          {allPostData.map((post) => (
            <Post
              key={`${post.id_posts}`}
              firstname={post.firstname}
              lastname={post.lastname}
              isAdmin={post.is_admin}
              content={post.content}
              imageUrl={post.image_url}
              likes={post.likes === null ? [] : post.likes.split(',')}
            />
          ))}
        </div>
        <PopupPost trigger={buttonPopup} setTrigger={setButtonPopup} />
      </MainContainer>
      <ClearDiv />
      <FooterHome />
    </div>
  );
}

export default Home;
