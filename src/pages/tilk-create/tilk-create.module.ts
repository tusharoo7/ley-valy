import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TilkCreatePage } from './tilk-create';

import {IonTagsInputModule} from "ionic-tags-input";

@NgModule({
  declarations: [
    TilkCreatePage,
  ],
  imports: [
    IonicPageModule.forChild(TilkCreatePage),IonTagsInputModule
  ],
})
export class TilkCreatePageModule {}
