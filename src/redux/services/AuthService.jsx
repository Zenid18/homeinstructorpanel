import { changePasswordError, changePasswordLoading, changePasswordSuccess, teacherLoginError, teacherLoginLoading, teacherLoginSuccess, teacherProfileError, teacherProfileLoading, teacherProfileSuccess, teacherUpdateProfileError, teacherUpdateProfileLoading, teacherUpdateProfileSuccess } from "../actions/AuthAction";
import * as url from "../../constants/urls";
import * as Service from '../../constants/services'
import { storeData, getData, storageKey } from "../../constants/storage";

export const TeacherLogin = (body) => async (dispatch) => {
  dispatch(teacherLoginLoading(true));
  try {
    const response = await Service.post(url.TeacherLogin, "", body);
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
