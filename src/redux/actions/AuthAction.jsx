import {
  TEACHER_LOGIN_ERROR,
  TEACHER_LOGIN_LOADING,
  TEACHER_LOGIN_SUCCESS,
  TEACHER_PROFILE_ERROR,
  TEACHER_PROFILE_LOADING,
  TEACHER_PROFILE_SUCCESS,
} from "../constants/AuthActionType";

export const teacherLoginLoading = (isLoading) => {
  return {
    type: TEACHER_LOGIN_LOADING,
    isLoading: isLoading,
  };
};
export const teacherLoginSuccess = (isLoading) => {
  return {
    type: TEACHER_LOGIN_SUCCESS,
    isLoading: isLoading,
  };
};
export const teacherLoginError = (isLoading) => {
  return {
    type: TEACHER_LOGIN_ERROR,
    isLoading: isLoading,
  };
};
export const teacherProfileLoading = (isLoading) => {
  return {
    type: TEACHER_PROFILE_LOADING,
    isLoading: isLoading,
  };
};
export const teacherProfileSuccess = (isLoading) => {
  return {
    type: TEACHER_PROFILE_SUCCESS,
    isLoading: isLoading,
  };
};
export const teacherProfileError = (isLoading) => {
  return {
    type: TEACHER_PROFILE_ERROR,
    isLoading: isLoading,
  };
};

