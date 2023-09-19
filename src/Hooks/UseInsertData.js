// import baseUrl from "../API/BaseURL";

// const UseInsertData = async (url, params) => {
//   const response = await baseUrl.post(url, params);
  
//   return response;
// };

// const UseInsertDataImage = async (url, params) => {
//     const config = {
//         Headers:{"Content-Type":"multipart/form-data"}
//     }
//   const response = await baseUrl.post(url, params,config);
//   return response;
// };

// export { UseInsertData, UseInsertDataImage };

import baseUrl from '../API/BaseURL'


const UseInsertDataImage = async (url, parmas) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.post(url, parmas, config);
    return res;
}

const UseInsertData = async (url, parmas) => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    }
    const res = await baseUrl.post(url, parmas, config);
    return res;
}

export { UseInsertData, UseInsertDataImage };
