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

  epe1n =parseInt(this.epe1);
  epe2n = parseInt(this.epe2);
  epe3n = parseInt(this.epe3);
  eva1n = parseInt(this.eva1);
  eva2n = parseInt(this.eva2);

  suma = ((this.epe1n*0.07)+(this.epe2n*0.14)+(this.epe3n*0.21)+(this.eva1n*0.14)+(this.eva2n*0.14));

  enviar(){
    this.navCtrl.navigateForward(`/respuesta/${this.suma}`);

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
