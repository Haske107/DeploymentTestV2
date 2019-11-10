import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
    RotationDegree = 0;

  ngOnInit() {
      setInterval(() => {
          this.RotationDegree += 10;
          console.log(this.RotationDegree);
          }, 1000);
  }

}