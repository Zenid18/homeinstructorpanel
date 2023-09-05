import React from "react";
import { TeacherForgot } from "../../redux/services/AuthService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function Forgot() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
    }),
    onSubmit: async () => {
      const body = {
        email_id: formik?.values?.email,
      }; 
      const res = await dispatch(TeacherForgot(body));
      if (res?.status == 200 || res?.success == true) {
        toast.success(res?.message);
        navigate('/otp', { state: formik?.values?.email });
      } else {
        toast.error(res?.message);
      }
      formik.setSubmitting(false);
    },
  });
  return (
    // MAIN DIV
    <div className="login-section vw-100 vh-100 d-flex align-items-start justify-content-center">
      <div className="login-box pt-5 mt-2">
        <div className="login-img text-center pb-5">
          <img src="/images/logo.png" alt="logo" />
        </div>
        {/* INNER-BOX */}
        <div className="login-inner-box rounded-4 p-4 py-5 mx-3 p-sm-5">
          <h2 className="fw-600 text-center pb-4">Forgot Password</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <div className="input-box mb-4 position-relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                  className={`w-100 py-2 ps-4 rounded-pill transition ${formik.touched.email && formik.errors.email
                    ? "error-border"
                    : ""
                    }`}
                />
                <span className="pass-btn pass-btn rounded-pill pe-3 d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="15"
                    viewBox="0 0 25 21"
                    fill="var(--d-grey)"
                  >
                    <path d="M22.5 20.5791H2.5C1.83696 20.5791 1.20107 20.3157 0.732233 19.8469C0.263392 19.378 0 18.7421 0 18.0791V2.97035C0.0280408 2.32634 0.303761 1.71805 0.769598 1.27248C1.23543 0.826905 1.85538 0.578493 2.5 0.579103H22.5C23.163 0.579103 23.7989 0.842495 24.2678 1.31134C24.7366 1.78018 25 2.41606 25 3.0791V18.0791C25 18.7421 24.7366 19.378 24.2678 19.8469C23.7989 20.3157 23.163 20.5791 22.5 20.5791ZM2.5 5.4141V18.0791H22.5V5.4141L12.5 12.0791L2.5 5.4141ZM3.5 3.0791L12.5 9.0791L21.5 3.0791H3.5Z" />
                  </svg>
                </span>
                {formik.touched.email && formik.errors.email && (
                  <span className="text-danger fs-6">
                    {formik.errors.email}
                  </span>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="login-btn white-text fw-600 w-100  rounded-pill mt-2 border-0"
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
