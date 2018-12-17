import { Component } from '@angular/core';
import { ViewController,IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
/**
 * Generated class for the PreviewTilkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({name:'TilkPreviewPage'})
@Component({
  selector: 'page-preview-tilk',
  templateUrl: 'preview-tilk.html',
})
export class PreviewTilkPage {
  public url:any;
  constructor(public viewCtrl: ViewController ,public sanitizer: DomSanitizer ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewTilkPage');
    this.url=this.navParams.get('preview');
    console.log(this.url);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
