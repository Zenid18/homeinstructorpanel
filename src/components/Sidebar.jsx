import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div
      className={`sidebar p-3 position-fixed overflow-y-auto overflow-x-hidden transition ${
        props.sidebarShow ? "sidebar-show" : ""
      } `}
    >
      <div className="sidbar-logo mb-5 d-flex align-items-center justify-content-center position-relative">
        <Link>
          <img className="d-none d-lg-block" src="images/logo.png" alt="logo" />
          <img
            className="d-block d-lg-none"
            width={70}
            src="images/logo-sm.png"
            alt="logo"
          />
        </Link>
        <button
          className="border-0 bg-transparent d-block d-lg-none"
          onClick={() => props.setSidebarShow(true)}
        >
          <img src="/images/svg/cross.svg" alt="cross" />
        </button>
      </div>

      <div className="sidebar-items-box ps-3 d-flex flex-column gap-3 ">
        <div
          onClick={() => props.setSidebarActive("dashboard")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "dashboard" ? "sidebar-active" : ""
          } `}
        >
          <Link
            to="/dashboard"
            className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center"
          >
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 19 22"
                >
                  <g clipPath="url(#clip0_758_9)">
                    <path d="M9.5 11C12.4984 11 14.9286 8.53789 14.9286 5.5C14.9286 2.46211 12.4984 0 9.5 0C6.50156 0 4.07143 2.46211 4.07143 5.5C4.07143 8.53789 6.50156 11 9.5 11ZM13.3 12.375H12.5917C11.6502 12.8133 10.6027 13.0625 9.5 13.0625C8.39732 13.0625 7.35402 12.8133 6.40826 12.375H5.7C2.55312 12.375 0 14.9617 0 18.15V19.9375C0 21.0762 0.91183 22 2.03571 22H16.9643C18.0882 22 19 21.0762 19 19.9375V18.15C19 14.9617 16.4469 12.375 13.3 12.375Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_758_9">
                      <rect width="20" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>
            Dashboard
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("resource")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "resource" ? "sidebar-active" : ""
          } `}
        >
          <Link className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center">
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <path
                    d="M16.9583 3.66602H5.04167C4.53541 3.66602 4.125 4.07642 4.125 4.58268V19.2493C4.125 19.7556 4.53541 20.166 5.04167 20.166H16.9583C17.4646 20.166 17.875 19.7556 17.875 19.2493V4.58268C17.875 4.07642 17.4646 3.66602 16.9583 3.66602Z"
                    stroke={
                      props.sidebarActive == "resource"
                        ? "var(--red)"
                        : "#9A9A9A"
                    }
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.25 1.83301V4.58301"
                    stroke={
                      props.sidebarActive == "resource"
                        ? "var(--red)"
                        : "#9A9A9A"
                    }
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.75 1.83301V4.58301"
                    stroke={
                      props.sidebarActive == "resource"
                        ? "var(--red)"
                        : "#9A9A9A"
                    }
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.33594 8.70801H14.6693"
                    stroke="#E5E5E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.33594 12.375H12.8359"
                    stroke="#E5E5E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.33594 16.041H11.0026"
                    stroke="#E5E5E5"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>{" "}
            Resource Builder{" "}
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("schedule")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "schedule" ? "sidebar-active" : ""
          } `}
        >
          <Link className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center">
            {" "}
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M12 2.00195C10.9723 2.00195 9.98666 2.41021 9.25996 3.13691C8.53326 3.86362 8.125 4.84924 8.125 5.87695C8.125 8.79695 9.332 12.429 9.938 14.076C10.0946 14.4961 10.3767 14.858 10.7459 15.1126C11.1151 15.3671 11.5536 15.502 12.002 15.499C12.906 15.499 13.741 14.957 14.065 14.081C14.671 12.441 15.875 8.82695 15.875 5.87695C15.875 4.84924 15.4667 3.86362 14.74 3.13691C14.0133 2.41021 13.0277 2.00195 12 2.00195ZM12.001 17C11.3377 17 10.7016 17.2635 10.2325 17.7325C9.7635 18.2015 9.5 18.8376 9.5 19.501C9.5 20.1643 9.7635 20.8004 10.2325 21.2694C10.7016 21.7385 11.3377 22.002 12.001 22.002C12.6643 22.002 13.3004 21.7385 13.7695 21.2694C14.2385 20.8004 14.502 20.1643 14.502 19.501C14.502 18.8376 14.2385 18.2015 13.7695 17.7325C13.3004 17.2635 12.6643 17 12.001 17Z" />
                </svg>
              </span>
            </div>{" "}
            My Schedule{" "}
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("my-account")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "my-account" ? "sidebar-active" : ""
          } `}
        >
          <Link
            to="/my-account"
            className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center"
          >
            {" "}
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 19 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_758_9)">
                    <path d="M9.5 11C12.4984 11 14.9286 8.53789 14.9286 5.5C14.9286 2.46211 12.4984 0 9.5 0C6.50156 0 4.07143 2.46211 4.07143 5.5C4.07143 8.53789 6.50156 11 9.5 11ZM13.3 12.375H12.5917C11.6502 12.8133 10.6027 13.0625 9.5 13.0625C8.39732 13.0625 7.35402 12.8133 6.40826 12.375H5.7C2.55312 12.375 0 14.9617 0 18.15V19.9375C0 21.0762 0.91183 22 2.03571 22H16.9643C18.0882 22 19 21.0762 19 19.9375V18.15C19 14.9617 16.4469 12.375 13.3 12.375Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_758_9">
                      <rect width="20" height="22" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </div>{" "}
            My Account{" "}
          </Link>
        </div>
        <div
          onClick={() => props.setSidebarActive("community")}
          className={`sidebar-item rounded-3 p-2 ps-3 ${
            props.sidebarActive == "community" ? "sidebar-active" : ""
          } `}
        >
          <Link className="text-decoration-none text-decoration-none d-flex gap-3 align-items-center">
            {" "}
            <div className="sidebar-item-icon rounded-3 d-flex align-items-center justify-content-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 29 29"
                  fill="none"
                >
                  <path d="M7.25 14.8018C7.25 14.4447 7.32032 14.0912 7.45695 13.7613C7.59358 13.4315 7.79384 13.1318 8.0463 12.8793C8.29876 12.6269 8.59848 12.4266 8.92833 12.29C9.25818 12.1533 9.61172 12.083 9.96875 12.083C10.3258 12.083 10.6793 12.1533 11.0092 12.29C11.339 12.4266 11.6387 12.6269 11.8912 12.8793C12.1437 13.1318 12.3439 13.4315 12.4805 13.7613C12.6172 14.0912 12.6875 14.4447 12.6875 14.8018C12.6875 15.5228 12.4011 16.2143 11.8912 16.7242C11.3813 17.2341 10.6898 17.5205 9.96875 17.5205C9.24769 17.5205 8.55617 17.2341 8.0463 16.7242C7.53644 16.2143 7.25 15.5228 7.25 14.8018ZM9.96875 13.8955C9.7284 13.8955 9.49789 13.991 9.32793 14.1609C9.15798 14.3309 9.0625 14.5614 9.0625 14.8018C9.0625 15.0421 9.15798 15.2726 9.32793 15.4426C9.49789 15.6125 9.7284 15.708 9.96875 15.708C10.2091 15.708 10.4396 15.6125 10.6096 15.4426C10.7795 15.2726 10.875 15.0421 10.875 14.8018C10.875 14.5614 10.7795 14.3309 10.6096 14.1609C10.4396 13.991 10.2091 13.8955 9.96875 13.8955ZM13.8958 14.8018C13.8958 14.5614 13.9913 14.3309 14.1613 14.1609C14.3312 13.991 14.5617 13.8955 14.8021 13.8955H17.8229C18.0633 13.8955 18.2938 13.991 18.4637 14.1609C18.6337 14.3309 18.7292 14.5614 18.7292 14.8018C18.7292 15.0421 18.6337 15.2726 18.4637 15.4426C18.2938 15.6125 18.0633 15.708 17.8229 15.708H14.8021C14.5617 15.708 14.3312 15.6125 14.1613 15.4426C13.9913 15.2726 13.8958 15.0421 13.8958 14.8018ZM7.25 9.36426C7.25 9.12391 7.34548 8.8934 7.51543 8.72344C7.68539 8.55349 7.9159 8.45801 8.15625 8.45801H17.8229C18.0633 8.45801 18.2938 8.55349 18.4637 8.72344C18.6337 8.8934 18.7292 9.12391 18.7292 9.36426C18.7292 9.60461 18.6337 9.83512 18.4637 10.0051C18.2938 10.175 18.0633 10.2705 17.8229 10.2705H8.15625C7.9159 10.2705 7.68539 10.175 7.51543 10.0051C7.34548 9.83512 7.25 9.60461 7.25 9.36426Z" />
                  <path d="M7.55208 3.625C6.51056 3.625 5.51169 4.03874 4.77522 4.77522C4.03874 5.51169 3.625 6.51056 3.625 7.55208V18.4271C3.625 19.4686 4.03874 20.4675 4.77522 21.204C5.51169 21.9404 6.51056 22.3542 7.55208 22.3542H18.4271C19.4686 22.3542 20.4675 21.9404 21.204 21.204C21.9404 20.4675 22.3542 19.4686 22.3542 18.4271V7.55208C22.3542 6.51056 21.9404 5.51169 21.204 4.77522C20.4675 4.03874 19.4686 3.625 18.4271 3.625H7.55208ZM5.4375 7.55208C5.4375 6.38483 6.38483 5.4375 7.55208 5.4375H18.4271C19.5943 5.4375 20.5417 6.38483 20.5417 7.55208V18.4271C20.5427 18.879 20.3984 19.3194 20.1301 19.6831C19.8619 20.0469 19.4839 20.3148 19.0518 20.4474C18.8548 20.5078 18.6446 20.5417 18.4271 20.5417H7.55208C7.2743 20.542 6.99919 20.4875 6.74249 20.3813C6.48579 20.2752 6.25256 20.1194 6.05614 19.923C5.85972 19.7266 5.70397 19.4934 5.59782 19.2367C5.49166 18.98 5.43718 18.7049 5.4375 18.4271V7.55208Z" />
                  <path d="M10.575 25.3754C9.91525 25.376 9.266 25.2102 8.6873 24.8934C8.1086 24.5766 7.61913 24.119 7.26416 23.5629H19.0333C20.2351 23.5629 21.3876 23.0855 22.2374 22.2357C23.0872 21.3859 23.5646 20.2334 23.5646 19.0316V7.26367C24.1206 7.61872 24.5782 8.10821 24.895 8.68689C25.2118 9.26557 25.3776 9.91478 25.3771 10.5745V19.0328C25.3768 20.7151 24.7083 22.3283 23.5186 23.5178C22.329 24.7072 20.7156 25.3754 19.0333 25.3754H10.575Z" />
                </svg>
              </span>
            </div>{" "}
            Community{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
