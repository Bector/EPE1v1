import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asignatura32',
  templateUrl: './asignatura32.page.html',
  styleUrls: ['./asignatura32.page.scss'],
})
export class Asignatura32Page implements OnInit {

  constructor(public navCtrl: NavController){}

  volver(){
    this.navCtrl.navigateForward('home');
  }

  ngOnInit() {
  }

}
