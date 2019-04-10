import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { summaryFileName } from '@angular/compiler/src/aot/util';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-respuesta64',
  templateUrl: './respuesta64.page.html',
  styleUrls: ['./respuesta64.page.scss'],
})
export class Respuesta64Page implements OnInit {

  constructor(public ActivatedRoute: ActivatedRoute, public navCtrl: NavController, public alertController: AlertController) { }

  epe1n: any;
  epe2n: any;
  epe3n: any;
  eva1n: any;
  eva2n: any;
  eva3n:any;
  examen:any;
  mensaje:any;
  suma: any;
  sumadecimal:any;
  
 

  volver(){
    this.navCtrl.navigateBack('asignatura64');
  }

  async calcular(){
    this.epe1n = this.ActivatedRoute.snapshot.paramMap.get('epe1');
    this.epe2n = this.ActivatedRoute.snapshot.paramMap.get('epe2');
    this.epe3n = this.ActivatedRoute.snapshot.paramMap.get('epe3');
    this.eva1n = this.ActivatedRoute.snapshot.paramMap.get('eva1');
    this.eva2n = this.ActivatedRoute.snapshot.paramMap.get('eva2');
    this.eva3n = this.ActivatedRoute.snapshot.paramMap.get('eva3');

    //Formula con examen
    this.suma = ((this.epe1n * 0.07) + (this.epe2n * 0.14) + 
    (this.epe3n * 0.21) + (this.eva1n * 0.07) + (this.eva2n * 0.07)+(this.eva3n*0.14)+(this.examen*0.3));

    this.sumadecimal= this.suma.toFixed(1);

    //alerta aprobado
    const alert =  await this.alertController.create({
      header: 'Felicitaciones',
      subHeader: 'Aprobaste',
      message: 'tu promedio es: '+this.sumadecimal,
      buttons: ['OK']
    });
    //alerta reprobado
    const alert2 =  await this.alertController.create({
      header: 'Lo sentimos',
      subHeader: 'Reprobaste',
      message: 'Tu promedio es: '+this.sumadecimal,
      buttons: ['OK']
    });
if(this.examen>7){
  const alert3 =  await this.alertController.create({
    header: 'Lo sentimos',
    message: 'La nota no puede ser superior a 7.0',
    buttons: ['OK']
  });
await alert3.present();
}else{
if(this.sumadecimal<4.0){
  await alert2.present();
    }else{
      await alert.present();
    }
}
    


  }

  ngOnInit() {
    this.epe1n = this.ActivatedRoute.snapshot.paramMap.get('epe1');
    this.epe2n = this.ActivatedRoute.snapshot.paramMap.get('epe2');
    this.epe3n = this.ActivatedRoute.snapshot.paramMap.get('epe3');
    this.eva1n = this.ActivatedRoute.snapshot.paramMap.get('eva1');
    this.eva2n = this.ActivatedRoute.snapshot.paramMap.get('eva2');
    this.eva3n = this.ActivatedRoute.snapshot.paramMap.get('eva3');

    //Formula sin examen
    this.suma = ((this.epe1n * 0.1) + (this.epe2n * 0.2) + 
    (this.epe3n * 0.3) + (this.eva1n * 0.1) + (this.eva2n * 0.1)+(this.eva3n*0.2));

    this.sumadecimal= this.suma.toFixed(1);
    if(this.sumadecimal<5.5){
      this.mensaje="Te fuiste a examen con un: "+this.sumadecimal;
    }

  }

}
