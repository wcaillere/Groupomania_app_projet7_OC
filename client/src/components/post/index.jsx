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

//Returns one Post, created from informations of the DataBase
function Post(props) {
  return (
    <PostContainer>
      <PostHeader>
        <PostDescrition>
          <Postinitial>F</Postinitial>
          <PostDetails>
            <PostAuthor>Fred Doe</PostAuthor>
            <PostDate>15/04/2012</PostDate>
          </PostDetails>
          <i
            className="fa-solid fa-shield-halved fa-lg"
            style={{
              color: `${colors.primary}`,
            }}
          ></i>
        </PostDescrition>
        <PostButton onClick={() => props.setTrigger(true)}>
          <i className="fa-solid fa-arrow-rotate-right"></i>
          <PostButtonText>Modifier</PostButtonText>
        </PostButton>
        <PostButton>
          <i className="fa-solid fa-trash-can"></i>
          <PostButtonText>Supprimer</PostButtonText>
        </PostButton>
      </PostHeader>
      <PostLike>
        8
        <PostLikeIcon>
          <i className="fa-solid fa-thumbs-up fa-xl"></i>
        </PostLikeIcon>
      </PostLike>
      <PostContent>
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
