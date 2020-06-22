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
    } else if(g.value == "esportes") {
      var opcaoSub = ["acrobacia|Acrobacia (AGI)","alpinismo|Alpinismo (AGI)","arremesso|Arremesso (DEX)","basquete|Basquete (DEX)","caca|Caça (PER)","canoagem|Canoagem (CON)","corrida|Corrida (CON)","esqui|Esqui (AGI)","futebol|Futebol (AGI)","mergulho|Mergulho (CON)","natacao|Natação (AGI)","paraquedismo|Paraquedismo (AGI)","pesca|Pesca (PER)","salto|Salto (AGI)","sornamental|Salto Ornamental (AGI)","tenis|Tênis (DEX)","voleibol|Voleibol (DEX)"];
    } else if(g.value == "etiqueta") {
      var opcaoSub = ["clero|Clero","comercial|Comercial","diplomacia|Diplomacia","mnegro|Mercado Negro","nobreza|Nobreza","submundo|Submundo"];
    } else if(g.value == "falsificacao") {
      var opcaoSub = ["documentos|Documentos","esculturas|Esculturas","fotografias|Fotografias","joalherias|Joalherias","pinturas|Pinturas"];
    } else if(g.value == "idiomas") {
      var opcaoSub = ["alemao|Alemão","arabe|Árabe","aramaico|Aramaico","catalao|Catalão","chines|Chinês","espanhol|Espanhol","frances|Francês","grego|Grego","hindu|Hindu","ingles|Inglês","italiano|Italiano","japones|Japonês","latim|Latim","polones|Polonês","portugues|Português","russo|Russo"];
    } else if(g.value == "informatica") {
      var opcaoSub = ["computacao|Computação","internet|Internet","hacker|Hacker","manutencao|Manutenção","programacao|Programação"];
    } else if(g.value == "jogos") {
      var opcaoSub = ["cartas|Cartas (PER)","tabuleiro|Tabuleiro (INT)","videogames|Videogames (DEX)"];
    } else if(g.value == "manipulacao") {
      var opcaoSub = ["empatia|Empatia (CAR)","hipnose|Hipnose (0)","impressionar|Impressionar (CAR)","interrogatorio|Interrogatório (INT)","intimidacao|Intimidação (WILL)","labia|Lábia (CAR)","lideranca|Liderança (CAR)","manha|Manha/Streetwise (CAR)","seducao|Sedução (CAR)","tortura|Tortura (INT)"];
    } else if(g.value == "mcombate") {
      var opcaoSub = ["larmas|Luta com duas Armas (25)","lcegas|Luta às Cegas (20)","refem|Refém (15)","mimpressionar|Manobras para Impressionar (20)","imobilizacao|Imobilização (20)","cmembros|Chaves de Membros (20)"];
    } else if(g.value == "medicina") {
      var opcaoSub = ["cirurgia|Cirurgia (DEX)","psocorros|Primeiro Socorros (INT)","oftalmologia|Oftalmologia (INT)","dermatologia|Dermatologia (INT)","psiquiatria|Psiquiatria (INT)","cardiologia|Cardiologia (INT)","neurologia|Neurologia (INT)","urologia|Urologia (INT)","ortopedia|Ortopedia (INT)","oncologia|Oncologia (INT)","gastrologia|Gastrologia (INT)","otorrinolaringologia|Otorrinolaringologia (INT)","veterinaria|Veterinária (INT)"];
    } else if(g.value == "mineracao") {
      var opcaoSub = ["cristais|Cristais","gemas|Gemas","metais|Metais"];
    } else if(g.value == "negociacao") {
      var opcaoSub = ["barganha|Barganha (CAR)","burocracia|Burocracia (INT)","contabilidade|Contabilidade (INT)","marketing|Marketing (INT)"];
    } else if(g.value == "sobrevivencia") {
      var opcaoSub = ["deserto|Deserto","floresta|Floresta","gelo|Gelo","montanha|Montanha","planicie|Planície","selva|Selva"];
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
