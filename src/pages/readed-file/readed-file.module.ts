import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadedFilePage } from './readed-file';

@NgModule({
  declarations: [
    ReadedFilePage,
  ],
  imports: [
    IonicPageModule.forChild(ReadedFilePage),
  ],
})
export class ReadedFilePageModule {}
