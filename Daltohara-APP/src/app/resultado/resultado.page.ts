import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { IonContent, ModalController } from "@ionic/angular";
import { Modal12Component } from '../componentes/modal12/modal12.component';
import { Modal15Component } from '../componentes/modal15/modal15.component';
import { Modal16Component } from '../componentes/modal16/modal16.component';
import { Modal2Component } from '../componentes/modal2/modal2.component';
import { Modal26Component } from '../componentes/modal26/modal26.component';
import { Modal29Component } from '../componentes/modal29/modal29.component';
import { Modal3Component } from '../componentes/modal3/modal3.component';
import { Modal42Component } from '../componentes/modal42/modal42.component';
import { Modal45Component } from '../componentes/modal45/modal45.component';
import { Modal5Component } from '../componentes/modal5/modal5.component';
import { Modal6Component } from '../componentes/modal6/modal6.component';
import { Modal7Component } from '../componentes/modal7/modal7.component';
import { Modal73Component } from '../componentes/modal73/modal73.component';
import { Modal74Component } from '../componentes/modal74/modal74.component';
import { Modal8Component } from '../componentes/modal8/modal8.component';

@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.page.html",
  styleUrls: ["./resultado.page.scss"],
})
export class ResultadoPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async chamarModal2() {
    const modal = await this.modalController.create({
      component: Modal2Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal3() {
    const modal = await this.modalController.create({
      component: Modal3Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal5() {
    const modal = await this.modalController.create({
      component: Modal5Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal6() {
    const modal = await this.modalController.create({
      component: Modal6Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal7() {
    const modal = await this.modalController.create({
      component: Modal7Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal8() {
    const modal = await this.modalController.create({
      component: Modal8Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal12() {
    const modal = await this.modalController.create({
      component: Modal12Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal15() {
    const modal = await this.modalController.create({
      component: Modal15Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal16() {
    const modal = await this.modalController.create({
      component: Modal16Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal26() {
    const modal = await this.modalController.create({
      component: Modal26Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal29() {
    const modal = await this.modalController.create({
      component: Modal29Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal42() {
    const modal = await this.modalController.create({
      component: Modal42Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  async chamarModal45() {
    const modal = await this.modalController.create({
      component: Modal45Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal73() {
    const modal = await this.modalController.create({
      component: Modal73Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async chamarModal74() {
    const modal = await this.modalController.create({
      component: Modal74Component,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


  logScrollStart(event) {
    console.log("logScrollStart : When Scroll Starts", event);
  }

  logScrolling(event) {
    console.log("logScrolling : When Scrolling", event);
  }

  logScrollEnd(event) {
    console.log("logScrollEnd : When Scroll Ends", event);
  }

  ScrollToBottom() {
    this.content.scrollToBottom(1500);
  }

  ScrollToTop() {
    this.content.scrollToTop(1500);
  }

  ScrollToPoint(X, Y) {
    this.content.scrollToPoint(X, Y, 1500);
  }
}
