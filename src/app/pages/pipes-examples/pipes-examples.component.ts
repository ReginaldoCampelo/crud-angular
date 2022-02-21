import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud-pipes-examples',
  templateUrl: './pipes-examples.component.html',
  styleUrls: ['./pipes-examples.component.css']
})
export class PipesExamplesComponent implements OnInit {
  number = 0;
  text = 'OI, Eu sOu GoKu!';
  date = new Date;
  pessoa = {
    nome: 'Reginaldo',
    idade: 28,
    profissao: 'Programador'
  }

  constructor() { }

  ngOnInit(): void {
  }

  mudarValor(){
    this.number = 125.5888
  }

  mudarText(){
    this.text = "eU nÃo SoU GokU!"
  }

  mudarJson(){
    this.pessoa.nome = "Goku",
    this.pessoa.idade = 5000
    this.pessoa.profissao = "Lutador"
  }

}
