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
    } else if(g.value == "ciencias") {
      var opcaoSub = ["agricultura|Agricultura","anatomia|Anatomia","antropologia|Antropologia","arqueologia|Arqueologia","astronomia|Astronomia","botanica|Botânica","djurisprudencia|Direito ou Jurisprudência","ecologia|Ecologia","filosofia|Filosofia","fisica|Física","genetica|Genética","geografia|Geografia","geologia|Geologia","heraldica|Heráldica","herbalismo|Herbalismo","historia|História","literatura|Literatura","matematica|Matemática","meteorologia|Meteorologia","pedagogia|Pedagogia","psicologia|Psicologia","quimica|Química","sociologia|Sociologia","treligiao|Teologia ou Religião","ufologia|Ufologia","zoologia|Zoologia"];
    } else if(g.value == "cproibidas") {
      var opcaoSub = ["alquimia|Alquimia","anjos|Anjos","arkanun|Arkanun","astrologia|Astrologia","bruxas|Bruxas","buzios|Búzios","cmagia|Caminhos da Magia","demonios|Demônios","eden|Éden","elfos|Elfos","encantamentos|Encantamentos","infernun|Infernun","oculto|Oculto","paradisia|Paradísia","possessoes|Possessões","psionicismo|Psionicismo","rituais|Rituais","spiritum|Spiritum","tarot|Tarot","tmagia|Teoria da Magia","vastral|Viagem Astral"];
    } else if(g.value == "conducao") {
      var opcaoSub = ["automovel|Automóvel","onibus|Ônibus","caminhao|Caminhão","empilhadeira|Empilhadeira","guindaste|Guindaste","carruagem|Carruagem","motocicleta|Motocicleta","ccorrida|Carro de Corrida","mcorrida|Motocicleta de Corrida","helicoptero|Helicóptero","acomercial|Avião Comercial","amilitar|Avião Militar","oespacial|Ônibus Espacial","lancha|Lancha","iate|Iate","veleiro|Veleiro","ncargueiro|Navio Cargueiro","ultraleve|Ultraleve","adelta|Asa Delta"];
    } else if(g.value == "engenharia") {
      var opcaoSub = ["aeronautica|Aeronáutica","alimentos|Alimentos","civil|Civil","computacao|Computação","demolicoes|Demolições","eletrica|Elétrica","eletronica|Eletrônica","materiais|Materiais","mecanica|Mecânica","mecatronica|Mecatrônica","naval|Naval","quimica|Química"];
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
