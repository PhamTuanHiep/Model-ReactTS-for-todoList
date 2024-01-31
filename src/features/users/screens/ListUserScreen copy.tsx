import React, { useEffect, useState } from 'react';
import { Input, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import instance from '../../../apis/apis';
import { UserApis } from '../constants/constant.endpoint';
import "./ListUserScreen.scss"

interface DataType {
id: string;
username: string;
email: string;
phone: string;
}

const columns: TableProps<DataType>['columns'] = [
{
    title: 'Name',
    dataIndex: 'username',
    key: 'name',
    render: (text) => <a>{text}</a>,
},
{
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
},
{
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
},
];


const ListUserScreen = () => {
    const { Search } = Input;
    const [data,setData]=useState<DataType[]>(
        [{
            id: '',
            username: "",
            email: "",
            phone: ""
        }]
    )
    const [user,setUser]= useState<DataType>({
        id:'',
        username: "",
        email: "",
        phone: ""
    })
    useEffect(()=>{
        getUsers()
    },[])

    // const instance = axios.create({
    //     baseURL: 'http://localhost:3001',
    //     timeout: 8000,
    //     headers: {
    //       Accept: 'application/json',
    //       // 'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
    //       // 'x-rapidapi-key': '<your-key-here>',
    //     },
    //   });
    
    // // Thêm interceptor trước khi gửi yêu cầu
    // instance.interceptors.request.use(
    //   (config) => {
    //     // Kiểm tra xem token đã tồn tại hay không
    //     const token = localStorage.getItem('token');
    //     console.log("ckeck token:",token)
    //     // Nếu token tồn tại, thêm nó vào header của yêu cầu
    //     if (token) {
    //       config.headers['Authorization'] = `Bearer ${token}`;
    //       console.log("add token:",config.headers)
    //     }
    //     return config;
    //   },
    //   (error) => {
    //     // Xử lý lỗi request
    //     return Promise.reject(error);
    //   }
    // );
    
    // // Sử dụng instance đã được cấu hình để gửi yêu cầu
    // instance.get('/example-endpoint')
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // ;
    const getUsers = async () => {
        const response = await instance.get(`${UserApis.USERS}`, {

        });
        const data=response.data
        const user= response.data[0]
        setData(data)
        setUser(user)
        console.log("response:",response);
        console.log("data:",data);
        console.log("user:",user);
        const token="nothing"
        // localStorage.setItem("token", token);

      };
      return(
        <div id='form_container'>
            <div className='title'>
                <span className='title-item'>Tra cứu tên user</span>
                <Search className='title-item' placeholder="input search text" enterButton="Search" size="large" 
                // value={point} loading={false} onChange={(e)=>searchCode(e)}
                />
                </div>

                <Table columns={columns} dataSource={data} />

        </div>

    )
}

export default ListUserScreen;