import {endPoint,instance} from "../utils/endpoint";
const loginApi = async (user) => {
  return await instance({
    method: 'POST',
    url: 'https://healthcare-backend-3jr5.onrender.com/v1/patient/signup',
    data: user,
  });
};


export { loginApi };
