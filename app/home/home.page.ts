import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public navCtrl: NavController){}

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
  irAcerca(){
    this.navCtrl.navigateForward('acerca');
  }
}
