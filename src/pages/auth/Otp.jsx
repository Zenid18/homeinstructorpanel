import React, { useState } from "react";
import { TeacherLogin } from "../../redux/services/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import OtpInput from "react-otp-input";
import * as Yup from "yup";

export default function Otp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    const [otp, setOtp] = useState("");
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
      console.log(body);
      const res = await dispatch(TeacherLogin(body));
      if (res?.status == 200 || res?.success == true) {
        toast.success(res?.message);
        navigate("/dashboard", { replace: true });
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
          <h2 className="fw-600 text-center pb-2">OTP Verification</h2>
          <p className="verified-para text-center">
            Type the email verification code we’ve sent you
          </p>
          <form onSubmit={formik.handleSubmit}>
            <p className="fw-600 text-center py-2 fs-3">00:42</p>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              containerStyle="justify-content-center otp-box pb-3"
              inputType="tel"
              shouldAutoFocus
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
            <button
              type="submit"
              onClick={() => navigate("/verified")}
              className="login-btn white-text fw-600 w-100  rounded-pill mt-2 border-0"
            >
              Verify
            </button>
            <p className="text-center my-3 text-body-tertiary">or</p>
            <div className="send-btn text-center">
              <button className="border-0 bg-transparent fw-600">
                Send again
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
