import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListProjectsPage } from './list-projects';
import { FileUploadPage } from '../file-upload/file-upload';

@NgModule({
  declarations: [
    ListProjectsPage
  ],
  
  imports: [
    IonicPageModule.forChild(ListProjectsPage),
  ],
})
export class ListProjectsPageModule {}
