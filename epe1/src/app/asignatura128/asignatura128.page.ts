import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-asignatura128',
  templateUrl: './asignatura128.page.html',
  styleUrls: ['./asignatura128.page.scss'],
})
export class Asignatura128Page implements OnInit {

  constructor(public navCtrl: NavController, public alertController: AlertController) { }
  epe1: any;
  epe2: any;
  epe3: any;
  epe4: any;
  eva1: any;
  eva2: any;
  eva3: any;
  eva4: any;
  promeva:any;
  sumadecimal: any;
  evaaa: any;
  asd: any;


  async enviar() {

    //Formula sin examen
    let suma = ((this.epe1 * 0.1) + (this.epe2 * 0.15) + (this.epe3 * 0.25) + (this.epe4 * 0.25) + (this.eva1 * 0.05) + (this.eva2 * 0.05) + (this.eva3 * 0.05) + (this.eva4 * 0.1));
    this.sumadecimal = suma.toFixed(1);

    this.promeva = (this.eva1 * 0.05) + (this.eva2 * 0.05) + (this.eva3 * 0.05) + (this.eva4 * 0.1);
    this.evaaa = ((this.promeva) * 0.75) / 0.25;
    this.asd = this.promeva + this.evaaa;

    const alert = await this.alertController.create({
      header: 'Felicitaciones',
      subHeader: 'Aprobaste',
      message: 'Te eximes de examen con un: ' + this.sumadecimal,
      buttons: ['OK']
    });

    if (this.epe1 > 7 || this.epe2 > 7 || this.epe3 > 7 || this.epe4 > 7 || this.eva1 > 7 || this.eva2 > 7 || this.eva3 > 7 || this.eva4 > 7) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las notas no pueden ser superior a 7.0',
        buttons: ['OK']
      });
      await alert.present();

    } else {
      if (this.sumadecimal < 5.5 || this.epe1 <= 3.9 || this.epe2 <= 3.9 || this.epe3 <= 3.9 || this.epe4 <= 3.9 || this.asd< 4) {

        this.navCtrl.navigateForward(`/respuesta128/${this.epe1}/${this.epe2}/${this.epe3}/${this.epe4}/${this.eva1}/${this.eva2}/${this.eva3}/${this.eva4}`);
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
