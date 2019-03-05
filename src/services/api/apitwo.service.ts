import { Injectable } from '@angular/core';
import { 
          HttpClient , 
          HttpHeaders,
          HttpParams,
          HttpErrorResponse,
  } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import { Constants } from "../constants";
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/map';
 import 'rxjs/add/operator/catch';
const API_BASE_URL = Constants.API_BASE_URL;
const TILKEE_BASE_URL =  Constants.TILKEE_BASE_URL;
const CAMCARD_BASE_URL =  Constants.CAMCARD_BASE_URL ;
const HUNTER_BASE_URL = Constants.HUNTER_BASE_URL ;
const LUSHA_BASE_URL = Constants.LUSHA_BASE_URL ;
//export interface Payload { }
@Injectable()
export class ApitwoService {

  private endPoint: string;
  private endtPoint: string;
  private endcPoint: string;
  private endhPoint: string;
  private endlPoint: string;
  public tilkee_registartion_email :string=""
  constructor(
    private http: HttpClient
  ) {}

  public handleError(error: HttpErrorResponse) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
    }
  setApiEndpoint(route: string): void {
    this.endPoint = API_BASE_URL + "/" + route;
  }

  getApiEndPoint(): string {
    return this.endPoint;
  }

  getDefaultHeaders(): HttpHeaders {
    let defaultHeaders = new HttpHeaders({
            'Content-Type':  'application/x-www-form-urlencoded;charset=UTF-8'
          });
    
    return defaultHeaders;
  }
// for tilkee 
  setTilkeeEndpoint(route: string): void {
    this.endtPoint = TILKEE_BASE_URL + "/" + route;
  }

  getTilkeeEndPoint(): string {
    return this.endtPoint;
  }

  // for camcard
  setCamcardEndpoint(route: string): void {
    this.endcPoint = CAMCARD_BASE_URL + "/" + route;
  }

  getCamcardEndPoint(): string {
    return this.endcPoint;
  }

  // for hunter
  setHunterEndpoint(route: string): void {
    this.endhPoint = HUNTER_BASE_URL + "/" + route  ;
  }

  getHunterEndPoint(): string {
    return this.endhPoint;
  }
// for lusha
setLushaEndpoint(route: string): void {
  this.endlPoint = LUSHA_BASE_URL + "/" + route  ;
}

getLushaEndPoint(): string {
  return this.endlPoint;
}

