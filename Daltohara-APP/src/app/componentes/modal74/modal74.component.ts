import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal74",
  templateUrl: "./modal74.component.html",
  styleUrls: ["./modal74.component.scss"],
})
export class Modal74Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
