import { Injectable } from '@angular/core';
import { ApitwoService } from '../../services/api/apitwo.service';

@Injectable()
export class GlobalValueProvider {
  constructor(private apiservice: ApitwoService)
   {
    //console.log('Hello GlobalValueProvider Provider');
   }
  
   siginup(data) {
    let api_url = "customerRegistration";
    return this.apiservice.post_genreral(api_url, JSON.stringify(data));
    }
    signup_in_tilkee(data)
   {
     let api_url ="users";
     return this.apiservice.add_user_in_tilkee(api_url,JSON.stringify(data));
   }
    signin(data)
   {
     let api_url ="customerLogin";
     return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   customersociallogin(data)
   {
    let api_url ="customerSocialLogin";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   
   forgotpassworddata(data)
   {
    let api_url ="customerForgotPassword";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   changepassworddata(data)
   {
    let api_url ="customerChangePassword";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }

   update_profile(data)
   {
    let api_url ="customerUpdateProfile";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   addproject(data)
   {
    let api_url ="projects";
    return this.apiservice.apps_tilkee(api_url,JSON.stringify(data));
   }

   listproject(data)
   {
    let api_url ="";
    return this.apiservice.list_project_tilkee(api_url,data);
   }
  
   listtilk(projectid)
   {
    
    let api_url ="projects/"+projectid+"/tokens";
    return this.apiservice.list_tilkee(api_url);
   }

   listtilkeestat(projectid)
   {
     let api_url = "projects/"+projectid+"/connexions" ;
     return this.apiservice.list_tilkee(api_url);
   }
   listtilkstat(projectid)
   {
    
    let api_url ="projects/"+projectid+"/tokens";
    return this.apiservice.list_tilkee(api_url);
   }
   statsofaproject(projectid)
   {
    let api_url ="projects/"+projectid+"/stats?tokens=";
    return this.apiservice.list_tilkee(api_url);
   }
   addfile(data)
   {
    let api_url ="items";
    return this.apiservice.add_file_tilkee(api_url,data);
   }
   addfiletoproject(data)
   {
     data['project_id']
    let api_url ="projects/"+data['project_id']+"/add_items";
    return this.apiservice.add_file_to_project(api_url,data);
   }

   generatelink(data,projectid)
   {
    let api_url ="/projects/"+projectid+"/tokens";
    return this.apiservice.generatelinks(api_url,data);
   }

   detailsofaconnection(project_id,id_connexion)
   {
    let api_url ="projects";
    return this.apiservice.detailsofaconnection(api_url,project_id,id_connexion);
   }

   
   // camacrd oriented api 

   add_bisnes_card(data)
   {
    let api_url ="addEditBusinessCard";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   list_bisnes_card(data)
   {
    let api_url ="businessCardList";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   get_card_details(data)
   {
    let api_url ="cardDetails";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   camcarddata(data)
   {
     let api_url = "BCR_VCF2?user=rajesh@rpigroup.com&pass=AQ6TRHJ3PCMBCPGQ&lang=1&json=1&size=632249";
     return this.apiservice.camcardresponse(api_url,data);
   }

   tilk_creted_search(projectid,searchname)
   {
    let api_url ="projects";
    return this.apiservice.serachtilkee(api_url,projectid,searchname);
   }

   add_tilkee_Project_Details_localserver(data)
   {
    let api_url ="addProjectDetails";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   // hunter and lusha oriented api
   search_hunter_contact(data)
   {
    let api_url ="email-finder";
    return this.apiservice.hunterresponse(api_url,JSON.stringify(data));
   }

   search_lusha_contact(data)
   {
    let api_url ="person";
    return this.apiservice.lusharesponse(api_url,JSON.stringify(data));
   }
   delete_card(data)
   {
    let api_url ="deleteBusinessCard";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   sendurltocustomer(data)
   {
    let api_url ="sendProjectLink";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }

   callcamcardapi(data)
   {
    let api_url ="callCamCardAPI";
    return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
   calllushaandhunter(data)
   {
     let api_url ="callLushaHunterAPI";
     return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }

   calllogout(data)
   {
     let api_url ="customerLogout";
     return this.apiservice.post_genreral(api_url,JSON.stringify(data));
   }
}