getLushaDefaultHeaders(): HttpHeaders {
  let defaultHeaders = new HttpHeaders({
    'api_key': '802484646f648fb5030ab214348cb537'
  });
  
  return defaultHeaders;
}
  getCamcardDefaultHeaders(): HttpHeaders {
    let defaultHeaders = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'cache-control':'no-cache'
    });
    
    return defaultHeaders;
  }

  getTilkeeDefaultHeaders(): HttpHeaders {
    if(localStorage.getItem("customerEmail")=="" || localStorage.getItem("customerEmail")=="" || localStorage.getItem("customerEmail")==undefined )
    {
      this.tilkee_registartion_email = "hello@ley-valy.com"
    }
    else
    {
      this.tilkee_registartion_email  = localStorage.getItem("customerEmail")
    }
    let defaultHeaders = new HttpHeaders({
      'Accept':'application/json',
      'Accept-Encoding':'gzip, deflate, compress',
      'Authorization':'Bearer c9925f845f0e0a2ec4d0f74f51007f9ed7ebbee79ba8d8304eae775e2df0739a',
      'x-tilk-ref':'ley-valy',
      'USER_EMAIL':this.tilkee_registartion_email,
      'content-type':'application/json'
          });
    
    return defaultHeaders;
  }


  post_genreral(route: string, paramsPayload: string): Observable<any>
  {
    
    //console.log("hurray its worked fine !");
    this.setApiEndpoint(route);
    let urlSearchParams = new URLSearchParams();
    let paylod = JSON.parse(paramsPayload);
    for(let key in paylod)
    urlSearchParams.append(key, paylod[key]);
    let body = urlSearchParams.toString();
    this.setApiEndpoint(route);
    console.log(this.getApiEndPoint());
    console.log(body);
    //console.log(this.getDefaultHeaders());
    let httpRequestOptions = { headers: this.getDefaultHeaders() };
    return this.http.post(this.getApiEndPoint(), body, httpRequestOptions).catch(this.handleError);
  }

  add_user_in_tilkee(route: string, paramsPayload: string): Observable<any>
  {
    let paylod = JSON.parse(paramsPayload);
    let testjson  = {
                      "first_name": paylod['customerFirstName'] ,
                      "last_name": paylod['customerLastName'] ,
                      "email": paylod['customerEmail'],
                     // "company_attributes":paylod['customerEnterprise']
                     "company_attributes": {
                      "name": "",
                      "cgvs": ""
                    }
                    }
     this.setTilkeeEndpoint(route);
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    return this.http.post(this.getTilkeeEndPoint(), testjson, httpRequestOptions).catch(this.handleError);
  }
  apps_tilkee(route: string, paramsPayload: string): Observable<any>
  {
    let paylod = JSON.parse(paramsPayload);
    let projectname = paylod['name'] ;
    let archived_at = paylod['archived_at'] ;
    var stringValue = paylod['can_be_downloaded'];
    var externalid = paylod['external_id'];
    var boolValue = (stringValue =="true"); 
    var duration = parseInt(paylod['duration']) ;
    let testjson  = {
      "name": projectname ,
      "archived_at": archived_at ,
      "can_be_downloaded": boolValue,
      "external_id": externalid,
      "duration": duration
  }
     this.setTilkeeEndpoint(route);
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    return this.http.post(this.getTilkeeEndPoint(), testjson, httpRequestOptions).catch(this.handleError);
  }

  list_project_tilkee(route: string,data)
  {
    this.setTilkeeEndpoint(route);
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
     console.log(this.getTilkeeEndPoint());
     let tokenstring ="";
     if(data=='1')
     {
        tokenstring = 'tokens?consulted=true'
     }
     if(data=='0')
     {
       tokenstring = 'tokens?consultable=false&nb_connections=0&interest=0'
     }
    return this.http.get(this.getTilkeeEndPoint()+tokenstring, httpRequestOptions).catch(this.handleError);
  }

  list_tilkee(route: string)
  {
     this.setTilkeeEndpoint(route);
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
     console.log(this.getTilkeeEndPoint());
    return this.http.get(this.getTilkeeEndPoint(), httpRequestOptions).catch(this.handleError);
  }


  serachtilkee(route: string,projectid:any,searchname:any)
  {
    this.setTilkeeEndpoint(route);
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    return this.http.get(this.getTilkeeEndPoint()+'/'+projectid+'/'+'tokens?search='+searchname, httpRequestOptions).catch(this.handleError);
  }
  
  detailsofaconnection(route: string,projectid:any,id_connexion:any)
  {
    this.setTilkeeEndpoint(route);
    ///:project_id/connexions/:id_connexion/
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    return this.http.get(this.getTilkeeEndPoint()+'/'+projectid+'/'+'connexions/'+id_connexion, httpRequestOptions).catch(this.handleError);
  }
  statsofaproject(route: string,projectid:any)
  {
    this.setTilkeeEndpoint(route);
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    return this.http.get(this.getTilkeeEndPoint()+'/'+projectid+'/'+'stats/', httpRequestOptions).catch(this.handleError);
  }
  add_file_tilkee(route: string,  paramsPayload: any): Observable<any>
  {
    let paylod = paramsPayload; 
   // console.log(paylod);
    this.setTilkeeEndpoint(route);
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    return this.http.post(this.getTilkeeEndPoint(),paylod, httpRequestOptions).catch(this.handleError);
  }

  add_file_to_project(route: string,  paramsPayload: any): Observable<any>
  {
    let paylod = paramsPayload; 
   // console.log(paylod);

   let linkfiledata = {
      "items" : [{ 
        "id": paylod['file_id'],
        "signable": false,
        "title": paylod['title']
        }]
    }
    this.setTilkeeEndpoint(route);
    console.log(this.setTilkeeEndpoint(route));
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    return this.http.post(this.getTilkeeEndPoint(),linkfiledata, httpRequestOptions).catch(this.handleError);
  }

  generatelinks(route: string,  paramsPayload: any): Observable<any>
  {

    let paylod = paramsPayload; 
   // console.log(paylod);

    this.setTilkeeEndpoint(route);
  //  console.log(this.setTilkeeEndpoint(route));
     let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    return this.http.post(this.getTilkeeEndPoint(),paylod, httpRequestOptions).catch(this.handleError);
  }
  camcardresponse(route: string,  paramsPayload: File): Observable<any>
  {

  const uploadData = new FormData();
  uploadData.append('myFile', paramsPayload, paramsPayload.name);
  console.log(uploadData);
  let url = "https://bcr1.intsig.net/BCRService/BCR_VCF2?user=rajesh@rpigroup.com&pass=AQ6TRHJ3PCMBCPGQ&lang=1&json=1"
  
  //let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
  //let options       = new RequestOptions({ headers: headers });
    // this.setCamcardEndpoint(route);
    
     let httpRequestOptions = { headers: this.getCamcardDefaultHeaders() };
  //   console.log(httpRequestOptions);
    return this.http.post(url,uploadData).catch(this.handleError);
  }

  hunterresponse(route: string,  paramsPayload: any): Observable<any>
  {
    let paylod = JSON.parse(paramsPayload);
   let params = new HttpParams().set('domain', paylod['domain']).set('api_key', 'db2cbd3570a277bb707ff455d9cb30ef611c4e27').set('last_name',paylod['last_name']).set('first_name', paylod['first_name']);
    
    this.setHunterEndpoint(route)

    //https://api.hunter.io/v2/email-finder?domain=rpigroup.com&first_name=rajesh&last_name=dalmia&api_key=db2cbd3570a277bb707ff455d9cb30ef611c4e27
    console.log(params.toString());
    console.log(this.getHunterEndPoint());
    return this.http.get(this.getHunterEndPoint(),{params}).catch(this.handleError);
      
    
  }
  lusharesponse(route: string,  paramsPayload: any): Observable<any>
  {
    this.setLushaEndpoint(route);
    //.set('api_key', 'db2cbd3570a277bb707ff455d9cb30ef611c4e27').
    let paylod = JSON.parse(paramsPayload);
    const headers = new HttpHeaders().set("api_key", "802484646f648fb5030ab214348cb537").set("Access-Control-Allow-Origin", "*").set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE").set("Access-Control-Allow-Credentials", "true");
    let params = new HttpParams().set('firstName', paylod['first_name']).set('lastName',paylod['last_name']).set('company', paylod['domain']);
    return this.http.get(this.getLushaEndPoint(),{headers:headers,params:params}).catch(this.handleError);
  }

  tilkee_directupload(route: string,paramsPayload: any,titel:any): Observable<any>
  {
       console.log(paramsPayload);
       this.setTilkeeEndpoint(route);
       let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
       //  console.log(this.setTilkeeEndpoint(route));
    let params = new HttpParams().set('filename', titel+'.'+paramsPayload)
         // console.log(params);
           //console.log(this.getTilkeeEndPoint());
         return this.http.get(this.getTilkeeEndPoint(),{headers:this.getTilkeeDefaultHeaders(),params:params}).catch(this.handleError);
  }

  tilkee_directupload_parttwo( filePayload: File,paramspayload: any): Observable<any>
  {
    console.log(filePayload);
    console.log(paramspayload);
    const uploadData = new FormData();
    uploadData.append('key',  paramspayload.key);
    uploadData.append('acl',  paramspayload.acl);
    uploadData.append('policy',  paramspayload.policy);
    uploadData.append('Signature', paramspayload.signature);
    uploadData.append('AWSAccessKeyId', paramspayload.AWSAccessKeyId);
    uploadData.append('success_action_status', "201");
    uploadData.append('file', filePayload, filePayload.name);
   
    
   
    
    
    return this.http.post("https://datatlk.tilkee.com",uploadData,{ responseType: 'text'}).catch(this.handleError);
    // this.setTilkeeEndpoint(route);
    // let uploadcontent = [{
    //                         "name": "my new file",
    //                         "from_url": true,
    //                         "s3_url": "https://datatlk.s3.amazonaws.com/b25c3fe62390%2Fcompanies%2F17323%2Fuploads%2Fd69e85500c12-reactjs_tutorial.pdf",
    //                         "type": "file",
    //                         "external_id": "external_id"
    //   }]
    //   let httpRequestOptions = { headers: this.getTilkeeDefaultHeaders() };
    //   console.log(uploadcontent);
    //   console.log(this.getTilkeeEndPoint());
    // return this.http.post(this.getTilkeeEndPoint(),uploadcontent, httpRequestOptions).catch(this.handleError);
        
  }
}
