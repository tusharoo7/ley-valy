import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DraftedFilePage } from './drafted-file';

@NgModule({
  declarations: [
    DraftedFilePage,
  ],
  imports: [
    IonicPageModule.forChild(DraftedFilePage),
  ],
})
export class DraftedFilePageModule {}
