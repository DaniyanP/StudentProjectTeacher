import { Component, OnInit } from '@angular/core';

//import { NavController, NavParams, AlertController } from '@ionic/angular';
//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //logindata:any = {};
  //stu_project:number;

  constructor(private router: Router
    //public http: HttpClient,
    //public navCtrl: NavController,
    //public navParams: NavParams,
    //public alertCtrl : AlertController
    ) {

      //this.logindata.username = "";
      //this.logindata.password = "";

    }

  ngOnInit() {
  }

  login(){
    /*if(this.logindata.username != "" && this.logindata.password != ""){
      console.log("user:",this.logindata.username);
      console.log("pass:",this.logindata.password);

        let url:string = "http://localhost/projectappsql/login.php";
        let dataPost = new FormData();
      dataPost.append('user',this.logindata.username);
      dataPost.append('pass',this.logindata.password);

      let data:Observable<any> = this.http.post(url,dataPost);
      data.subscribe(data =>{
        if(data != null){
          this.stu_project = data[0].student_project;
          //this.router.navigate(['/tab1'], { project_id: this.stu_project });
          //this.navCtrl.setRoot(HomePage,{project_id:this.stu_project});
        }else{
          console.log("login Fail.");
          //this.alertPopup("แจ้งเตือน","เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
        }
        console.log(this.stu_project);
      });
    }else{
      console.log("Enter Password");
    }*/
    this.router.navigate(['/tab1']);
  }

  /*alertPopup(title:string, Msg:string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle:Msg,
      buttons: ['OK']
    });
    alert.present();
  }*/

}
