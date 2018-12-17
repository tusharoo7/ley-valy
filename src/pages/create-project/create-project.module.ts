import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateProjectPage } from './create-project';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// imported custom services  and providers
import { HelperService } from '../../services/helper/helper.service';
import { GlobalValueProvider } from '../../providers/global-value/global-value';
import { ApitwoService } from '../../services/api/apitwo.service';

@NgModule({
  declarations: [
    CreateProjectPage,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    
    IonicPageModule.forChild(CreateProjectPage),
  ],
  providers: [
    
    HelperService,
    GlobalValueProvider,
    ApitwoService
  ]
})
export class CreateProjectPageModule {}
