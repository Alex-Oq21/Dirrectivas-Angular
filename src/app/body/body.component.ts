import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    categorias: any=[{"codigo":0, "texto": "todos"},{"codigo":1, "texto":"Tecnología"}, {"codigo":2, "texto":"Deportes"}, {"codigo":3, "texto":"Autos"}];
    temporal : any;
    noticias: any =[{ "categoria":{"codigo": 1, "texto":"Tecnología"},"titulo": "Desarrollo de software, el futuro de Medellín", "texto": "Medellín es una ciudad que le ha apostado a la innovación y la creación de empresa en la última década, pero aun así los índices de desempleo están creciendo. Una solución planteada por la actual Administración, académicos y la industria misma, es convertir la ciudad en un referente en el desarrollo de software.", "imagen":"assets/codigo-fuente.jpg"},

    {
      "categoria": {
        "codigo": 2,
        "texto": "Deportes"
      },
      "titulo": "las hazañas deportivas más importantes para Colombia",
      "texto": "El 31 de mayo de 1989, por primera vez en la historia, un equipo colombiano se coronaba campeón de la Copa Libertadores. Nacional, dirigido por Francisco Maturana, venció 5-4 a Olimpia en los penales, y entregó la primera copa internacional a un equipo colombiano. 15 años más tarde, exactamente el 1 de julio de 2004, Once Caldas orientado por Luis Fernando Montoya venció a Boca Juniors en Manizales 2-0, en los penales. En 2016, Atlético Nacional ganó su segunda Libertadores, esta vez frente a Independiente del Valle, con global 2-1. La más reciente hazaña libertadora fue el 2 de diciembre de 2018 con Atlético Huila, entregando la primera copa al país en el fútbol femenino. En penales derrotó 5-3 a Santos de Brasil.",
      "imagen": "assets/colombiaD.jpg"
    },
    {
      "categoria": {
        "codigo": 3,
        "texto": "Autos"
      },
      "titulo": "DESFILE DE AUTOS CLÁSICOS Y ANTIGUOS",
      "texto": "El Desfile de Autos Clásicos y Antiguos es un Museo Itinerante donde autos de colección recorren y adornan las calles de Medellín, dando la oportunidad de disfrutar del colorido, la elegancia, los detalles y un poco de historia a los asistentes locales y turistas. Es realizado en el marco de la Feria de las Flores, fiesta cultural, artística y social de encuentro ciudadano, realizada en agosto cada año en la ciudad de Medellín – Colombia. En 2001",
      "imagen": "assets/autosm.jpg"
    }];
    constructor() { 
      this.temporal = this.noticias;
    }

  ngOnInit(): void {
  }

  eventoControl(evento){
    if(evento.target.value == 0){
      this.noticias = this.temporal;
    }else{
      this.noticias = this.temporal.filter((item) =>{
        return item.categoria.codigo == evento.target.value;
      })
    }
  } 
}
