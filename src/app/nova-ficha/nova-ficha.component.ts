import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'novaFicha',
  templateUrl: './nova-ficha.component.html',
  styleUrls: ['./nova-ficha.component.css']
})
export class NovaFichaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  adicionaSubgrupo(grupo, subgrupo) {
    var g = (<HTMLSelectElement>document.getElementById(grupo));
    var sg = (<HTMLSelectElement>document.getElementById(subgrupo));

    sg.innerHTML = "";

    if(g.value == "idioma") {
      var opcaoSub = ["portugues|Portugues","ingles|Ingles"];
    } else if(g.value == "ciencias") {
      var opcaoSub = ["herbalismo|Herbalismo","historia|História"];
    } else if(g.value == "cproibidas") {
      var opcaoSub = ["alquimia|Alquimia","ocultismo|Ocultismo"];
    }

    for(var opcao in opcaoSub) {
      var par = opcaoSub[opcao].split("|");
      var novaOpcao = <HTMLOptionElement>document.createElement("option");
      novaOpcao.value = par[0];
      novaOpcao.innerHTML = par[1];
      sg.options.add(novaOpcao);
    }
  }

}
