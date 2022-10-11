import styled from 'styled-components';
import colors from '../../utils/style/colors';
import test from '../../assets/test.jpg';

const PostContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 550px;
  background: white;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
`;

const PostHeader = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

const PostDescrition = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Postinitial = styled.div`
  display: flex;
  background: ${colors.secondary};
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50px;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

const PostAuthor = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const PostDate = styled.div`
  font-size: 13px;
`;

const ButtonModify = styled.button`
  border: none;
  color: white;
  padding: 10px;
  margin: 0px 15px 15px 0px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  background: ${colors.primary};
  @media (min-width: 768px) {
    margin: 0px 0px 15px 20px;
    padding: 10px 20px;
  }
`;

const PostContent = styled.div`
  font-size: 15px;
  text-align: justify;
`;

const PostLike = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  right: 12px;
`;

const PostLikeIcon = styled.div`
  margin-left: 5px;
`;

const PostImage = styled.img`
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 10px;
  margin: 15px auto 0px auto;
`;

function Post() {
  return (
    <PostContainer>
      <PostHeader>
        <PostDescrition>
          <Postinitial>F</Postinitial>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              marginRight: '12px',
            }}
          >
            <PostAuthor>Fred Doe</PostAuthor>
            <PostDate>15/04/2012</PostDate>
          </div>
          <i
            class="fa-solid fa-shield-halved fa-lg"
            style={{
              color: `${colors.primary}`,
            }}
          ></i>
        </PostDescrition>
        <ButtonModify>Modifier</ButtonModify>
        <ButtonModify>Supprimer</ButtonModify>
      </PostHeader>

      <PostContent>
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex.
      </PostContent>
      <PostLike>
        8
        <PostLikeIcon>
          <i class="fa-solid fa-thumbs-up fa-xl"></i>
        </PostLikeIcon>
      </PostLike>
      <PostImage src={test}></PostImage>
    </PostContainer>
  );
}

export default Post;
