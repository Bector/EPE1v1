import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-asignatura96',
  templateUrl: './asignatura96.page.html',
  styleUrls: ['./asignatura96.page.scss'],
})
export class Asignatura96Page implements OnInit {

  constructor(public navCtrl: NavController, public alertController: AlertController) { }
  epe1: any;
  epe2: any;
  epe3: any;
  eva1: any;
  eva2: any;
  eva3: any;
  promeva:any;
  sumadecimal: any;
  evaaa: any;
  asd: any;

  async enviar() {

    //Formula sin examen
    let suma = ((this.epe1 * 0.1) + (this.epe2 * 0.2) + (this.epe3 * 0.3) + (this.eva1 * 0.1) + (this.eva2 * 0.1) + (this.eva3 * 0.2));
    this.sumadecimal = suma.toFixed(1);

    this.promeva=(this.eva1 * 0.1) + (this.eva2 * 0.1) + (this.eva3 * 0.2);
    this.evaaa=((this.promeva)*0.6)/0.4;
    this.asd=this.promeva+this.evaaa;

    const alert = await this.alertController.create({
      header: 'Felicitaciones',
      subHeader: 'Aprobaste',
      message: 'Te eximes de examen con un: ' + this.asd,
      buttons: ['OK']
    });

    if (this.epe1 > 7 || this.epe2 > 7 || this.epe3 > 7 || this.eva1 > 7 || this.eva2 > 7 || this.eva3 > 7) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las notas no pueden ser superior a 7.0',
        buttons: ['OK']
      });
      await alert.present();

    } else {

      if (this.sumadecimal < 5.5 || this.epe1 <= 3.9 || this.epe2 <= 3.9 || this.epe3 <= 3.9 || this.asd< 4.0) {

        this.navCtrl.navigateForward(`/respuesta96/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}/${this.eva3}`);
      } else {
        await alert.present();
      }

    }
  
  }

  volver() {
    this.navCtrl.navigateBack('menu');
  }


  ngOnInit() {
  }

}
