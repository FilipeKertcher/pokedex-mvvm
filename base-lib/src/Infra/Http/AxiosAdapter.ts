import { HttpGetClient, HttpResponse } from "../../Data/Http/Httpclient";
import axios from 'axios'

export default class HttpAxiosAdapter implements HttpGetClient {
    async get({ url, headers, query }: { url: string; headers?: { [key: string]: any; } | undefined; query?: { [key: string]: any; } | undefined; }): Promise<HttpResponse> {
       try {
           const response = await axios.get(url,{headers,params:query})

           return {
               statusCode:response.status,
               responseBody:response.data
           }
       } catch (error) {
           throw {
               statusCode:error.status,
               responseBody:error.data
           }
       }
    }

}