import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  public userName="mazharul007";
  constructor() { }

  ngOnInit(): void {
  }

  getUserName(){
    return "Hello, " + this.userName;
  }

}
