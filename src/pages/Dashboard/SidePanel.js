import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";

import pic from "./dp.svg";

const SidePanel = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <section className="admin-panel">
      <div className="profile">
        <img className="profile-pic" src={pic} alt="detective" />
        <article>
          <h3>{user && `${user.firstName} ${user.lastName} `}</h3>
          <p>{user && user.email}</p>
        </article>
      </div>
      <Icons />
    </section>
  );
};

const Icons = () => {
  return (
    <div className="icons">
      <div className="icon" style={{ background: "#94a8b6" }}>
        <MdDashboard className="ic" />
        <p>Dashboard</p>
      </div>
      <div className="icon">
        <RiLogoutBoxLine className="ic" />

        <p
          onClick={() => {
            console.log("log");
            localStorage.clear();
            window.location.replace("/");
          }}
        >
          Log out
        </p>
      </div>
    </div>
  );
};

export default SidePanel;
