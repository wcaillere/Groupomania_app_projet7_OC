import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CreatePostContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 500px;
  background: white;
  margin: 20px auto;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
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
  margin-right: 10px;
`;

const ImageInput = styled.input`
  margin-bottom: 10px;
`;

const FormTextArea = styled.textarea`
  border: none;
  resize: none;
  width: 100%;
  padding: 10px;
  background: #e7e7e7;
  border-radius: 10px;
  font-size: 15px;
`;

const PublishButton = styled.input`
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 12px 20px;
  border: none;
  border-radius: 15px;
  color: white;
  background: ${colors.primary};
`;

function CreatePost() {
  return (
    <CreatePostContainer>
      <PostDescrition>
        <Postinitial>F</Postinitial>
        <PostAuthor>Fred Doe</PostAuthor>
        <i
          class="fa-solid fa-shield-halved fa-lg"
          style={{
            color: `${colors.primary}`,
          }}
        ></i>
      </PostDescrition>
      <form>
        <label for="file">Ajouter une image</label>
        <ImageInput
          type="file"
          id="file"
          name="image"
          accept="image/png, image/jpeg, image/jpeg"
        />
        <FormTextArea
          id="txtid"
          name="txtname"
          rows={4}
          placeholder="Partagez vos pensées..."
        ></FormTextArea>
      </form>
      <PublishButton type="submit" value="Publier !" />
    </CreatePostContainer>
  );
}

export default CreatePost;
