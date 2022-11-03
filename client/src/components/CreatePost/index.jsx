/** @format */

import { useState, useContext } from "react";
import { ThemeContext } from "../../utils/context/index";
import "./createPost.css";

/**
 * returns the component used by users to create a Post
 * @returns {React.ReactElement}
 */
export default function CreatePost(props) {
  const theme = useContext(ThemeContext).theme;
  //States to stock inputs' values and update them
  const [content, setContent] = useState("");
  const [fileContent, setFileContent] = useState(null);
  //State to update name of the choosen image if there is one
  const [picture, setPicture] = useState("Ajouter une image (png, jpeg, jpg)");
  const onChangePicture = (e) => {
    setFileContent(e.target.files[0]);
    setPicture(e.target.files[0].name);
  };
  const onCancelPicture = () => {
    setPicture("Ajouter une image (png, jpeg, jpg)");
    setFileContent(null);
  };

  /**
   * Creates the post in the dataBase and reloads the page
   * @param {object} event
   * @param {string} txtContent
   * @param {object} file
   */
  function publishPost(event, txtContent, file) {
    //Prevents the default refresh page action with a submit button
    event.preventDefault();

    if (document.querySelector("textarea").reportValidity()) {
      let postFormData = new FormData();
      postFormData.append("content", txtContent);
      postFormData.append("image", file);

      fetch("http://localhost:5000/api/posts/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: postFormData,
      })
        .then((res) => res.json())
        .then(
          (result) => {
            //Manages the redirection to the login page if the API can't create the post due to expired session
            if (result.message === "erreur d'authentification") {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("isAdmin");
              alert("Session expirée");
              window.location.href = `./`;
            } else {
              console.log(result);
              //Inputs the CreationPost component are reset
              setContent("");
              setPicture("Ajouter une image (png, jpeg, jpg)");
              setFileContent(null);
              props.reloadTrigger();
            }
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  return (
    <div
      className={
        "createPostContainer " +
        (theme === "dark" ? "createPostContainerDark" : "")
      }>
      {/* Header of the CreationPost component */}
      <div className="createPostDescription">
        <div className="createPostInitial">
          {localStorage.getItem("user").split(" ")[1][0]}
        </div>
        <div
          className={
            "createPostAuthor " +
            (theme === "dark" ? "createPostAuthorDark" : "")
          }>
          {`${localStorage.getItem("user").split(" ")[1]} ${
            localStorage.getItem("user").split(" ")[2][0]
          }.`}
        </div>
      </div>
      {/* Form of the CreationPost component */}
      <form id="post-form">
        <label
          htmlFor="postContent"
          className={
            "createPostTextAreaLabel " +
            (theme === "dark" ? "createPostTextAreaLabelDark" : "")
          }>
          Contenu de votre post :
        </label>
        <textarea
          id="postContent"
          name="postContent"
          rows={4}
          placeholder="Partagez vos pensées..."
          className={
            "createPostFormTextArea " +
            (theme === "dark" ? "createPostFormTextAreaDark" : "")
          }
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required></textarea>
        <label
          htmlFor="createPostImage"
          className={
            "createPostImageLabel " +
            (theme === "dark" ? "createPostImageLabelDark" : "")
          }>
          <i className="fa-solid fa-image" style={{ marginRight: "8px" }}></i>
          {picture}
        </label>
        {/* If there is a file, a button to cancel it appears */}
        {picture === "Ajouter une image (png, jpeg, jpg)" ? (
          ""
        ) : (
          <i
            className={
              "fa-solid fa-xmark cross " + (theme === "dark" ? "crossDark" : "")
            }
            onClick={() => onCancelPicture()}></i>
        )}
        <input
          className="createPostImageInput"
          type="file"
          id="createPostImage"
          name="createPostImage"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => onChangePicture(e)}
        />
      </form>
      <input
        type="submit"
        form="post-form"
        value="Publiez !"
        className="createPostPublishButton"
        onClick={(e) => publishPost(e, content, fileContent)}
      />
    </div>
  );
}
