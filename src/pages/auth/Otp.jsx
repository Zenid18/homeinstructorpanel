import React, { useEffect, useState } from "react";
import { TeacherForgot, TeacherOtp } from "../../redux/services/AuthService";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import OtpInput from "react-otp-input";
import * as Yup from "yup";
export default function Otp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60)
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
      else {
        setIsSendButtonDisabled(true)
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleSendAgain = async () => {
    const body = {
      email_id: data,
    }
    const res = await dispatch(TeacherForgot(body))
    if (res?.status == 200 || res?.success == true) {
      toast?.success(res?.message)
      setTimer(60);
      setIsSendButtonDisabled(false);
    }
    else {
      toast?.error(res?.message)
    }

  };

  const handleOtp = async (event) => {
    event?.preventDefault()
    if (!otp) {
      toast?.error("Otp is required")
    }
    else {
      const body = {
        email_id: data,
        otp: otp
      }
      const res = await dispatch(TeacherOtp(body));
      console.log(res, '????')
      if (res?.status == 200 || res?.success == true) {
        toast.success(res?.message);
        navigate("/verified", { state: data });
      } else {
        toast.error(res?.message);
      }
    }

  }



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
          <form  >
            <p className="fw-600 text-center py-2 fs-3">
              {Math.floor(timer / 60).toString().padStart(2, "0")}:
              {(timer % 60).toString().padStart(2, "0")}</p>
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
              type="button"
              onClick={() => handleOtp()}
              className="login-btn white-text fw-600 w-100  rounded-pill mt-2 border-0"
            >
              Verify
            </button>
            {isSendButtonDisabled ? <p className="text-center my-3 text-body-tertiary">or</p> : ""}
            {isSendButtonDisabled ?
              <div className="send-btn text-center">
                <button className="border-0 bg-transparent fw-600"
                  onClick={handleSendAgain} >
                  Send again
                </button>
              </div>
              : ""}
          </form>
        </div>
      </div>
    </div>
  );
}
