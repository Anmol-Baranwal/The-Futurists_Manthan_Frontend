import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Post from "../../components/Post/Post";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./Profile.module.scss";

function Profile() {
  const params = useParams();

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPosts = async () => {
    const response = await fetch(
      `https://manthan-futuristic.herokuapp.com/data/user/posts/${params.userId}/${params.dbType}`
    );
    const data = await response.json();
    if (data?.status === true && data?.data) {
      setPosts(data);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setPosts([]);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.profile}>
      <div className={styles.headerSection}>
        <div className={styles.coverArea}></div>
        <img
          className={styles.profileImage}
          src="https://images.unsplash.com/photo-1633113211821-6ac9c3d160a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
          alt="profile"
        />
        <div className={styles.information}>
          <h2>{params.name}</h2>
        </div>
      </div>
      <div className={styles.posts}>
        <h2>Posts</h2>
        <hr className={styles.breakLine} />
        <div className={styles.postSection}>
          {isLoading ? (
            <Spinner />
          ) : (
            posts?.data?.map((post) => <Post details={post} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
