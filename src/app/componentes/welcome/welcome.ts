import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome implements OnInit
{
  visible=true

  ngOnInit() {
    setTimeout(() => this.visible=false, 5000)
  }
}
