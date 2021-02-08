export interface HttpResponse {
    statusCode:number
    responseBody:{
        [key:string]:any
    }
}

export interface HttpPostClient {
    post({url,body,headers}:{url:string,body:{[key:string]:any},headers?:{[key:string]:any}}): Promise<HttpResponse>
}

export interface HttpGetClient {
    get({url,headers,query}:{url:string,headers?:{[key:string]:any},query?:{[key:string]:any}}): Promise<HttpResponse>
}
