import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {


  // ngIf directive example 
  public displayName=true;

  //ngSwitch 
  public color="green";
  
  // ngFor
  public colors =['red','blue','green'];
  
  constructor() { }
  public 
  ngOnInit(): void {
  }

}
