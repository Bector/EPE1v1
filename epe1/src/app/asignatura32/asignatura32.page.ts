import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-asignatura32',
  templateUrl: './asignatura32.page.html',
  styleUrls: ['./asignatura32.page.scss'],
})
export class Asignatura32Page implements OnInit {

  constructor(public navCtrl: NavController, public alertController: AlertController){}
  epe1:any;
  epe2:any;
  epe3:any;
  eva1:any;
  eva2:any;
  sumadecimal:any;
  
  
  async enviar(){

    //Formula sin examen
    let suma = ((this.epe1 * 0.1) + (this.epe2 * 0.2) + (this.epe3 * 0.3) + (this.eva1 * 0.2) + (this.eva2 * 0.2));
    this.sumadecimal= suma.toFixed(1);
    

    const alert =  await this.alertController.create({
      header: 'Felicitaciones',
      subHeader: 'Aprobaste',
      message: 'Te eximes de examen con un: '+this.sumadecimal,
      buttons: ['OK']
    });
    
    if(this.epe1>=7 || this.epe2>=7 || this.epe3>=7){
      const alert =  await this.alertController.create({
        header: 'Error',
        subHeader: 'chupalochupalochupalo',
        message: 'Las notas no pueden ser superior a 7.0',
        buttons: ['OK']
      });
      await alert.present();

    }else{
      if(this.sumadecimal<5.5 || this.epe1<= 3.9 || this.epe2<= 3.9 || this.epe3<= 3.9){

        this.navCtrl.navigateForward(`/respuesta/${this.epe1}/${this.epe2}/${this.epe3}/${this.eva1}/${this.eva2}`);
      }else{
        await alert.present();
      }
      
    }
    
    
  }

  volver(){
    this.navCtrl.navigateBack('menu');
  }

  ngOnInit() {
  }

}
