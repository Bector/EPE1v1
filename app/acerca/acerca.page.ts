import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.page.html',
  styleUrls: ['./acerca.page.scss'],
})
export class AcercaPage implements OnInit {

  constructor(public navCtrl: NavController){}

  volver(){
    this.navCtrl.navigateForward('home');
  }

  ngOnInit() {
  }

}
