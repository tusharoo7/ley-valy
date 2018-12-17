import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UnreadedFilePage } from './unreaded-file';

@NgModule({
  declarations: [
    UnreadedFilePage,
  ],
  imports: [
    IonicPageModule.forChild(UnreadedFilePage),
  ],
})
export class UnreadedFilePageModule {}
