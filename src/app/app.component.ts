import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  
  ngOnInit(): void {
    
  }
  isLoginClicked: boolean;
  isRegisterClicked: boolean;
  inputedValue: string = '';
  valueToSend: string = '';

  flats = [
    {
      city: "Lviv",
      sqM: 80,
      price: 100000
    },
    {
      city: "Kyiv",
      sqM: 60,
      price: 110000
    },
    {
      city: "Odesa",
      sqM: 120,
      price: 125000
    },
    {
      city: "Ternopil",
      sqM: 60,
      price: 40000
    }
  ]

  loginClc() {
    this.isLoginClicked = !this.isLoginClicked;
    this.isRegisterClicked = false;
  }


  registerClc() {
    this.isRegisterClicked = !this.isRegisterClicked;
    this.isLoginClicked = false;
  }


  input(event) {
    this.inputedValue = event.target.value;
  }

  show() {
    this.valueToSend = this.inputedValue;
  }
}
