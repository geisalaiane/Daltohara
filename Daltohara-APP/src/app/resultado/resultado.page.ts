import { Component, OnInit } from "@angular/core";
import { ViewChild } from "@angular/core";
import { IonContent } from "@ionic/angular";

@Component({
  selector: "app-resultado",
  templateUrl: "./resultado.page.html",
  styleUrls: ["./resultado.page.scss"],
})
export class ResultadoPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor() {}

  ngOnInit() {}

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
