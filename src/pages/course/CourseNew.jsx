import React from "react";
import Layout from "../../layout/layout";
import { Link } from "react-router-dom";

export default function CourseNew() {
  return (
    <div className="course-new-main-box">
      <Layout courseLayout={true} heading="Create New Course">
        <Link
          to="/dashboard"
          className="back-btn d-flex align-items-center gap-2 text-decoration-none fw-600"
        >
          <img src="/images/svg/arrow-left.svg" alt="back-btn" />
          Back to Home
        </Link>
        <div className="row">
          <div className="col-md-9 px-0 px-md-2 mb-4 mb-md-0">
            <div className="course-new pb-4 border-top border-end border-bottom border-2  ">
              <div className="heading-box border-bottom p-2 px-3">
                <div className="heading d-flex justify-content-between">
                  <div className="heading-name fw-600">Title</div>
                  <div className="course-new-box d-flex">
                    <div class="dropdown">
                      <button
                        class="border-0 bg-transparent dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <img src="/images/svg/three-dots.svg" alt="edit-icon" />
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </div>
                    <button className="border-0 bg-transparent">
                      <img src="/images/svg/cross-grey.svg" alt="edit-icon" />
                    </button>
                  </div>
                </div>
                <div className="workflow-box d-flex justify-content-between flex-column flex-sm-row gap-2 gap-sm-0 align-items-center pt-3 pt-sm-2">
                  <div className="workflow-btn d-flex gap-3">
                    <button className="border-0 p-1 px-2 fw-500 white-text">
                      Cancel workflow
                    </button>
                    <button className="border-0 p-1 px-2 fw-500 white-text">
                      My Started workflows
                    </button>
                  </div>
                  <div className="add-new-course-btn">
                    <button className="border-0 bg-transparent fw-600">
                      + Add new course
                    </button>
                  </div>
                </div>
              </div>
              <div className="course-new-data-box mx-auto w-50 p-2  ">
                <div className="heading fw-600">Course type</div>
                <form action="">
                  <div className="course-selection d-flex gap-4 py-2">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Free
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label class="form-check-label" for="flexRadioDefault2">
                        Premium
                      </label>
                    </div>
                  </div>
                  <div className="form-data">
                    <div className="row">
                      <div className="col-12">
                        <div className="input-box py-2">
                          <input
                            className="border w-100 border-2 py-1 px-3"
                            type="text"
                            placeholder="$0.00"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-box py-2">
                          <label className="fw-600 pb-1" htmlFor="category">
                            Category
                          </label>
                          <select
                            class="border py-1 px-3 border-2 w-100"
                            aria-label="Default select example"
                          >
                            <option selected>Choose</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="input-box py-2">
                          <label className="fw-600 pb-1" htmlFor="category">
                            Sub-Category
                          </label>
                          <select
                            class="border py-1 px-3 border-2 w-100"
                            aria-label="Default select example"
                          >
                            <option selected>Choose</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-box py-2">
                          <label className="fw-600 pb-1" htmlFor="">
                            Title
                          </label>
                          <input
                            className="border w-100 border-2 py-1 px-3"
                            type="text"
                            placeholder="title"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-tab-box">
                          <div className="form-tab py-2">
                            <button className="border-0 bg-transparent">
                              Requirements
                            </button>
                            <button className="border-0 bg-transparent">
                              Descriptions
                            </button>
                            <button className="border-0 bg-transparent">
                              Who the course is for
                            </button>
                          </div>
                          <textarea className="w-100 border border-2 p-2" placeholder="Type here" rows={4}></textarea>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="course-selection d-flex gap-4 py-2">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault1"
                            >
                              Image
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              checked
                            />
                            <label
                              class="form-check-label"
                              for="flexRadioDefault2"
                            >
                              Video
                            </label>
                          </div>
                        </div>
                        <div className="input-box py-2">
                          <label className="fw-600 pb-1" htmlFor="">
                            Video Url
                          </label>
                          <input
                            className="border w-100 border-2 py-1 px-3"
                            type="file"
                            placeholder="title"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-btn d-flex gap-4 pt-5">
                          <button className="border-0 rounded-1">
                            Save Draft
                          </button>
                          <button className="border-0 rounded-1">
                            Preview
                          </button>
                          <button className="border-0 rounded-1">Next</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-3 px-0 px-md-2">
            <div className="task fw-600">Taks</div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
