import {
    SIGNUP_PATIENT_REQUEST,
    SIGNUP_PATIENT_SUCCESS,
    SIGNUP_PATIENT_FAIL,
  } from '../constants/authConstance';
 import { loginApi } from '../../services/authservice';
  
  export const signupPatient = (user) => async (dispatch) => {
    try {
      dispatch({ type: SIGNUP_PATIENT_REQUEST });
      const response = await loginApi(user);
      console.log('resppppone======',response)
      dispatch({
        type: SIGNUP_PATIENT_SUCCESS,
        payload: response.data,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      dispatch({
        type: SIGNUP_PATIENT_FAIL,
        // payload: error
      });
      console.log('Error from signup patient:', error);
    }
  };
  