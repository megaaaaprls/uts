import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  npm: string;
  password: string;
  nama_user: string;
  jurusan: string;
  data;
  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public http: Http,
    public router: Router,
    public alertCtrl: AlertController
  ) { }

  async showToast(toastmsg: string) {
    const toast = await this.toastCtrl.create({
      message: toastmsg,
      duration: 1000
    })
  }

  showMsg(msg: string){
    this.alertCtrl.create({
      header: 'Notifikasi',
      message: msg,
      buttons: ['OK']
    }).then((alert)=> {
      alert.present();
    });
  }

  login() {
    if(this.npm==null || this.password==null){
      // this.router.navigate(['tabs']);
      this.showMsg('Periksa Kembali NPM dan Password Anda!');
    }
    else{
      let apiURL='http://localhost/api_mega/index.php/login/login';

      let formData= new FormData();
      formData.append('npm', this.npm);
      formData.append('password', this.password);

      this.http.post(apiURL, formData).timeout(10000)
      .map(res => res.json()).retry(5).subscribe((data) => {
        if(data['loginResult'] == 'success'){
          console.log(data);

          this.npm = null;
          this.password = null;

          this.router.navigate(['tabs/tab1']);
          this.showToast("Berhasil Login");
        }
        else{
          this.npm = null;
          this.password = null;

          this.showMsg('Periksa Kembali NPM dan Password Anda!');
        }
      }, error => {
        console.log(error);
      });
    }
  }

  daftar() {
    let navigationExtras = {
      queryParams: {
        npm : this.npm,
        password : this.password,
        nama_user : this.nama_user,
        jurusan : this.jurusan
      }
    };
    this.router.navigate(['tab6'], navigationExtras);
  }
}
