// import axios, { AxiosInstance,AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

import axios from 'axios';
import { useEffect } from 'react';

const InfoUserScreen = ()=>{
  useEffect(()=>{
    getQuotes()

  })
  const QuotesClient = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 8000,
    headers: {
      Accept: 'application/json',
      // 'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com',
      // 'x-rapidapi-key': '<your-key-here>',
    },
  });
  // API Call
  const getQuotes = async () => {
    const response = await QuotesClient.get('users');
    console.log("data:",response);
  };
    return(
        <div>
            <h1>Info User Screen::::</h1>
        </div>
    )
}
export default InfoUserScreen