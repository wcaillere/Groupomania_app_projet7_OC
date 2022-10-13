import colors from '../../utils/style/colors';
import test from '../../assets/test.jpg';
//imports components created with styled-components from style.jsx of Post component
import {
  PostContainer,
  PostHeader,
  PostDescrition,
  Postinitial,
  PostDetails,
  PostAuthor,
  PostDate,
  PostImage,
} from '../post/style';
//imports components created with styled-components from style.jsx of Post component
import { PopupContainer, PopupCloseButton, PopupContent } from './style';

//Returns The Post as a popup when the user wants to modify it
function PopupPost(props) {
  return props.trigger ? (
    <PopupContainer>
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
        </PostHeader>
        <PopupCloseButton onClick={() => props.setTrigger(false)}>
          <i class="fa-solid fa-xmark fa-2xl"></i>
        </PopupCloseButton>
        <PopupContent rows={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex.
        </PopupContent>
        <PostImage src={test}></PostImage>
      </PostContainer>
    </PopupContainer>
  ) : (
    ''
  );
}

export default PopupPost;
