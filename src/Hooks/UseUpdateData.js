// import baseUrl from "../API/BaseURL";

// const useUpdateData = async (url, params) => {
//   const response = await baseUrl.put(url, params);
//   return response.data;
// };
// const UseUpdateDataImage = async (url, params) => {
//   const config = {
//     Headers: { "Content-Type": "multipart/form-data" },
//   };
//   const response = await baseUrl.put(url, params, config);
//   return response;
// };
// export { UseUpdateDataImage, useUpdateData };

import baseUrl from '../API/BaseURL'


const UseUpdateDataImage = async (url, parmas) => {
    const config = {
        headers: { "Content-Type": "multipart/form-data", Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.put(url, parmas, config);
    console.log(res.status)
    return res;
}

const useUpdateData = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.put(url, parmas, config);
    return res;
}

export { UseUpdateDataImage, useUpdateData };