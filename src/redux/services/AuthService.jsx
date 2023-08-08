import { changePasswordError, changePasswordLoading, changePasswordSuccess, teacherForgotError, teacherForgotLoading, teacherForgotSuccess, teacherLoginError, teacherLoginLoading, teacherLoginSuccess, teacherOtpError, teacherOtpLoading, teacherOtpSuccess, teacherProfileError, teacherProfileLoading, teacherProfileSuccess, teacherUpdateProfileError, teacherUpdateProfileLoading, teacherUpdateProfileSuccess } from "../actions/AuthAction";
import * as url from "../../constants/urls";
import * as Service from '../../constants/services'
import { storeData, getData, storageKey } from "../../constants/storage";

export const TeacherLogin = (body) => async (dispatch) => {
  dispatch(teacherLoginLoading(true));
  try {
    const response = await Service.post(url.TEACHER_LOGIN, "", body);
    if (response.success == true || response?.status == 200) {
      dispatch(teacherLoginSuccess(false));
      console.log(response, "LOGIN_API-----------");
      storeData(storageKey?.AUTH_TOKEN, response?.token);
      storeData(storageKey.USER_DATA, JSON.stringify(response.data));
    }
    else {
      dispatch(teacherLoginSuccess(false));
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(teacherLoginError(false));
    return { message: error };
  }
};
export const TeacherForgot = (body) => async (dispatch) => {
  dispatch(teacherForgotLoading(true));
  try {
    const response = await Service.post(url.TEACHER_FORGOT, "", body);
    if (response.success == true || response?.status == 200) {
      dispatch(teacherForgotSuccess(false));
      console.log(response, "Forgot_API-----------");
      storeData(storageKey?.AUTH_TOKEN, response?.token);
      storeData(storageKey.USER_DATA, JSON.stringify(response.data));
    }
    else {
      dispatch(teacherForgotSuccess(false));
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(teacherForgotError(false));
    return { message: error };
  }
};
export const TeacherOtp = (body) => async (dispatch) => {
  dispatch(teacherOtpLoading(true));
  try {
    const response = await Service.post(url.TEACHER_OTP, "", body);
    if (response.success == true || response?.status == 200) {
      dispatch(teacherOtpSuccess(false));
      console.log(response, "Otp_API-----------");
      storeData(storageKey?.AUTH_TOKEN, response?.token);
      storeData(storageKey.USER_DATA, JSON.stringify(response.data));
    }
    else {
      dispatch(teacherOtpSuccess(false));
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(teacherOtpError(false));
    return { message: error };
  }
};
export const TeacherProfile = () => async (dispatch) => {
  dispatch(teacherProfileLoading(true));
  const token = getData(storageKey.AUTH_TOKEN);
  try {
    const response = await Service.get(url.TEACHER_PROFILE, token,);
    if (response.success == true || response?.status == 200) {
      dispatch(teacherProfileSuccess(false));
      console.log(response, "PROFILE-----------");
      // storeData(storageKey.USER_DATA, JSON.stringify(response.data));
    }
    else {
       dispatch(teacherProfileSuccess(false));
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(teacherProfileError(false));
    return { message: error };
  }
};
export const updateTeacherProfile = (body) => async (dispatch) => {
  const token = getData(storageKey.AUTH_TOKEN);
  dispatch(teacherUpdateProfileLoading(true));
  try {
    const response = await Service.uploadImageApi(url.PROFILE_UPDATE, token, body);
    console.log("updateAccountDetails --", response);
    // dispatch both loading and success actions with the updated account details data
    dispatch(teacherUpdateProfileLoading(true));
    dispatch(teacherUpdateProfileSuccess(false, response?.data));
    // return the updated account details data
    return response;
  } catch (error) {
    console.log("updateAccountDetails error --", error);
    dispatch(teacherUpdateProfileError(false));
    return { message: error };
  }
};
export const TeacherChangePassword = (body) => async (dispatch) => {
  const token = getData(storageKey.AUTH_TOKEN);
  dispatch(changePasswordLoading(true));
  try {
    const response = await Service.post(url.CHANGE_PASS, token, body);
    if (response.success == true || response?.status == 200) {
      dispatch(changePasswordSuccess(false));
      console.log(response, "LOGIN_API-----------");
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
    dispatch(changePasswordError(false));
    return { message: error };
  }
};
