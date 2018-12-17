import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BussinesscardAddPage } from './bussinesscard-add';

//import { ImagePicker } from '@ionic-native/image-picker';
//import { Base64 } from '@ionic-native/base64';
//import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    BussinesscardAddPage
  ],
  imports: [
    IonicPageModule.forChild(BussinesscardAddPage)
  ],
  
  providers: [
  //  ImagePicker,
   // Base64,
   // Camera
  ]
})
export class BussinesscardAddPageModule {}
