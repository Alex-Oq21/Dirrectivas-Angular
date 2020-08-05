import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
    categorias: any=[{"codigo":1, "texto":"Tecnología"}, {"codigo":2, "texto":"Deportes"}, {"codigo":3, "texto":"Autos"}];
    noticias: any =[{ "categoria":{"codigo": 1, "texto":"Tecnología"},"titulo": "Desarrollo de software, el futuro de Medellín", "texto": "Medellín es una ciudad que le ha apostado a la innovación y la creación de empresa en la última década, pero aun así los índices de desempleo están creciendo. Una solución planteada por la actual Administración, académicos y la industria misma, es convertir la ciudad en un referente en el desarrollo de software.", "imagen":"https://www.elmundo.com/assets/uploads/files/9b138-educacion.jpg"},
    {
      "categoria": {
        "codigo": 1,
        "texto": "Tecnología"
      },
      "titulo": "Desarrollo de software, el futuro de Medellín",
      "texto": "Medellín es una ciudad que le ha apostado a la innovación y la creación de empresa en la última década, pero aun así los índices de desempleo están creciendo. Una solución planteada por la actual Administración, académicos y la industria misma, es convertir la ciudad en un referente en el desarrollo de software.",
      "imagen": "https://www.elmundo.com/assets/uploads/files/9b138-educacion.jpg"
    },
    {
      "categoria": {
        "codigo": 1,
        "texto": "Tecnología"
      },
      "titulo": "Desarrollo de software, el futuro de Medellín",
      "texto": "Medellín es una ciudad que le ha apostado a la innovación y la creación de empresa en la última década, pero aun así los índices de desempleo están creciendo. Una solución planteada por la actual Administración, académicos y la industria misma, es convertir la ciudad en un referente en el desarrollo de software.",
      "imagen": "https://www.elmundo.com/assets/uploads/files/9b138-educacion.jpg"
    },
    {
      "categoria": {
        "codigo": 1,
        "texto": "Tecnología"
      },
      "titulo": "Desarrollo de software, el futuro de Medellín",
      "texto": "Medellín es una ciudad que le ha apostado a la innovación y la creación de empresa en la última década, pero aun así los índices de desempleo están creciendo. Una solución planteada por la actual Administración, académicos y la industria misma, es convertir la ciudad en un referente en el desarrollo de software.",
      "imagen": "https://www.elmundo.com/assets/uploads/files/9b138-educacion.jpg"
    }];
    constructor() { }

  ngOnInit(): void {
  }

}
