import {
  CHANGE_PASSWORD_ERROR,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_SUCCESS,
  TEACHER_LOGIN_ERROR,
  TEACHER_LOGIN_LOADING,
  TEACHER_LOGIN_SUCCESS,
  TEACHER_PROFILE_ERROR,
  TEACHER_PROFILE_LOADING,
  TEACHER_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
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



export const teacherUpdateProfileLoading = (isLoading) => {
  return {
    type: UPDATE_PROFILE_LOADING,
    isLoading: isLoading,
  };
}

export const teacherUpdateProfileSuccess = (isLoading, data) => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    isLoading: isLoading,
    data: data,
  };
};
export const teacherUpdateProfileError = (isLoading) => {
  return {
    type: UPDATE_PROFILE_ERROR,
    isLoading: isLoading,
  };
}

export const changePasswordLoading = (isLoading) => {
  return {
    type: CHANGE_PASSWORD_LOADING,
    isLoading: isLoading,
  };
}
export const changePasswordSuccess = (isLoading, data) => {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    isLoading: isLoading,
    data: data,
  };
};
export const changePasswordError = (isLoading) => {
  return {
    type: CHANGE_PASSWORD_ERROR,
    isLoading: isLoading,
  };
}


