import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab8',
  templateUrl: 'tab8.page.html',
  styleUrls: ['tab8.page.scss']
})
export class Tab8Page {

  constructor(
  public router: Router
  ) {}

  goPage5(){
  	this.router.navigate(['tab9']);
  }
  goPage6(){
  	this.router.navigate(['tab10']);
  }
  goPage7(){
  	this.router.navigate(['tab11']);
  }
  goPage8(){
  	this.router.navigate(['tab12']);
  }
  goPage9(){
  	this.router.navigate(['tab13']);
  }

}
