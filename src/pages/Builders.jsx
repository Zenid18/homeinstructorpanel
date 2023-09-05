import React, { useState } from "react";
import Layout from "../layout/layout";
import { Link } from "react-router-dom";
export default function Builders() {
 const [sidebarActive, setSidebarActive] = useState("builders");
  return (
    <div className="">
      <Layout
        heading="Resource Builder"
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      >
        <div className="builder-main-page">
          <div className="row">
            <div className="col-12 col-md-9">
              <div className="row course-builder-row px-3 rounded-3">
                <div className="col-12 col-sm-6 col-xxl-4">
                  <div className="course-bulider rounded-4 my-3 transition">
                    <Link className="course-builder-item d-flex align-items-center p-3 py-3 gap-4 text-decoration-none black-text">
                      <img
                        width={50}
                        src="/images/builder-img1.png"
                        alt="builder"
                      />
                      <h3>
                        IQV <br />
                        Builder
                      </h3>
                      <p className="ms-auto pe-2">
                        <img
                          src="/images/svg/arrow-right.svg"
                          alt="arrow-right"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xxl-4">
                  <div className="course-bulider rounded-4 my-3 transition">
                    <Link
                      to="/course-new"
                      className="course-builder-item d-flex align-items-center p-3 py-3 gap-4 text-decoration-none black-text"
                    >
                      <img
                        width={50}
                        src="/images/builder-img2.png"
                        alt="builder"
                      />
                      <h3>
                        Course <br /> Builder
                      </h3>
                      <p className="ms-auto pe-2">
                        <img
                          src="/images/svg/arrow-right.svg"
                          alt="arrow-right"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xxl-4">
                  <div className="course-bulider rounded-4 my-3 transition">
                    <Link className="course-builder-item d-flex align-items-center p-3 py-3 gap-4 text-decoration-none black-text">
                      <img
                        width={50}
                        src="/images/builder-img3.png"
                        alt="builder"
                      />
                      <h3>
                        Podcast <br /> Builder
                      </h3>
                      <p className="ms-auto pe-2">
                        <img
                          src="/images/svg/arrow-right.svg"
                          alt="arrow-right"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xxl-4">
                  <div className="course-bulider rounded-4 my-3 transition">
                    <Link className="course-builder-item d-flex align-items-center p-3 py-3 gap-4 text-decoration-none black-text">
                      <img
                        width={50}
                        src="/images/builder-img4.png"
                        alt="builder"
                      />
                      <h3>
                        E-Book <br /> Builder
                      </h3>
                      <p className="ms-auto pe-2">
                        <img
                          src="/images/svg/arrow-right.svg"
                          alt="arrow-right"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xxl-4">
                  <div className="course-bulider rounded-4 my-3 transition">
                    <Link className="course-builder-item d-flex align-items-center p-3 py-3 gap-4 text-decoration-none black-text">
                      <img
                        width={50}
                        src="/images/builder-img5.png"
                        alt="builder"
                      />
                      <h3>
                        Event <br /> Builder
                      </h3>
                      <p className="ms-auto pe-2">
                        <img
                          src="/images/svg/arrow-right.svg"
                          alt="arrow-right"
                        />
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3"></div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
