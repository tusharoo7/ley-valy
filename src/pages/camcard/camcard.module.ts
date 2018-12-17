import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamcardPage } from './camcard';

@NgModule({
  declarations: [
    CamcardPage,
  ],
  imports: [
    IonicPageModule.forChild(CamcardPage),
  ],
})
export class CamcardPageModule {}
