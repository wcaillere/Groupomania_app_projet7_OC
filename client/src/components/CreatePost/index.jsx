import styled from 'styled-components';

const CreatePostContainer = styled.div`
  width: 90%;
  max-width: 600px;
  background: white;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
`;

function CreatePost() {
  return <CreatePostContainer>Test</CreatePostContainer>;
}

export default CreatePost;
