import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { MyAccountPage } from '../my-account/my-account';
import {ProjectStatPage} from '../project-stat/project-stat';

/**
 * Generated class for the TrackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-track',
  templateUrl: 'track.html',
})
export class TrackPage {
  public projects_list :any ;
  p: number = 1;
  itemsPerPage : any = 10 ; 
  remaing_item :any="";
  display_total_number_of_records : any ='';
  total_record :any=''
  readstatus :any;
  dynamicpageheading :string=''
  constructor(public navCtrl: NavController, public navParams: NavParams,public globalservice: GlobalValueProvider,public helperservice : HelperService ) {
  this.readstatus = this.navParams.get('read');
 if (this.readstatus==1)
 {
   this.dynamicpageheading ='Tracked file read'
 }
 else{
  this.dynamicpageheading ='Tracked file not  read'
 }
  console.log(this.readstatus);
  }

  ionViewWillEnter(){
    //  window.location.reload(); 
    let loadingPop = this.helperservice.createLoadingBar();
  loadingPop.present();
      this.globalservice.listproject(this.readstatus).subscribe((resp) => {
        loadingPop.dismiss();
        console.log(resp.contents);
        this.total_record =resp.total;
        if(this.itemsPerPage>this.total_record)
        {
          this.display_total_number_of_records = this.total_record
        }
        else
        {
          this.display_total_number_of_records = this.itemsPerPage
        }
        
        this.remaing_item = this.total_record -this.display_total_number_of_records
        if (resp.contents!="")
                    {
                      this.projects_list = resp.contents;
                    }
                    else
                     {
                     // this.helperservice.sendalertmessage('bottom','No Projects Created');
                    }
   
        //this.navCtrl.push('tilkee_api_integration');
          
   }, (err) => 
   {
   this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
   });   
    }
    ionViewDidLoad() {
  
      console.log('ionViewDidLoad ListProjectsPage');
  
      this.globalservice.listproject(this.readstatus).subscribe((resp) => {
       console.log(resp.contents);
       
       if (resp.contents!="")
                   {
                     this.projects_list = resp.contents;
                   }
                   else
                    {
                     this.helperservice.sendalertmessage('bottom','No Projects Created');
                   }
  
       //this.navCtrl.push('tilkee_api_integration');
         
  }, (err) => 
  {
  this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
  });   
  
    }
 
    pageChanged($event)
    {
     

      console.log(`${start} to ${end} of ${totalItemsCount}`);
      
      
      console.log(this.display_total_number_of_records);
      console.log();
      console.log();
      if($event==1)
      {
        this.display_total_number_of_records = this.itemsPerPage
      }
      else
      {
        var totalItemsCount = this.total_record;
        var numberOfItemsPerPage = this.itemsPerPage;
        var page = $event;
  
        var numberOfPages = Math.floor((totalItemsCount + numberOfItemsPerPage - 1) / numberOfItemsPerPage);
        var start = (page * numberOfItemsPerPage) - (numberOfItemsPerPage - 1);
        var end = Math.min(start + numberOfItemsPerPage - 1, totalItemsCount);
        this.display_total_number_of_records=end;
        // this.display_total_number_of_records = $event*this.itemsPerPage;
        // this.remaing_item = this.total_record - this.display_total_number_of_records ;
        // if(this.remaing_item < this.display_total_number_of_records)
        // {
        //   this.display_total_number_of_records =this.total_record 
        //  // this.remaing_item = this.total_record -this.display_total_number_of_records
        // }
        // else
        // {
        //   this.display_total_number_of_records = $event*this.itemsPerPage
        //   this.remaing_item = this.total_record -this.display_total_number_of_records
        // }
      }
     
      console.log($event);
    }
// go to satistic page
    getstat(projectid,projectname)
    {
      //this.navCtrl.push('projectstat',{projectid:projectid,projectname:projectname})
      this.navCtrl.push(ProjectStatPage,{projectid:projectid,projectname:projectname})
    }
// back to dashboard 
    got_to_home()
{
  const index = this.navCtrl.getActive().index;
  this.navCtrl.remove(0, index);
  this.navCtrl.setRoot(MyAccountPage)
}
}
