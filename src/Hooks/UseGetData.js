// import baseUrl from "../API/BaseURL";

// const useGetData = async (url,params)=> {

//     const response = await baseUrl.get(url,params);
//     return response.data;
// }

// const useGetDataToken = async (url,params)=> {
//     console.log(localStorage.getItem("token"))
//     const config = {
//         Headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}
//     }
//     const response = await baseUrl.get(url,config);
//     return response.data;
// }

// export {useGetData,useGetDataToken};

import baseUrl from '../API/BaseURL'

const useGetData = async (url, parmas) => {

    const res = await baseUrl.get(url, parmas);
    return res.data;
}


const useGetDataToken = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.get(url, config);
    return res.data;
}

export { useGetData, useGetDataToken };