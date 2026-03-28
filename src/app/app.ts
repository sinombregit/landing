import { Component, ElementRef, model, OnInit, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chronometer } from './componentes/chronometer/chronometer';
import { Contac } from './componentes/contac/contac';
import { Welcome } from './componentes/welcome/welcome';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Chronometer, Contac, Welcome],
  templateUrl: './app.html',
  styleUrl: './app.css'  
})
export class App implements OnInit
{
  protected title = 'landing';  
   showTitle=false 
   isShown = signal(false);
   showContact = model(false)
   num = signal(0);
  

  ngOnInit() {
    
  }

  toggle() {
    this.isShown.update((isShown) => !isShown);
  }

  
  
}
