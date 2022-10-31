/** @format */

import { useContext } from "react";
import { ThemeContext } from "../../utils/context/index";
import "./post.css";

/**
 * Returns one Post, created from informations of the DataBase
 * @param {object} props
 * @returns {React.ReactElement}
 */
function Post(props) {
  const theme = useContext(ThemeContext).theme;

  /**
   * Manages the like's frontend and route API when the like button of a post is clicked
   */
  function ManageLike() {
    //Initializes a bad value for the request. Then, if there is a problem during the function, the value is not changed and the API returns a res 400: invalid request
    var likeValue = 2;
    //Control if the action is a added like or a removed like
    props.likes.includes(localStorage.getItem("user").split(" ")[0])
      ? (likeValue = 0)
      : (likeValue = 1);

    fetch(`http://localhost:5000/api/posts/${props.postId}/like`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        userId: localStorage.getItem("user").split(" ")[0],
        like: likeValue,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //Manages the redirection to the login page if the API can't like or remove like from the post due to expired session
          if (
            result.message &&
            result.message === "erreur d'authentification"
          ) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("isAdmin");
            alert("Session expirée");
            window.location.href = `./`;
          }
          console.log(result);
          props.reloadTrigger();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /**
   * Manages the delete route when the 'supprimer' button of a post is clicked
   */
  function DeleteOnePost() {
    if (window.confirm("Voulez-vous vraiment supprimer ce post ?")) {
      fetch(`http://localhost:5000/api/posts/${props.postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            //Manages the redirection to the login page if the API can't like or remove like from the post due to expired session
            if (
              result.message &&
              result.message === "erreur d'authentification"
            ) {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              localStorage.removeItem("isAdmin");
              alert("Session expirée");
              window.location.href = `./`;
            }
            console.log(result);
            props.reloadTrigger();
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  return (
    <article
      className={
        "postContainer " + (theme === "dark" ? "postContainerDark" : "")
      }>
      {/* post header */}
      <div>
        <div className="postDescrition">
          <div className="postinitial">{props.firstname[0]}</div>
          <div
            className={
              "postDetails " + (theme === "dark" ? "postDetailsDark" : "")
            }>
            <div
              className={
                "postAuthor " +
                (theme === "dark" ? "postAuthorDark " : "") +
                (props.isAdmin ? "postAuthorIsAdmin" : "")
              }>{`${props.firstname} ${props.lastname[0]}.`}</div>
            <div className="postDate">{props.date}</div>
          </div>
          {props.isAdmin ? (
            <i
              className="fa-solid fa-shield-halved fa-lg"
              style={{
                color: `${
                  theme === "dark"
                    ? "white"
                    : `${getComputedStyle(document.body).getPropertyValue(
                        "--primary"
                      )}`
                }`,
                marginRight: "50px",
              }}></i>
          ) : (
            ""
          )}
        </div>
        {/* Buttons to modify or to suppress a post are only available if the user is admin or the post's author  */}
        {localStorage.getItem("isAdmin") === "1" ||
        localStorage.getItem("user").split(" ")[0] === `${props.userId}` ? (
          <div>
            <button
              onClick={(e) => {
                props.handlePopup(props.postId);
                props.setTrigger(true);
              }}
              className="postButton">
              <i className="fa-solid fa-arrow-rotate-right"></i>
              <span className="postButtonText">Modifier</span>
            </button>
            <button
              onClick={() => {
                DeleteOnePost();
              }}
              className="postButton">
              <i className="fa-solid fa-trash-can"></i>
              <span className="postButtonText">Supprimer</span>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* post likes */}
      <div className={"postLike " + (theme === "dark" ? "postLikeDark" : "")}>
        <span>{props.likes.length}</span>
        <div
          className={
            "postLikeIcon " +
            (props.likes.includes(localStorage.getItem("user").split(" ")[0])
              ? "postLikeIconLiked"
              : "")
          }
          onClick={(e) => {
            ManageLike(e);
          }}>
          <i className="fa-solid fa-thumbs-up fa-xl"></i>
        </div>
      </div>
      {/* post Content */}
      <div
        className={
          "postContent " + (theme === "dark" ? "postContentDark" : "")
        }>
        {props.content}
      </div>
      {props.imageUrl === null ? (
        ""
      ) : (
        <img
          className="postImage"
          src={props.imageUrl}
          alt="illustration du post"
        />
      )}
    </article>
  );
}

export default Post;
