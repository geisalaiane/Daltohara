import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal7",
  templateUrl: "./modal7.component.html",
  styleUrls: ["./modal7.component.scss"],
})
export class Modal7Component implements OnInit {
  constructor(public modal: ModalController) {}

  ngOnInit() {}
  fecharModal() {
    this.modal.dismiss();
  }
}
