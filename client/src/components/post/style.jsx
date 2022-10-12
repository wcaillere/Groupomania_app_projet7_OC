import styled from 'styled-components';
import colors from '../../utils/style/colors';

export const PostContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 550px;
  background: white;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
`;

export const PostHeader = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const PostDescrition = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Postinitial = styled.div`
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

export const PostDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 12px;
`;

export const PostAuthor = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const PostDate = styled.div`
  font-size: 12px;
`;

export const PostButton = styled.button`
  border: none;
  color: white;
  padding: 10px;
  margin: 0px 15px 15px 0px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
  background: ${colors.primary};
  @media (min-width: 768px) {
    margin: 0px 0px 15px 20px;
  }
  :hover {
    cursor: pointer;
  }
`;

export const PostButtonText = styled.span`
  margin-left: 10px;
  font-weight: bold;
`;

export const PostContent = styled.div`
  font-size: 14px;
  text-align: justify;
`;

export const PostLike = styled.div`
  display: flex;
  position: absolute;
  top: 12px;
  right: 12px;
`;

export const PostLikeIcon = styled.div`
  margin-left: 5px;
`;

export const PostImage = styled.img`
  display: flex;
  width: 100%;
  justify-content: center;
  border-radius: 10px;
  margin: 15px auto 0px auto;
`;
