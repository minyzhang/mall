import axios from "axios";

const ajax = axios.create({
  baseURL: "https://api.github.com/",
  timeout: 1000,
});
// ajax.interceptors.request.use((res)=>{},(err)=>{})
// ajax.interceptors.response.use((res)=>{

// },(err)=>{})

export const getList = (url) => (ajax.get(`users/${url}/repos`));
export const getInfo = (url) => (ajax.get(`repos/${url}/contents`));
