import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asignatura128',
  templateUrl: './asignatura128.page.html',
  styleUrls: ['./asignatura128.page.scss'],
})
export class Asignatura128Page implements OnInit {

  constructor(public navCtrl: NavController){}

  volver(){
    this.navCtrl.navigateForward('home');
  }

  ngOnInit() {
  }

}
