import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.page.html',
  styleUrls: ['./respuesta.page.scss'],
})
export class RespuestaPage implements OnInit {

  constructor( public ActivatedRoute : ActivatedRoute) { }

  suma : any;




  ngOnInit() {
    this.suma=this.ActivatedRoute.snapshot.paramMap.get('suma');
  }

}
