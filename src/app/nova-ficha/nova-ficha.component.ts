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

    if(g.value == "animais") {
      var opcaoSub = ["tanimais|Treinamento de Animais (0)","montaria|Montaria (AGI)","doma|Doma (0)","veterinaria|Veterinária (0)"];
    } else if(g.value == "artes") {
      var opcaoSub = ["arquitetura|Arquitetura (0)","atuacao|Atuação (CAR)","canto|Canto (CAR)","carte|Crítica de Arte (PER)","culinaria|Culinária (PER)","danca|Dança (AGI)","dpintura|Desenho e Pintura (DEX)","escapismo|Escapismo (AGI)","escultura|Escultura (DEX)","fotografia|Fotografia (PER)","ilusionismo|Ilusionismo (DEX)","imusicais|Instrumentos Musicais (DEX)","joalheria|Joalheria (DEX)","prestidigitacao|Prestidigitação (DEX)","redacao|Redação (INT)"];
    } else if(g.value == "artifice") {
      var opcaoSub = ["artesanato|Artesanato","armeiro|Armeiro","marceneiro|Marceneiro","ferreiro|Ferreiro","coureiro|Coureiro","costureiro|Costureiro"];
    } else if(g.value == "aobjetos") {
      var opcaoSub = ["antiguidades|Antiguidades","gemas|Gemas","mvaliosos|Metais Valiosos (Ourives)","oarte|Obras de Arte"];
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
