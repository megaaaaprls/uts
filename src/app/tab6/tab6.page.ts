import { Component } from '@angular/core';


import { Http } from '@angular/http';
import { LoadingController, ToastController } from '@ionic/angular';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page {

  npm: string;
  password: string;
  nama_user: string;
  jurusan: string;
  data;

  constructor(
    public http: Http,
    public toastCtrl: ToastController
  ) { }

  async showToast(toastMsg: string) {
    const toast = await this.toastCtrl.create({
      message: toastMsg,
      duration: 2000
    });
    toast.present();
  }

  simpan() {
    var apiURL = 'http://localhost/api_mega/index.php/Welcome/postData/'+ this.npm + '/' +
    this.password + '/' + this.nama_user + '/' + this.jurusan;
    this.http.get(apiURL)
    .timeout(10000)
    .map(res => res.json()).subscribe((data) => {
    this.data = data;
  }, error => {
    console.log(error);
  });
  this.showToast("Berhasil Menyimpan Data!");
  }

}
