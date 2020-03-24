import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

  //property binding
  public isDisable=true;

  // ngClass binding 
  public hasError= true;
  public hasNoError = true;
  public isSpecial = true;

  public specialClass={
    "text-success":!this.hasError,
    "text-special":this.isSpecial
  }

  // ngStyle binding

  public styleProp={
    color:"orange",
    fontWeight:"bold"
  }

  //event binding 
  public welcomeMsg ="";
  public welcomeMsg2="";
  public onClick(){
    this.welcomeMsg="Welcome to the Code Valley Ltd.";
  }

  //template reference:
  public email="";
  submit(value){
    this.email=value;
  }

  //two way binding prop 
  public userEmail="";


  constructor() { }
  ngOnInit(): void {
  }

}
