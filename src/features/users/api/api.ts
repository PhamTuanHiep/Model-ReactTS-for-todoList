import { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import instance from '../../../apis/apis';

const getAllUsers = async () => {
    // const config: AxiosRequestConfig = {
    //     headers: {
    //     'Accept': 'application/json',
    //     } as RawAxiosRequestHeaders,
    // };
    // try {
    //     const res: AxiosResponse = await instance.get(`/users`, config);
    //     console.log('res:',res)
    //     if(res.status==200){
    //         const dt= res.data
    //         console.log('data:',dt)
    //         return dt
    //     }else{
    //         console.log('error')
    //     }
    // } catch(err) {
    //     console.log(err);
    // }  
    // API Call

}
export {getAllUsers}

