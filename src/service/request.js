import axios from "axios"

const ajax = axios.create({
    baseURL:'https://api.github.com/users',
    timeout:1000,
})
// ajax.interceptors.request.use((res)=>{},(err)=>{})
// ajax.interceptors.response.use((res)=>{
    
// },(err)=>{})

export const getList = (url ) => {
    return new Promise((resolve, reject) => {
        ajax.get({
            url,
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}