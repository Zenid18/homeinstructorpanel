import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Verified() {
  const navigate = useNavigate()
  const location = useLocation();
  const data = location.state
  return (
    // MAIN DIV
    <div className="login-section vw-100 vh-100 d-flex align-items-start justify-content-center">
      <div className="login-box pt-5 mt-2">
        <div className="login-img text-center pb-5">
          <img src="/images/logo.png" alt="logo" />
        </div>
        {/* INNER-BOX */}
        <div className="login-inner-box rounded-4 p-4 py-5 mx-3 p-sm-5 text-center">
          <h2 className="fw-600 pb-2 ">Successfully Verified</h2>
          <p className="verified-para">
            You have successfully verified account.
          </p>
          <img
            className="py-3"
            width={110}
            src="/images/verified.png"
            alt="verified"
          />
          <button
            onClick={() => navigate("/reset", { state: data })}
            type="submit"
            className="login-btn white-text fw-600 w-100  rounded-pill mt-2 border-0"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
