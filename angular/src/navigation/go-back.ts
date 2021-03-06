import { Directive, HostListener } from '@angular/core';
import { NavController } from './ion-nav-controller';

@Directive({
  selector: '[goBack]',
})
export class GoBack {

  constructor(
    private navCtrl: NavController,
  ) {}

  @HostListener('click')
  onClick() {
    this.navCtrl.setGoback();
  }
}
