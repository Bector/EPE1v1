import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ir32(){
    this.navCtrl.navigateForward('asignatura32');
  }
  ir64(){
    this.navCtrl.navigateForward('asignatura64');
  }
  ir96(){
    this.navCtrl.navigateForward('asignatura96');
  }
  ir128(){
    this.navCtrl.navigateForward('asignatura128');
  }
  volver(){
    this.navCtrl.navigateBack('home');
  }

  ngOnInit() {
  }

}
