import {
  SIGNUP_PATIENT_FAIL,
  SIGNUP_PATIENT_REQUEST,
  SIGNUP_PATIENT_SUCCESS,
} from '../constants/authConstance';

const initialState = {
  userData: {},
  loading: false,
  error: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_PATIENT_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_PATIENT_SUCCESS:
      return { ...state, userData: action.payload, loading: false };
    case SIGNUP_PATIENT_FAIL:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default AuthReducer;




   
  // const authReducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     // case SET_USER_INFO:
  //     //   return { ...state, user: action.payload };
      
  //     case SIGNUP_PATIENT_REQUEST:
  //       return {
  //         ...state,
  //         loading: { ...state.loading, isSighnupLoading: true },
  //         error: {},
  //       };
  //     case SIGNUP_PATIENT_SUCCESS:
  //       return {
  //         ...state,
  //         loading: { ...state.loading, isSighnupLoading: false },
  //         error: {},
  //       };
  //     case SIGNUP_PATIENT_FAIL:
  //       return {
  //         ...state,
  //         loading: { ...state.loading, isSighnupLoading: false },
  //         error: action.payload,
  //       };
  //   //   case FORGOT_PASSWORD_REQUEST:
  //   //     return {
  //   //       ...state,
  //   //       loading: { ...state.loading, isForgotPasswodLoading: true },
  //   //       error: {},
  //   //     };
  //   //   case FORGOT_PASSWORD_SUCCESS:
  //   //     return {
  //   //       ...state,
  //   //       loading: { ...state.loading, isForgotPasswodLoading: false },
  //   //       error: {},
  //   //     };
  //   //   case FORGOT_PASSWORD_FAIL:
  //   //     return {
  //   //       ...state,
  //   //       loading: { ...state.loading, isForgotPasswodLoading: false },
  //   //       error: action.payload,
  //   //     };
  //   }
  //   return state;
  // };
  