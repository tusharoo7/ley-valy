import { Injectable } from '@angular/core';
import { ApitwoService } from '../../services/api/apitwo.service';
@Injectable()
export class GlobalValueProvider {
  constructor(private apiservice: ApitwoService)
   {
    //console.log('Hello GlobalValueProvider Provider');
   }
  
   siginup(data) {
    let api_url = "customer/register";
    return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    }

    signin(data)
   {
     let api_url ="customer/login";
     return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }

   forgotpassworddata(data)
   {
    let api_url ="customer/forgotpwd";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
  
}
