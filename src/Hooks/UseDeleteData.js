// import baseUrl from "../API/BaseURL";

// const useDeleteData = async (url,params)=> {
//     const response = await baseUrl.delete(url,params);
//     return response.data;
// }
// export default useDeleteData;


import baseUrl from '../API/BaseURL'

const useDeleteData = async (url, parmas) => {
    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    }
    const res = await baseUrl.delete(url, parmas, config);
    return res.data;
}

export default useDeleteData;