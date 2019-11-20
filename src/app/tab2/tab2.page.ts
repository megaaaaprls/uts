import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  npm: string;
  data;
  constructor(
    public http: Http,
    public router: Router
  ) {}

  cari_data(){
    let navigationExtras = {
      queryParams: {
        npm: this.npm
      }
    };
    this.router.navigate(['tab4'], navigationExtras);
  }

}
