import { HttpGetClient, HttpResponse } from "../../Data/Http/Httpclient"

export class HttpClientSpy implements HttpGetClient{

    successResponse?: HttpResponse
    errorResponse?: HttpResponse
     
    url?:string
    body?: { [key: string]: any; }
    headers?: { [key: string]: any; }
    query?: { [key: string]: any; }

    async get({ url, body, headers,query }: { url: string; body?: { [key: string]: any; } | undefined; headers?: { [key: string]: any; },query?: { [key: string]: any; } }): Promise<HttpResponse> {
        return new Promise((resolve,reject) => {

            this.url = url
            this.body = body
            this.headers = headers
            this.query = query
            
            if(!!this.successResponse) return resolve(this.successResponse)
            return reject(this.errorResponse)
        })
    }
}