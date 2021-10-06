import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rand',
  templateUrl: './rand.component.html',
  styleUrls: ['./app.component.css']
})

export class RandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  result:any;

  randNum1 = Math.floor(Math.random() * 46) + 1;

  randNum2 = Math.floor(Math.random() * 46) + 1;

  randNum3 = Math.floor(Math.random() * 46) + 1;

  randNum4 = Math.floor(Math.random() * 46) + 1;

  randNum5 = Math.floor(Math.random() * 46) + 1;
  
  randNum6 = Math.floor(Math.random() * 46) + 1;


  clickedrandNum1(){
    this.result = this.randNum1;
  }

  clickedrandNum2(){
    this.result = this.randNum2;
  }

  clickedrandNum3(){
    this.result = this.randNum3;
  }

  clickedrandNum4(){
    this.result = this.randNum4;
  }

  clickedrandNum5(){
    this.result = this.randNum5;
  }

  clickedrandNum6(){
    this.result = this.randNum6;
  }

}
