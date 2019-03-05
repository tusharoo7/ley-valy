import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaymentdetailsPage } from './paymentdetails';

@NgModule({
  declarations: [
    PaymentdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PaymentdetailsPage),
  ],
})
export class PaymentdetailsPageModule {}
