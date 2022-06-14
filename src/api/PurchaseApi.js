import axiosClient from "./axiosClient";

const PurchaseApi = { 
    getAll : (params) => { 
        const url = '/combo'; 
        return axiosClient.get(url,{
            params,
            baseURL : "http://localhost:3000"
        })
    },
    getId : (id) => {
        const url = `/combo/${id}`;
        return axiosClient.get(url);
    }
}

export default PurchaseApi ; 