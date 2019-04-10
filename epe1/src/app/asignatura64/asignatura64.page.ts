import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-asignatura64',
  templateUrl: './asignatura64.page.html',
  styleUrls: ['./asignatura64.page.scss'],
})
export class Asignatura64Page implements OnInit {

  constructor(public navCtrl: NavController){}

  volver(){
    this.navCtrl.navigateBack('menu');
  }

  ngOnInit() {
  }

}
