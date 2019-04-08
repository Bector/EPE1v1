import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';


@Component({
  selector: 'app-asignatura32',
  templateUrl: './asignatura32.page.html',
  styleUrls: ['./asignatura32.page.scss'],
})
export class Asignatura32Page implements OnInit {

  constructor(public navCtrl: NavController){}
  epe1:any;
  epe2:any;
  epe3:any;
  eva1:any;
  eva2:any;

  
  enviar(){
    this.navCtrl.navigateForward(`/respuesta/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}`);

  }

  volver(){
    this.navCtrl.navigateForward('home');
  }

  numeros(){
  try{

  }catch(e){
    
  };}
  ngOnInit() {
  }

}
