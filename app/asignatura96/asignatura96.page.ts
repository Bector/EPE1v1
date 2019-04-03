import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asignatura96',
  templateUrl: './asignatura96.page.html',
  styleUrls: ['./asignatura96.page.scss'],
})
export class Asignatura96Page implements OnInit {

  constructor(public navCtrl: NavController){}

  volver(){
    this.navCtrl.navigateForward('home');
  }

  ngOnInit() {
  }

}
