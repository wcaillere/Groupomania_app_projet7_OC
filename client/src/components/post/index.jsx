import colors from '../../utils/style/colors';
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
          <Postinitial>{props.firstname[0]}</Postinitial>
          <PostDetails theme={theme}>
            <PostAuthor
              isAdmin={props.isAdmin}
            >{`${props.firstname} ${props.lastname[0]}.`}</PostAuthor>
            <PostDate>15/04/2012</PostDate>
          </PostDetails>
          {props.isAdmin ? (
            <i
              className="fa-solid fa-shield-halved fa-lg"
              style={{
                color: `${theme === 'dark' ? 'white' : colors.primary}`,
                marginRight: '50px',
              }}
            ></i>
          ) : (
            ''
          )}
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
        {props.likes.length}
        <PostLikeIcon>
          <i className="fa-solid fa-thumbs-up fa-xl"></i>
        </PostLikeIcon>
      </PostLike>
      <PostContent theme={theme}>{props.content}</PostContent>
      <PostImage src={props.imageUrl}></PostImage>
    </PostContainer>
  );
}

export default Post;
