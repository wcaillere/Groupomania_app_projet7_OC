import colors from '../../utils/style/colors';
import test from '../../assets/test.jpg';
//imports components created with styled-components from style.jsx
import {
  PostContainer,
  PostHeader,
  PostDescrition,
  Postinitial,
  PostDetails,
  PostAuthor,
  PostDate,
  PostButton,
  PostButtonText,
  PostLike,
  PostLikeIcon,
  PostContent,
  PostImage,
} from './style';
import { useContext } from 'react';
import { ThemeContext } from '../../utils/context/index';

//Returns one Post, created from informations of the DataBase
function Post(props) {
  const theme = useContext(ThemeContext).theme;

  return (
    <PostContainer theme={theme}>
      <PostHeader>
        <PostDescrition>
          <Postinitial>F</Postinitial>
          <PostDetails theme={theme}>
            <PostAuthor>Fred Doe</PostAuthor>
            <PostDate>15/04/2012</PostDate>
          </PostDetails>
          <i
            className="fa-solid fa-shield-halved fa-lg"
            style={{
              color: `${theme === 'dark' ? 'white' : colors.primary}`,
            }}
          ></i>
        </PostDescrition>
        <PostButton onClick={() => props.setTrigger(true)} theme={theme}>
          <i className="fa-solid fa-arrow-rotate-right"></i>
          <PostButtonText>Modifier</PostButtonText>
        </PostButton>
        <PostButton theme={theme}>
          <i className="fa-solid fa-trash-can"></i>
          <PostButtonText>Supprimer</PostButtonText>
        </PostButton>
      </PostHeader>
      <PostLike theme={theme}>
        8
        <PostLikeIcon>
          <i className="fa-solid fa-thumbs-up fa-xl"></i>
        </PostLikeIcon>
      </PostLike>
      <PostContent theme={theme}>
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex.
      </PostContent>
      <PostImage src={test}></PostImage>
    </PostContainer>
  );
}

export default Post;
