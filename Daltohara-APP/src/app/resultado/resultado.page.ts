import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { IonContent, ModalController } from "@ionic/angular";
import { Modal12Component } from '../componentes/modal12/modal12.component';

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
  async chamarModal12() {
    const modal = await this.modalController.create({
      component: Modal12Component,
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
