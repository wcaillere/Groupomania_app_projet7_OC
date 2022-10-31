/** @format */

//Imports components
import HeaderHome from "../../components/HeaderHome";
import FooterHome from "../../components/FooterHome";
import Post from "../../components/post";
import CreatePost from "../../components/CreatePost";
import PopupPost from "../../components/PopupPost";
import Loader from "../../components/Loader";
//other tools
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../utils/context/index";
import "./home.css";

/**
 * Returns Home page
 * @returns {React.ReactElement}
 */
function Home() {
  const theme = useContext(ThemeContext).theme;
  const [isDataLoading, setDataLoading] = useState(false);
  //State for the popup during the modification of a post
  const [buttonPopup, setButtonPopup] = useState(false);
  const [idPostToModify, setIdPostToModify] = useState("");
  //State to stock the list of posts returned during the API call
  const [allPostData, setAllPostData] = useState([]);
  const [reload, setReload] = useState(0);
  const triggerReload = () => {
    setReload(reload + 1);
  };

  //UseEffect allows to call the API only on the load of the page
  useEffect(() => {
    setDataLoading(true);
    fetch("http://localhost:5000/api/posts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //Manages the redirection to the login page if the API can't getAllPost due to expired session
          if (result.message) {
            if (localStorage.getItem("token")) {
              alert("Session expirée");
            }
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            localStorage.removeItem("isAdmin");
            window.location.href = `./`;
          } else {
            setAllPostData(result);
            setDataLoading(false);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, [reload]);

  return localStorage.getItem("token") === null ? (
    ""
  ) : (
    <div className={theme === "dark" ? "bodydark" : "bodygrey"}>
      <HeaderHome />
      <main
        className={
          "mainContainer " + (theme === "dark" ? "mainContainerDark" : "")
        }>
        <CreatePost reloadTrigger={triggerReload} />
        <div
          className={
            "homeSeparationBar " +
            (theme === "dark" ? "homeSeparationBarDark" : "")
          }
        />
        {/* Create one component Post for every post of the list returned by the API */}
        {isDataLoading ? (
          <Loader />
        ) : (
          <div>
            {allPostData.map((post) => (
              <Post
                key={`${post.id_posts}`}
                postId={post.id_posts}
                userId={post.id_users}
                firstname={post.firstname}
                lastname={post.lastname}
                isAdmin={post.is_admin}
                date={post.date}
                content={post.content}
                imageUrl={post.image_url}
                likes={post.likes === null ? [] : post.likes.split(",")}
                setTrigger={setButtonPopup}
                handlePopup={setIdPostToModify}
                reloadTrigger={triggerReload}
              />
            ))}
          </div>
        )}
        <PopupPost
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          reloadTrigger={triggerReload}
          idPost={idPostToModify}
        />
      </main>
      <div className="clearDiv" />
      <FooterHome />
    </div>
  );
}

export default Home;
