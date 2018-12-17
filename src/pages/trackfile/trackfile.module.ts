import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackfilePage } from './trackfile';

@NgModule({
  declarations: [
    TrackfilePage,
  ],
  imports: [
    IonicPageModule.forChild(TrackfilePage),
  ],
})
export class TrackfilePageModule {}
