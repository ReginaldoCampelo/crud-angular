import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crud-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Reginaldo Campelo';
  imageUrl = '/assets/images/me.jpg';
  imageDesc = 'Essa é minha foto';
  buttonText = 'Pintar Nome';
  textRed = false;
  bgColor = 'black';
  textColor = 'white';
  bgBorder = 'none';
  imgWidth = 600;
  textInput = '';
  twoText = false;


  constructor() { }

  ngOnInit(): void {
  }

  retornarNome(){
    return this.text
  }

  clicou(value: any){
    this.text = 'Regin Campelo'
    console.log("clicou aqui", value);
  }

  clicar(){
    console.log('Clicado');
    this.textRed = true;
  }

  clicado(){
    console.log('Mudou cor do text two way data binding')
    this.twoText = true;
  }

}
