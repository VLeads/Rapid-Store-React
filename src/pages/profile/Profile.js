import React, { useState, useEffect } from "react";
import { useToast, useUser } from "context";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import { ACTION_TYPE_SUCCESS } from "utils";

export const Profile = () => {
  const navigate = useNavigate();
  const { toastDispatch, setShowToast } = useToast();
  const { getToken: authToken, setGetToken } = useUser();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  const logoutHandler = () => {
    setShowToast(true);
    toastDispatch({
      type: ACTION_TYPE_SUCCESS,
      payload: `✅ Successfully logged out `,
    });
    setTimeout(() => {
      setShowToast(false);
    }, 2500);
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    setGetToken("");
    navigate("/", { replace: true });
  };

  return (
    <div className="profile_outer_container">
      <div className="profile_container">
        <div className="profile_header">Profile Information</div>

        <div className="profile_details">
          <div>
            <span className="txt-grey text-heading">Name</span>

            <span>{`${currentUser?.firstName} ${currentUser?.lastName}`}</span>
          </div>
          <div>
            <span className="txt-grey text-heading">Email</span>

            <span>{currentUser?.email}</span>
          </div>
          <div className="profile_details-footer ">
            <button className="btn btn-danger" onClick={logoutHandler}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
