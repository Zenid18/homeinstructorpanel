import React from "react";

export default function CourseSidebar() {
  const courseItems = [
    {
      img: "course-img.png",
      title: "Course 1",
      subTitle: "Subtitle",
    },
    {
      img: "course-img.png",
      title: "Course 2",
      subTitle: "Subtitle",
    },
    {
      img: "course-img.png",
      title: "Course 3",
      subTitle: "Subtitle",
    },
    {
      img: "course-img.png",
      title: "Course 4",
      subTitle: "Subtitle",
    },
    {
      img: "course-img.png",
      title: "Course 5",
      subTitle: "Subtitle",
    },
  ];
  return (
    <div className="course-sidebar">
      <div className="course-heading p-2 ps-3 pe-2 border-bottom border-2 d-flex justify-content-between">
        <p className="">Course List</p>
        <div className="course-edit-box d-flex">
          <button className="border-0 bg-transparent">
            <img src="/images/svg/edit-icon.svg" alt="edit-icon" />
          </button>
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
        </div>
      </div>
      <div className="course-inner-box p-3 py-2">
        <div className="draft-dropdown">
          <div class="dropdown">
            <button
              class=" dropdown-toggle rounded-1 w-100 d-flex justify-content-between align-items-center p-2 pe-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p>
                <img
                  className="pe-1"
                  src="/images/svg/draft-icon.svg"
                  alt="draft-icon"
                />
                Draft
              </p>
              <span>
                <img src="/images/svg/arrow-down.svg" alt="draft-down" />
              </span>
            </button>
            <ul class="dropdown-menu w-100">
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
        </div>
        <div className="course-item-box py-2">
          {courseItems.map((val, i) => {
            return (
              <div
                className="course-item transition d-flex justify-content-between align-items-center py-2 rounded-1 px-2"
                key={i}
              >
                <div className="course-img-box d-flex align-items-center gap-2">
                  <div className="course-img  rounded-1 overflow-hidden">
                    <img src={`/images/${val.img}`} alt="course-img" />
                  </div>
                  <div className="course-title transition">
                    <p className="fw-500">{val.title}</p>
                    <span>{val.subTitle}</span>
                  </div>
                </div>
                <div className="course-action">
                  <button className="border-0 bg-transparent">
                    <img
                      className="transition"
                      src="/images/svg/download.svg"
                      alt="download"
                    />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img
                      className="transition"
                      src="/images/svg/edit-pen.svg"
                      alt="edit"
                    />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img
                      className="transition"
                      src="/images/svg/delete.svg"
                      alt="delete"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="course-lower-box d-flex flex-column gap-2">
          <button className="bg-transparent border border-2 rounded-1 p-2 w-100 gap-2 d-flex justify-content-start align-items-center">
            <img src="/images/svg/review.svg" alt="review" />
            <span>In Review</span>
          </button>
          <button className="bg-transparent border border-2 rounded-1 p-2 w-100 gap-2 d-flex justify-content-start align-items-center">
            <img src="/images/svg/review.svg" alt="review" />
            <span>Approved</span>
          </button>
          <button className="bg-transparent border border-2 rounded-1 p-2 w-100 gap-2 d-flex justify-content-start align-items-center">
            <img src="/images/svg/review.svg" alt="review" />
            <span>Rejected</span>
          </button>
        </div>
      </div>
    </div>
  );
}
