import React, { useState } from "react";
import Layout from "../layout/layout";

export default function MyAccount() {
  const [sidebarActive, setSidebarActive] = useState("my-account");
    const [showPassInstructors, setShowPassInstructors] = useState(false);
    const [showConPassInstructors, setShowConPassInstructors] = useState(false);
  return (
    <div>
      <Layout sidebarActive={sidebarActive} setSidebarActive={setSidebarActive}>
        <form action="">
          <div className="my-account p-4 rounded-2">
            <h2 className="fw-600 pb-4">General</h2>
            <div className="row pb-5">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="first-name">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        placeholder="First Name"
                        className="ps-2 rounded-1 p-2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="last-name">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        placeholder="Last Name"
                        className="ps-2 rounded-1 p-2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="email">
                        Email ID
                      </label>
                      <input
                        id="email"
                        placeholder="Email ID"
                        className="ps-2 rounded-1 p-2"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="mobile">
                        Mobile Number
                      </label>
                      <input
                        id="mobile"
                        placeholder="Mobile Number"
                        className="ps-2 rounded-1 p-2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="expertise">
                        Expertise
                      </label>
                      <input
                        id="expertise"
                        placeholder="Expertise"
                        className="ps-2 rounded-1 p-2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="username">
                        Username
                      </label>
                      <input
                        id="username"
                        placeholder="Username"
                        className="ps-2 rounded-1 p-2"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="password">
                        Password
                      </label>
                      <div className="input-box position-relative">
                        <input
                          type={showPassInstructors ? "text" : "password"}
                          id="password"
                          placeholder="Password"
                          className="ps-2 rounded-1 p-2 w-100"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowPassInstructors(!showPassInstructors)
                          }
                          className="border-0 h-100 rounded-1 bg-transparent pe-3"
                        >
                          {showPassInstructors ? (
                            <span className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 28 21"
                                fill="var(--d-grey)"
                              >
                                <path
                                  d="M14 0.207031C17.4667 0.207031 20.4242 1.88103 22.6327 3.71366C24.8552 5.55472 26.46 7.67084 27.2475 8.81497C27.5582 9.26417 27.7241 9.79205 27.7241 10.332C27.7241 10.872 27.5582 11.3999 27.2475 11.8491C26.46 12.9932 24.8552 15.1093 22.6327 16.9504C20.4225 18.783 17.4667 20.457 14 20.457C10.5332 20.457 7.57572 18.783 5.36722 16.9504C3.14472 15.1077 1.53997 12.9915 0.752466 11.8474C0.441714 11.3982 0.275879 10.8703 0.275879 10.3303C0.275879 9.79037 0.441714 9.26248 0.752466 8.81328C1.53997 7.67084 3.14472 5.55472 5.36722 3.71366C7.57747 1.88103 10.5332 0.207031 14 0.207031ZM2.93822 10.2173C2.91414 10.251 2.90125 10.2911 2.90125 10.332C2.90125 10.373 2.91414 10.413 2.93822 10.4468C3.65747 11.4964 5.10997 13.3999 7.07872 15.0317C9.05797 16.6737 11.4222 17.9258 14 17.9258C16.5777 17.9258 18.9437 16.6737 20.9212 15.0317C22.8882 13.3999 24.3407 11.4947 25.0617 10.4468C25.0858 10.413 25.0987 10.373 25.0987 10.332C25.0987 10.2911 25.0858 10.251 25.0617 10.2173C24.3407 9.16934 22.8882 7.26416 20.9212 5.63234C18.942 3.99041 16.5777 2.73828 14 2.73828C11.4222 2.73828 9.05622 3.99041 7.07872 5.63234C5.11172 7.26416 3.65922 9.16934 2.93822 10.2173ZM14 13.707C13.5339 13.7172 13.0704 13.6375 12.6367 13.4725C12.203 13.3076 11.8078 13.0607 11.4744 12.7465C11.141 12.4323 10.8761 12.057 10.6951 11.6426C10.5142 11.2283 10.421 10.7833 10.4208 10.3337C10.4207 9.88418 10.5137 9.43912 10.6945 9.02471C10.8752 8.61029 11.1399 8.23486 11.4732 7.92047C11.8064 7.60607 12.2014 7.35905 12.635 7.19389C13.0687 7.02874 13.5321 6.94878 13.9982 6.95872C14.9127 6.97822 15.7829 7.34216 16.4226 7.97263C17.0623 8.60311 17.4206 9.45001 17.4208 10.3321C17.4211 11.2141 17.0632 12.0612 16.4238 12.6919C15.7845 13.3227 14.9144 13.6871 14 13.707Z"
                                  fill="#787A8D"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 34 35"
                                fill="var(--d-grey)"
                              >
                                <path
                                  d="M28.2909 30.8746L23.5365 26.1203C21.4854 27.0542 19.2537 27.5248 17 27.4987C14.6765 27.5276 12.3771 27.0261 10.2765 26.0324C8.64834 25.238 7.18628 24.1409 5.96846 22.7996C4.67574 21.4139 3.65971 19.7939 2.97504 18.0269L2.83337 17.582L2.98212 17.1344C4.0061 14.5224 5.7294 12.2428 7.96312 10.5454L4.25004 6.83236L6.25179 4.83203L30.2912 28.8714L28.2937 30.8746H28.2909ZM9.96771 12.5514C8.1571 13.8207 6.7273 15.56 5.83246 17.582C7.75122 22.009 12.1775 24.8165 17 24.6654C18.4873 24.6775 19.9659 24.4381 21.3733 23.957L18.8233 21.407C18.2557 21.6853 17.6322 21.8306 17 21.832C14.6589 21.8173 12.7647 19.9231 12.75 17.582C12.7507 16.9485 12.8961 16.3234 13.175 15.7545L9.96771 12.5514ZM28.1237 22.6962L26.1517 20.7256C26.9813 19.7877 27.6613 18.7273 28.1676 17.582C26.2514 13.1529 21.8234 10.3444 17 10.4987C16.6501 10.4987 16.2988 10.5114 15.9588 10.5355L13.4584 8.03228C14.6223 7.78328 15.8097 7.66027 17 7.66536C19.3235 7.63653 21.623 8.138 23.7235 9.13161C25.3518 9.92599 26.8138 11.0231 28.0316 12.3644C29.3237 13.7485 30.3397 15.3665 31.025 17.1315L31.1667 17.582L31.018 18.0297C30.3547 19.7553 29.3734 21.3411 28.1251 22.7047L28.1237 22.6962Z"
                                  fill="#787A8D"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-box d-flex flex-column pb-4">
                      <label className="pb-1" htmlFor="confirm-password">
                        Confirm Password
                      </label>
                      <div className="input-box position-relative">
                        <input
                          type={showConPassInstructors ? "text" : "password"}
                          id="confirm-password"
                          placeholder="Password"
                          className="ps-2 rounded-1 p-2 w-100"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConPassInstructors(!showConPassInstructors)
                          }
                          className="border-0 h-100 rounded-1 bg-transparent pe-3"
                        >
                          {showConPassInstructors ? (
                            <span className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 28 21"
                                fill="var(--d-grey)"
                              >
                                <path
                                  d="M14 0.207031C17.4667 0.207031 20.4242 1.88103 22.6327 3.71366C24.8552 5.55472 26.46 7.67084 27.2475 8.81497C27.5582 9.26417 27.7241 9.79205 27.7241 10.332C27.7241 10.872 27.5582 11.3999 27.2475 11.8491C26.46 12.9932 24.8552 15.1093 22.6327 16.9504C20.4225 18.783 17.4667 20.457 14 20.457C10.5332 20.457 7.57572 18.783 5.36722 16.9504C3.14472 15.1077 1.53997 12.9915 0.752466 11.8474C0.441714 11.3982 0.275879 10.8703 0.275879 10.3303C0.275879 9.79037 0.441714 9.26248 0.752466 8.81328C1.53997 7.67084 3.14472 5.55472 5.36722 3.71366C7.57747 1.88103 10.5332 0.207031 14 0.207031ZM2.93822 10.2173C2.91414 10.251 2.90125 10.2911 2.90125 10.332C2.90125 10.373 2.91414 10.413 2.93822 10.4468C3.65747 11.4964 5.10997 13.3999 7.07872 15.0317C9.05797 16.6737 11.4222 17.9258 14 17.9258C16.5777 17.9258 18.9437 16.6737 20.9212 15.0317C22.8882 13.3999 24.3407 11.4947 25.0617 10.4468C25.0858 10.413 25.0987 10.373 25.0987 10.332C25.0987 10.2911 25.0858 10.251 25.0617 10.2173C24.3407 9.16934 22.8882 7.26416 20.9212 5.63234C18.942 3.99041 16.5777 2.73828 14 2.73828C11.4222 2.73828 9.05622 3.99041 7.07872 5.63234C5.11172 7.26416 3.65922 9.16934 2.93822 10.2173ZM14 13.707C13.5339 13.7172 13.0704 13.6375 12.6367 13.4725C12.203 13.3076 11.8078 13.0607 11.4744 12.7465C11.141 12.4323 10.8761 12.057 10.6951 11.6426C10.5142 11.2283 10.421 10.7833 10.4208 10.3337C10.4207 9.88418 10.5137 9.43912 10.6945 9.02471C10.8752 8.61029 11.1399 8.23486 11.4732 7.92047C11.8064 7.60607 12.2014 7.35905 12.635 7.19389C13.0687 7.02874 13.5321 6.94878 13.9982 6.95872C14.9127 6.97822 15.7829 7.34216 16.4226 7.97263C17.0623 8.60311 17.4206 9.45001 17.4208 10.3321C17.4211 11.2141 17.0632 12.0612 16.4238 12.6919C15.7845 13.3227 14.9144 13.6871 14 13.707Z"
                                  fill="#787A8D"
                                />
                              </svg>
                            </span>
                          ) : (
                            <span className="">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 34 35"
                                fill="var(--d-grey)"
                              >
                                <path
                                  d="M28.2909 30.8746L23.5365 26.1203C21.4854 27.0542 19.2537 27.5248 17 27.4987C14.6765 27.5276 12.3771 27.0261 10.2765 26.0324C8.64834 25.238 7.18628 24.1409 5.96846 22.7996C4.67574 21.4139 3.65971 19.7939 2.97504 18.0269L2.83337 17.582L2.98212 17.1344C4.0061 14.5224 5.7294 12.2428 7.96312 10.5454L4.25004 6.83236L6.25179 4.83203L30.2912 28.8714L28.2937 30.8746H28.2909ZM9.96771 12.5514C8.1571 13.8207 6.7273 15.56 5.83246 17.582C7.75122 22.009 12.1775 24.8165 17 24.6654C18.4873 24.6775 19.9659 24.4381 21.3733 23.957L18.8233 21.407C18.2557 21.6853 17.6322 21.8306 17 21.832C14.6589 21.8173 12.7647 19.9231 12.75 17.582C12.7507 16.9485 12.8961 16.3234 13.175 15.7545L9.96771 12.5514ZM28.1237 22.6962L26.1517 20.7256C26.9813 19.7877 27.6613 18.7273 28.1676 17.582C26.2514 13.1529 21.8234 10.3444 17 10.4987C16.6501 10.4987 16.2988 10.5114 15.9588 10.5355L13.4584 8.03228C14.6223 7.78328 15.8097 7.66027 17 7.66536C19.3235 7.63653 21.623 8.138 23.7235 9.13161C25.3518 9.92599 26.8138 11.0231 28.0316 12.3644C29.3237 13.7485 30.3397 15.3665 31.025 17.1315L31.1667 17.582L31.018 18.0297C30.3547 19.7553 29.3734 21.3411 28.1251 22.7047L28.1237 22.6962Z"
                                  fill="#787A8D"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="profile-image-box">
                  <p className="pb-2 text-nowrap">
                    Profile Update
                    <div class="tooltip2 ms-1">
                      <img src="/images/svg/info-icon.svg" alt="info" />
                      <span class="tooltiptext">Upload image upto 2 mb</span>
                    </div>
                  </p>
                  <div className="profile-img">
                    <img
                      src="/images/profile-img.png"
                      className="img-fluid rounded-1"
                      alt="profile-img"
                    />
                  </div>
                  <button className="bg-transparent py-2 w-100 rounded-1 text-nowrap">
                    Change Image
                  </button>
                </div>
              </div>
            </div>
            <h2 className="fw-600 pb-4">Other Information</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="phone-number">
                    Phone Number
                  </label>
                  <input
                    id="phone-number"
                    placeholder="Phone Number"
                    className="ps-2 rounded-1 p-2"
                    type="number"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="email2">
                    Email
                  </label>
                  <input
                    id="email2"
                    placeholder="Email"
                    className="ps-2 rounded-1 p-2"
                    type="email"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="Pin-code">
                    Pin code / Zip code
                  </label>
                  <input
                    id="Pin-code"
                    placeholder="Pin code / Zip code"
                    className="ps-2 rounded-1 p-2"
                    type="number"
                  />
                </div>
              </div>

              <div className="col-md-4">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="address">
                    Address
                  </label>
                  <input
                    id="address"
                    placeholder="Address"
                    className="ps-2 rounded-1 p-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="City">
                    City
                  </label>
                  <input
                    id="City"
                    placeholder="City"
                    className="ps-2 rounded-1 p-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-1" htmlFor="Country">
                    Country
                  </label>
                  <input
                    id="Country"
                    placeholder="Country"
                    className="ps-2 rounded-1 p-2"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-box d-flex flex-column pb-4">
                  <label className="pb-3" htmlFor="About-Info">
                    About Info{" "}
                    <div class="tooltip1 ms-1">
                      <img src="/images/svg/info-icon.svg" alt="info" />
                      <span class="tooltiptext">Minimum words 200</span>
                    </div>
                  </label>

                  <textarea
                    class="ps-2 rounded-1 p-2"
                    id="About-Info"
                    placeholder="Tell us bit about yourself and help brands get to know you.."
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <button className="border-0 p-2 px-5 save-btn white-text">
              Save Changes
            </button>
          </div>
        </form>
      </Layout>
    </div>
  );
}
