import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass,NgStyle,UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [FormsModule,NgClass,NgStyle,UpperCasePipe,LowerCasePipe,CurrencyPipe,DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imageUrl = 'https://www.borrowmydoggy.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F4ij0poqn%2Fproduction%2Fe24bfbd855cda99e303975f2bd2a1bf43079b320-800x600.jpg&w=1080&q=80'
  size = 200
  color = "blue"
  doubleSize(){
    return this.size * 2;
  }

  showMessage(){
    alert("Hello thesst");
  }

  username = "admin"

  data = [
    {id:1, name: "thesst",salary: 25000,active: "6/20/2025"},
    {id:2, name: "kong",salary: 15000,active: "10/8/2025"},
    {id:3, name: "long",salary: 6000,active: "01/12/2025"},
  ]

  clearData(){
    this.data = [];
  }

  isActive = false;
  changMode(){
    this.isActive = !this.isActive
  }
  myStyle={
    'background':'blue',
    'color':'white',
    'font-size.px': 20,
  }
}
