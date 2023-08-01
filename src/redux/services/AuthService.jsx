import { teacherLoginError, teacherLoginLoading, teacherLoginSuccess } from "../actions/AuthAction";
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
            // storeData(storageKey.USER_DATA, JSON.stringify(response.data));
    }
    else{
           dispatch(teacherLoginSuccess(false));
    }
    return response;
  } catch (error) {
    // console.log(error, 'err-----------');
      dispatch(teacherLoginError(false));
    return { message: error };
  }
};
