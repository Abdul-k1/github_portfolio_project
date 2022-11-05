import React from "react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const Profile = () => {
  const [avatarURL, setAvatarURL] = useState();
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reposPerPage] = useState(7);

  async function repoDataURL() {
    await fetch("https://api.github.com/users/Abdul-k1/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          const list = result.map((item) => {
            return (
              <div className="list-class">
                <ul className="list-item">
                  <a
                    target="_blank"
                    href={item.svn_url}
                    rel="noopener noreferrer"
                  >
                    <li key={item.id}>{item.name}</li>
                  </a>
                </ul>
              </div>
            );
          });
          setRepos(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  useEffect(() => {
    fetch("https://api.github.com/users/Abdul-k1")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setAvatarURL(result.avatar_url);
          setName(result.name);
          setUsername(result.login);
        },

        (error) => {
          console.log(error);
        }
      );
    repoDataURL();
  }, []);

  // Get current repos
  const indexOfLastRepo = currentPage * reposPerPage;
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage;
  const currentRepo = repos.slice(indexOfFirstRepo, indexOfLastRepo);

  // Change the Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="main-container">
      <div className="avatar-layer">
        <img
          alt="avatarImage"
          src={avatarURL}
          style={{ borderRadius: "20px" }}
          className="avatarImage"
        />

        <h3 className="repo-text">Name: {name}</h3>
        <h4 className="repo-text">Username: {username}</h4>
      </div>
      <div className="repo-col">
        <h1>My Repos</h1>

        {currentRepo}

        <Pagination
          reposPerPage={reposPerPage}
          totalRepos={repos.length}
          paginate={paginate}
        />
        
          <Link to="/">
          <button className="back-btn">Back to Homepage</button>
          </Link>
        
      </div>
    </div>
  );
};

export default Profile;
