import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController} from 'ionic-angular';

import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';

/**
 * Generated class for the TilkCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tilk-create',
  templateUrl: 'tilk-create.html',
})
export class TilkCreatePage {
  public toppings :any ;
  public newdata=[] ;
  public projectid :any ;
  public link:any;

  constructor( public viewCtrl: ViewController , public globalservice: GlobalValueProvider,public helperservice : HelperService , public navCtrl: NavController, public navParams: NavParams) {
    this.projectid = navParams.get('projectid') ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TilkCreatePage');
  }
 
  generatelink()
  {
   // console.log(this.toppings);
    var myJSON = JSON.stringify(this.toppings);
    var obj = JSON.parse(myJSON);
    for (let i=0;i<=obj.length; i++)
    { 
       this.newdata.push({name: obj[i]});
    }
    this.newdata.pop();
    let xyz = JSON.stringify(this.newdata);
    console.log(obj_one);


    let jsonStr2 = '{"persons":'+xyz+'}';
    //console.log(jsonStr2);
    var obj_one = JSON.parse(jsonStr2);
    //console.log(obj_one);
    let loadingPop = this.helperservice.createLoadingBar();
    loadingPop.present();

    this.globalservice.generatelink(obj_one,this.projectid).subscribe(
      (response) =>
             {
              loadingPop.dismiss();
               this.toppings="";
              if(response.length != 0) 
              {
                 console.log(response.contents);
                 this.link=response.contents;
             } 
            else
             {
                     this.helperservice.sendalertmessage('bottom','Link Not Generated');
                     this.navCtrl.push('list_projects');
             }
                 
                //  if (response[0].id!="")
                //    {
                //     loadingPop.dismiss();
                //     this.helperservice.sendalertmessage('bottom','File added sucessfully with this project ');
                //     this.navCtrl.push('list_projects');
                //    }
                 
               }, 
       
      (err) =>  {
                   this.helperservice.sendalertmessage('bottom',"oops..! internal error occurred!");
                });   
   
  }
  

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
