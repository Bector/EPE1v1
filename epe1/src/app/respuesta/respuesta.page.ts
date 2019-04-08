import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.page.html',
  styleUrls: ['./respuesta.page.scss'],
})
export class RespuestaPage implements OnInit {

  constructor(public ActivatedRoute: ActivatedRoute) { }

  epe1n: any;
  epe2n: any;
  epe3n: any;
  eva1n: any;
  eva2n: any;
 // examen:any;

  suma: any;
  resto: any;
  promedio:any;


  ngOnInit() {
    this.epe1n = this.ActivatedRoute.snapshot.paramMap.get('epe1');
    this.epe2n = this.ActivatedRoute.snapshot.paramMap.get('epe2');
    this.epe3n = this.ActivatedRoute.snapshot.paramMap.get('epe3');
    this.eva1n = this.ActivatedRoute.snapshot.paramMap.get('eva1');
    this.eva2n = this.ActivatedRoute.snapshot.paramMap.get('eva2');

    this.suma = ((this.epe1n * 0.1) + (this.epe2n * 0.2) + (this.epe3n * 0.3) + (this.eva1n * 0.2) + (this.eva2n * 0.2));

    //if(this.suma<5.5){
      //this.suma = ((this.epe1n * 0.07) + (this.epe2n * 0.14) + (this.epe3n * 0.21) + (this.eva1n * 0.14) + (this.eva2n * 0.14));

   // }



    this.resto=((this.suma)*0.3)/0.7;
    this.promedio=this.resto+this.suma;




  }

}
