import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {

  public isCollapsed = false;

   public collapsed(event: any): void {
     console.log(event);
   }

   public expanded(event: any): void {
     console.log(event);
   }
  constructor() { }

  ngOnInit() {
  }

}
