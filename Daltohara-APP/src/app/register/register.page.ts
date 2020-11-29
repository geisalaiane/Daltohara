import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { LoadingController, NavController, ToastController } from "@ionic/angular";
import { User } from "../models/user.mode";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"],
})
export class RegisterPage implements OnInit {
  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  async register(user: User) {
    if (this.formValidation()) {
      // show loader
      let loader = this.loadingCtrl.create({
        message: "Espere um pouco...",
      });
      (await loader).present();

      try {
        await this.afAuth
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((data) => console.log(data));

          // redirect to home page
          this.navCtrl.navigateRoot("home");
      } catch (e) {
        this.showToast(e);
      }

      // dimiss loader
      (await loader).dismiss();
    }
  }

  formValidation() {
    if (!this.user.email) {
      this.showToast("Entre com email");
      return false;
    }

    if (!this.user.password) {
      this.showToast("Entre com senha");
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl
      .create({
        message: message,
        duration: 3000,
      })
      .then((toastData) => toastData.present());
  }
}
