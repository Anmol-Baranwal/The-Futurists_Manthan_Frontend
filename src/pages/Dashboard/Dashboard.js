import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminPanel from "./SidePanel";
import { FaSearch } from "react-icons/fa";

import Spinner from "../../components/Spinner/Spinner";
import "./Dashboard.css";
import noResult from "./no result.svg";
import search from "./search.svg";

function App() {
  return (
    <main>
      <div className="dashboard">
        <AdminPanel />
        <Finder />
      </div>
    </main>
  );
}

const Finder = () => {
  const [id_phone, setId_phone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState({});
  let url;
  if (id_phone.includes("@")) {
    url = ` https://manthan-futuristic.herokuapp.com/data/user/find?email=${id_phone}`;
  } else {
    url = ` https://manthan-futuristic.herokuapp.com/data/user/find?mobile=${id_phone}`;
  }

  const dataFetching = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setSearchResult(data);
    setIsLoading(false);
  };

  const searchAccount = (e) => {
    e.preventDefault();

    if (id_phone.length > 0) {
      setIsLoading(true);
      dataFetching();
    }
  };

  const requriedData = searchResult?.data;

  return (
    <div className="finder">
      <h1>
        <FaSearch className="sc" /> Search Linked Accounts
      </h1>
      <div className="search">
        <form
          className="search-bar"
          onSubmit={searchAccount}
          autoComplete="off"
        >
          <input
            type="search"
            id="search-box"
            name="search-box"
            className="basic-input"
            value={id_phone}
            placeholder="Enter email-id or phone no."
            onChange={(e) => setId_phone(e.target.value)}
          />
        </form>
      </div>
      <div className="title">
        <h1>Related Results</h1>
        <div className="underline"></div>
      </div>
      <article className="results">
        {!isLoading && Object.keys(searchResult).length === 0 && (
          <div className="no-result">
            <img src={search} alt="waiting to search" />
            <h4>Waiting to search</h4>
          </div>
        )}
        {isLoading && (
          <div style={{ padding: "80px" }}>
            <Spinner />
          </div>
        )}

        {!isLoading &&
          Object.keys(searchResult).length > 0 &&
          searchResult.status &&
          searchResult.data.dbTypes.map((result) => (
            <div className="result" key={requriedData?._id + result}>
              <div className="column">
                {console.log(searchResult.flags[result])}
                <div
                  className={`flag ${
                    searchResult.flags[result] === -3
                      ? "red"
                      : searchResult.flags[result] === -2
                      ? "orange"
                      : searchResult.flags[result] === -1
                      ? "yellow"
                      : "green"
                  }`}
                ></div>
              </div>
              <div className="column">
                <h3>First Name</h3>
                <p>{requriedData.firstName}</p>
              </div>
              <div className="column">
                <h3>Last Name</h3>
                <p>{requriedData.lastName}</p>
              </div>
              <div className="column">
                <h3>Account Type</h3>
                <p>{result}</p>
              </div>
              <div className="column">
                <h3>Action required</h3>
                <Link
                  to={`/dashboard/profile/${requriedData._id}/${
                    requriedData.firstName + " " + requriedData.lastName
                  }/${result}`}
                >
                  <p style={{ color: "blue" }}>View Profile</p>
                </Link>
              </div>
            </div>
          ))}
        {!isLoading &&
          Object.keys(searchResult).length > 0 &&
          !searchResult.status && (
            <div className="no-result">
              <img src={noResult} alt="not found" />
              <h4>Result Not Found</h4>
            </div>
          )}
      </article>
    </div>
  );
};

export default App;
